import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Highlight from "components/Highlight"
import Underline from "components/Underline"
import StatsBlock from "components/StatsBlock";

import "./Stats.scss";

const Stats = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, sections, sectionFooter, highlight } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <Col className="stats d-flex flex-column align-items-center justify-content-center">
          <SectionHeader header={rootHeader} subheader={rootSubHeader} centered />
          <Underline color="secondary" />
        </Col>
      </Row>
      {sections.map((oneSection, index) => <StatsBlock key={`block-${index}`} reverse={index % 2 === 1} {...oneSection} />)}
      <Row className="mt-5">
          <Col className="pt-4">
            <h4 className="text-midsize text-center px-lg-5 mx-lg-5">{sectionFooter} <Highlight text={highlight} bg="danger"/>.</h4>
          </Col>
      </Row>
    </PageSection>
  );
};

Stats.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  sections: PropTypes.arrayOf(PropTypes.object),
  sectionFooter: PropTypes.string,
  highlight: PropTypes.string,
};

Stats.defaultProps = {
  className: null,
  frontmatter: null,
  highlight: "Mental Fitness.",
  sectionFooter: "",
  sections: []
};

export default Stats;
