import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import clsx from "clsx";

import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import { Button } from "react-bootstrap";

const ScrollToButton = ({ jumpToAnchor, jumpToAnchorText, color, size, spaced, target }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const buttonAction = jumpToAnchor ? useSmoothScrollTo(jumpToAnchor) : () => navigate(target);
  // className={clsx("dropdown-item", { active: key === langKey })}
  return (
    <Button size={size} variant={color} color="white" className={clsx("px-3 mr-1 text-white btn-rounded font-weight-bold", { "spaced": spaced })} onClick={buttonAction}>
      {jumpToAnchorText}
    </Button>
  );
};

ScrollToButton.propTypes = {
  jumpToAnchor: PropTypes.string,
  jumpToAnchorText: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  spaced: PropTypes.bool,
  target: PropTypes.string,
};

ScrollToButton.defaultProps = {
  color: "success",
  size: "md",
  spaced: false,
  target: null,
  jumpToAnchor: null,
};

export default ScrollToButton;
