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

  const { header, highlight, subheader, additional, imageFileName, jumpToAnchor, jumpToAnchorText, jumpToAnchor2, jumpToAnchorText2 } = frontmatter;
  const fullHeader = <h1 className="mb-3 pb-4 font-weight-bold text-primary text-large">{header}<Highlight text={highlight}/>.</h1>

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
        <>
            <ScrollToButton className="mt-3 jumbo-btn" size="xl" jumpToAnchor={jumpToAnchor} jumpToAnchorText={jumpToAnchorText} color="danger" />
            <ScrollToButton className="mt-3 ml-3 jumbo-btn variable-mgn" size="xl" jumpToAnchor={jumpToAnchor2} jumpToAnchorText={jumpToAnchorText2} color="warning" />
        </>
    );
  }

  return (
    <Jumbotron
      imageFileName={imageFileName}
      header={fullHeader}
      subheader={subheader}
      extraInfo={extraInfoPart}
      additional={additional}
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
