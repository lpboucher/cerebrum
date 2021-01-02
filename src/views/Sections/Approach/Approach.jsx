import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Image from "components/Image";
import Highlight from "components/Highlight"
import Underline from "components/Underline"

const Approach = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, main, highlight, footer, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
          <Col>
            <Image className="image" fileName={imageFileName} />
          </Col>
          <Col>
            <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            <Underline color="success" />
            {main.map((item) => <p>{item}</p>)}
            <h4>{footer[0]} <Highlight text={highlight} bg="secondary"/> {footer[1]}.</h4>
          </Col>
      </Row>
    </PageSection>
  );
};

Approach.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Approach.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Approach;
