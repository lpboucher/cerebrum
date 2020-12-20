import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Footer from "views/Footer";
import SEO from "components/SEO";
import LanguageSelector from "components/LanguageSelector";
import Image from "components/Image";
import ZohoForm from "components/ZohoForm";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";

import "../style/main.scss";

export const query = graphql`
  query ReferQuery($langKey: String!) {
    site {
      siteMetadata {
        keywords
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          address
          anchor
          anchorId
          brandLogo
          brandName
          content
          copyright
          explainer
          header
          imageFileName
          inNavbar
          inFooter
          jumpToAnchor
          jumpToAnchorText
          menuText
          partners {
            logo
            name
          }
          phone
          services {
            content
            header
            iconName
            imageFileName
          }
          slogan
          social {
            facebook
            github
            linkedin
            medium
            twitter
          }
          steps {
            title
            content
          }
          subheader
          testimonials {
            content
          }
          title
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`;

const ReferPage = ({ data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    site: {
      siteMetadata: { keywords, description },
    },
    allMarkdownRemark: { nodes },
  } = data;

  const location = "/refer";

  const { navBarNode, footerNode, referNode, navAnchors, footAnchors } = breakDownAllNodes(nodes);

  const { header, subheader, imageFileName } = referNode.frontmatter;

  let langSelectorPart;
  if (langTextMap != null && Object.keys(langTextMap).length > 1) {
    langSelectorPart = (
      <>
        <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
      </>
    );
  }

  return (
    <>
      <SEO lang={langKey} title="Top" keywords={keywords} description={description} />
      <Navbar
        anchors={navAnchors}
        frontmatter={navBarNode.frontmatter}
        extraItems={langSelectorPart}
        location={location}
        language={langKey}
      />
      <Jumbotron fluid className="px-3 mb-0 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} sm={12} className="text-center custom-spaced">
              <Image className="image" fileName={imageFileName} alt={header || subheader} />
            </Col>
            <Col md={6} sm={12} className="py-5 px-0 justify-content-around">
              <ZohoForm language={langKey} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Footer anchors={footAnchors} frontmatter={footerNode.frontmatter} location={location} />
    </>
  );
};

ReferPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object,
};

ReferPage.defaultProps = {
  pathContext: {
    langKey: "en",
    defaultLang: "en",
    langTextMap: {},
  },
};

export default ReferPage;
