import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import Image from "components/Image";
import StatsItem from "components/StatsItem";

import "./StatsBlock.scss";

const StatsBlock = ({ reverse, header, imageFileName, stats }) => {
    const order = reverse ? "order-last" : "order-first";
  return (
      <Row className="align-items-center justify-content-center my-4">
          <Col className={`${order} text-center`}>
            <h3>{header}</h3>
            {stats.map(oneStat => <StatsItem {...oneStat} />)}
          </Col>
          <Col className={`text-center`}>
            <Image className="stats-image" fileName={imageFileName} />
          </Col>
      </Row>
  )
};

StatsBlock.propTypes = {
    reverse: PropTypes.bool,
    header: PropTypes.string.isRequired,
    imageFileName: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
};

StatsBlock.defaultProps = {
    reverse: true,
};

export default StatsBlock;
