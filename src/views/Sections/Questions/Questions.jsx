import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import "./Questions.scss";

const Process = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, explainer, cta1, cta2 } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <Col className="questions text-center">
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          <p>{explainer}</p>
          <div className="cta-container d-flex align-items-center justify-content-center">
            <p className="mb-0 cta">{cta1}</p>
            <Button className="mx-2 harry cta" />
            <p className="mb-0 cta">{cta2}</p>
          </div>
        </Col>
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
