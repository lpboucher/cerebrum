import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Top from "views/Top";
import Footer from "views/Footer";
import * as Sections from "views/Sections";
import SEO from "components/SEO";
import LanguageSelector from "components/LanguageSelector";
import ScrollToButton from "components/ScrollToButton";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";
import fileNameToSectionName from "utils/fileNameToSectionName";

import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
export const query = graphql`
  query IndexQuery($langKey: String!) {
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
          additional
          anchor
          anchorId
          brandLogo
          brandName
          contactCta
          content
          copyright
          cta
          email
          footer
          header
          highlight
          imageFileName
          inNavbar
          inFooter
          isActive
          jumpToAnchor
          jumpToAnchorText
          main
          name
          number
          sections {
              header
              imageFileName
              stats {
                  number
                  explanation
                  link
              }
          }
          sectionFooter
          subheader
          team {
              imageFileName
              name
              role
              description
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

const IndexPage = ({ data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    site: {
      siteMetadata: { keywords, description },
    },
    allMarkdownRemark: { nodes },
  } = data;

  const location = "/";

  const { topNode, navBarNode, footerNode, sectionsNodes, navAnchors, footAnchors } = breakDownAllNodes(nodes);

  let langSelectorPart;
  if (langTextMap != null && Object.keys(langTextMap).length > 1) {
    langSelectorPart = (
      <>
        <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
        <ScrollToButton spaced jumpToAnchor="contact" jumpToAnchorText={topNode.frontmatter.contactCta} color="success" />
      </>
    );
  }

  return (
    <>
      <SEO lang={langKey} title="Cerebrum" keywords={keywords} description={description} />
      <Navbar
        anchors={navAnchors}
        frontmatter={navBarNode.frontmatter}
        extraItems={langSelectorPart}
        location={location}
        language={langKey}
      />
      <Top frontmatter={topNode.frontmatter} />
      {
        // dynamically import sections
        sectionsNodes.map(({ frontmatter, fields: { fileName } }, ind) => {
          const sectionComponentName = fileNameToSectionName(fileName);
          const SectionComponent = Sections[sectionComponentName];

          return SectionComponent ? (
            <SectionComponent
              key={sectionComponentName}
              className={ind % 2 === 1 ? "bg-light" : null}
              frontmatter={frontmatter}
            />
          ) : null;
        })
      }
      <Footer anchors={footAnchors} frontmatter={footerNode.frontmatter} />
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object,
};

IndexPage.defaultProps = {
  pathContext: {
    langKey: "en",
    defaultLang: "en",
    langTextMap: {},
  },
};

export default IndexPage;
