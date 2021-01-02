import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import Image from "components/Image";

import "./TeamMember.scss";

const TeamMember = ({ imageFileName, name, role, description, reverse, step }) => {
    const order = reverse ? "order-first" : "order-last";
    const align = reverse ? "text-right" : "text-left";
  return (
    <Row className="align-items-center justify-content-center my-4 w-100">
        <Col md={8} className={`${order} ${align} member-info member-${step} p-4`}>
            <h3>{name}</h3>
            <h5>{role}</h5>
            <p>{description}</p>
        </Col>
        <Col md={4} className={`text-center`}>
            <Image className="image headshot" fileName={imageFileName} />
        </Col>
    </Row>
  );
};

TeamMember.propTypes = {
    imageFileName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string,
    reverse: PropTypes.bool,
    step: PropTypes.number
};

TeamMember.defaultProps = {
    description: "",
    reverse: true,
    step: 1,
};

export default TeamMember;
