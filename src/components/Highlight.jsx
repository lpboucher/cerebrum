import React from "react";
import PropTypes from "prop-types";

import "./Highlight.scss";

const Highlight = ({ text, bg }) => {
  return <mark className={`underlined text-primary bg-${bg}`}>{text}</mark>;
};

Highlight.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string
};

Highlight.defaultProps = {
  bg: "warning",
};

export default Highlight;
