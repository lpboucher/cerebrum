import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import "./StatsItem.scss";

const StatsItem = ({ number, explanation }) => {
  return (
      <Row className="my-3">
          <Col md={4}>
            <div className="d-flex align-items-center justify-content-center stat-box stat-number p-4">
                <p>{number}</p>
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex align-items-center justify-content-center stat-box stat-text p-4">
                <p>{explanation}</p>
            </div>
          </Col>
      </Row>
  )
};

StatsItem.propTypes = {
    number: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired
};

export default StatsItem;
