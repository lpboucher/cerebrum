import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Underline from "components/Underline";
import Image from "components/Image";

import "./Process.scss";

const Process = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, content, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        <Underline color="warning" />
        <p>{content}</p>
        <Image className="image" fileName={imageFileName} />
      </Row>
    </PageSection>
  );
};

Process.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Process.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Process;
