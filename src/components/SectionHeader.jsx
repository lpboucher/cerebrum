import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Col } from "react-bootstrap";
import "./SectionHeader.scss";

const SectionHeader = ({ header, subheader, className, ...restProps }) => {
  const subheaderPart = subheader ? (
    <h3 className="section-subheading my-5">{subheader}</h3>
  ) : null;

  return (
    <Col lg={12} className={clsx("section-header", "p-0", className)} {...restProps}>
      <h2 className={clsx("section-heading", "font-weight-bold", restProps.centered ? "text-center" : null)}>{header}</h2>
      {subheaderPart}
    </Col>
  );
};

SectionHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  className: PropTypes.string,
};

SectionHeader.defaultProps = {
  header: "",
  subheader: "",
  className: null,
};

export default SectionHeader;
