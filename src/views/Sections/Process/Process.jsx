import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";

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
      <Row className="align-items-center justify-content-center">
        <SectionHeader header={rootHeader} subheader={rootSubHeader} centered />
        <Underline color="warning" />
        <p className="text-regular text-center mx-lg-5 px-lg-5">{content}</p>
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
