import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";

import Image from "components/Image";
import "./ServiceItem.scss";

const ServiceItem = ({ imageFileName, header, content, inverted }) => {
  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="service-item-image" fileName={imageFileName} />;
  }

  return (
    <Row className={clsx("service text-center align-items-center", { "flex-row-reverse": inverted })}>
      <Col md={6} sm={12} className="py-5 text-center">
        {imagePart}
      </Col>
      <Col md={6} sm={12}>
        <h4 className="service-item-heading">{header}</h4>
        <p className="text-primary">{content}</p>
      </Col>
    </Row>
  );
};

ServiceItem.propTypes = {
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  inverted: PropTypes.bool,
};

ServiceItem.defaultProps = {
  imageFileName: null,
  header: "",
  content: "",
  inverted: false,
};

export default ServiceItem;
