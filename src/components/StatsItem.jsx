import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import "./StatsItem.scss";

const StatsItem = ({ number, explanation, link }) => {
  return (
      <Row className="my-3">
          <Col md={4} sm={4} xs={4} className="stat-bubble">
            <div className="d-flex align-items-center justify-content-center stat-box stat-number p-4">
                <p>{number}</p>
            </div>
          </Col>
          <Col md={8} sm={8} xs={8} className="stat-bubble">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center stat-box stat-text p-4"
            >
                <p dangerouslySetInnerHTML={{ __html: explanation}} />
            </a>
          </Col>
      </Row>
  )
};

StatsItem.propTypes = {
    number: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default StatsItem;
