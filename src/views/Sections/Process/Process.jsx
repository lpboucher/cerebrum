import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ProcessItem from "components/ProcessItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import "./Process.scss";

const Process = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, steps } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="process">
        {steps.map((step, index) => (
          <Col md={4} sm={12} key={step.title}>
            <ProcessItem className={className} stepNumber={index + 1} {...step} />
          </Col>
        ))}
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
