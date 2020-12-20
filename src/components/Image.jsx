import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ fileName, alt, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1920) {
                  ...GatsbyImageSharpSizes
                }
              }
              extension
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(fileName));

      if (!image) {
        return null;
      }

      if (image.node.extension !== "svg") {
        const imageSizes = image.node.childImageSharp.sizes;
        return <Img alt={alt} sizes={imageSizes} {...restProps} />
      }

      return <img src={image.node.publicURL} alt={alt} {...restProps} />;
    }}
  />
);

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: null,
};

export default Image;
