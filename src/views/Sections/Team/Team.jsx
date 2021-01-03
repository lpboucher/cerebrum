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
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <SectionHeader header={rootHeader} centered/>
          <Underline color="danger" />
          <h3 className="text-regular section-subheading">{rootSubHeader}</h3>
        </Col>
      </Row>
      <Row className="team">
        <Col className="px-5">
        {team.map((member, index) =>
          // eslint-disable-next-line react/no-array-index-key
            <TeamMember key={`team-${index}`} step={index + 1} reverse={index % 2 === 1} {...member} />
        )}
        </Col>
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
