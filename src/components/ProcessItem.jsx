import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./ProcessItem.scss";

const stepColor = ["text-warning", "text-primary", "text-success"]

const ProcessItem = ({ className, title, content, stepNumber }) => {
  return (
    <>
      <h1 className={clsx("text-center m-5 xl-step font-weight-bold", className, stepColor[stepNumber - 1])}>{stepNumber}</h1>
      <h3 className="text-center py-3">{title}</h3>
      <p className="text-center">{content}</p>
    </>
  );
};

ProcessItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  stepNumber: PropTypes.number,
};

ProcessItem.defaultProps = {
  className: null,
  stepNumber: 1,
};

export default ProcessItem;
