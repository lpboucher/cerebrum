import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import Image from "components/Image";
import StatsItem from "components/StatsItem";

import "./StatsBlock.scss";

const StatsBlock = ({ reverse, header, imageFileName, stats }) => {
    const order = reverse ? "last" : "first";
    const blockSize = stats.length;
    return (
        <Row className="align-items-center justify-content-center my-5">
            <Col lg={{span: 6, order: order}} md={{span: 12, order: 2}}>
                <h3 className="text-midsize">{header}</h3>
                {stats.map(oneStat => <StatsItem key={`stat: ${oneStat.number}`} {...oneStat} />)}
            </Col>
            <Col lg={{span: 6, order: 1}} md={{span: 12, order: 2}} className={`text-center pt-md-0 pt-sm-3 pt-3`}>
                <Image className={`stats-image stats-image-${blockSize}`} fileName={imageFileName} />
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
