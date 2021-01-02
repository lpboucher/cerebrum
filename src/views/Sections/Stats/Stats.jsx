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
        <Col className="stats text-center">
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          <Underline color="secondary" />
        </Col>
      </Row>
      {sections.map((oneSection, index) => <StatsBlock reverse={index % 2 === 1} {...oneSection} />)}
      <Row>
          <Col>
            <h4>{sectionFooter} <Highlight text={highlight} bg="danger"/>.</h4>
          </Col>
      </Row>
    </PageSection>
  );
};

Stats.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  sectionFooter: PropTypes.string.isRequired,
  highlight: PropTypes.string,
};

Stats.defaultProps = {
  className: null,
  frontmatter: null,
  highlight: "Mental Fitness."
};

export default Stats;
