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
          <Col lg={{span: 6, order: 1}} md={{span: 12, order: 2}} sm={{span: 12, order: 2}} xs={{span: 12, order: 2}} className="d-flex align-items-center justify-content-center">
            <Image className="image" fileName={imageFileName} />
          </Col>
          <Col lg={{span: 6, order: 2}} md={{span: 12, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
            <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            <Underline color="success" />
            {main.map((item, index) => <p key={`content-${index}`} className="text-regular">{item}</p>)}
            <h4 className="text-midsize">{footer[0]} <Highlight text={highlight} bg="secondary"/> {footer[1]}.</h4>
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
