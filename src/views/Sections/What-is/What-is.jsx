import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import WhatIsItem from "components/WhatIsItem";

import "./What-is.scss";

const Whatis = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, subheaderFocus, descriptions, closer } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row className="what-is">
        <Col className="text-center">
          <SectionHeader header={rootHeader} />
          <h3 className="section-subheading">{rootSubHeader}</h3>
          <h3 className="mb-3 section-subheading font-weight-bold">{subheaderFocus}</h3>
        </Col>
      </Row>
      <Row className="what-is">
        {descriptions.map((description, index) =>
          // eslint-disable-next-line react/no-array-index-key
          <WhatIsItem key={`what-is-${index}`} step={index + 1} {...description} />
        )}
        <p className="px-5 pt-3 text-center">{closer}</p>
      </Row>
    </PageSection>
  );
};

Whatis.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Whatis.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Whatis;
