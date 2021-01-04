import React from "react";
import PropTypes from "prop-types";

import Jumbotron from "components/Jumbotron";
import ScrollToButton from "components/ScrollToButton";
import Highlight from "components/Highlight";

import "./Top.scss";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, highlight, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
  const fullHeader = <h1 className="pb-4 font-weight-bold text-primary text-large">{header}<Highlight text={highlight}/>.</h1>

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <ScrollToButton className="mt-3 jumbo-btn" size="xl" jumpToAnchor={jumpToAnchor} jumpToAnchorText={jumpToAnchorText} color="danger" />
    );
  }

  return (
    <Jumbotron
      imageFileName={imageFileName}
      header={fullHeader}
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
