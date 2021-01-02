import React from "react";
import PropTypes from "prop-types";

import "./Underline.scss";

const Underline = ({ color }) => {
  return <div className={`underline-full btn-rounded bg-${color}`}></div>;
};

Underline.propTypes = {
  color: PropTypes.string
};

Underline.defaultProps = {
  color: "warning",
};

export default Underline;
