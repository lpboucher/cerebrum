import React from "react";
import PropTypes from "prop-types";

import Jumbotron from "components/Jumbotron";
import ScrollToButton from "components/ScrollToButton";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <ScrollToButton size="xl" jumpToAnchor={jumpToAnchor} jumpToAnchorText={jumpToAnchorText} color="success" />
    );
  }

  return (
    <Jumbotron
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
