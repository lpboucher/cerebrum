import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import clsx from "clsx";

import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import { Button } from "react-bootstrap";
import "./ScrollToButton.scss";

const ScrollToButton = ({ className, jumpToAnchor, jumpToAnchorText, color, size, spaced, target }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const buttonAction = jumpToAnchor ? useSmoothScrollTo(jumpToAnchor) : () => navigate(target);
  // className={clsx("dropdown-item", { active: key === langKey })}
  return (
    <Button size={size} variant={color} color="primary" className={clsx("px-3 mr-1 text-primary btn-rounded font-weight-bold", { "spaced": spaced }, className)} onClick={buttonAction}>
      {jumpToAnchorText}
    </Button>
  );
};

ScrollToButton.propTypes = {
  className: PropTypes.string,
  jumpToAnchor: PropTypes.string,
  jumpToAnchorText: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  spaced: PropTypes.bool,
  target: PropTypes.string,
};

ScrollToButton.defaultProps = {
  className: null,
  color: "success",
  size: "md",
  spaced: false,
  target: null,
  jumpToAnchor: null,
};

export default ScrollToButton;
