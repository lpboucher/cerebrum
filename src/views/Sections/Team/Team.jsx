import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Underline from "components/Underline"
import TeamMember from "components/TeamMember";

import "./Team.scss";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, team } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row className="team">
        <Col className="text-center">
          <SectionHeader header={rootHeader} />
          <Underline color="danger" />
          <h3 className="section-subheading">{rootSubHeader}</h3>
        </Col>
      </Row>
      <Row className="team">
        {team.map((member, index) =>
          // eslint-disable-next-line react/no-array-index-key
          <TeamMember key={`team-${index}`} step={index + 1} reverse={index % 2 === 1} {...member} />
        )}
      </Row>
    </PageSection>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;
