import React, { useEffect } from "react";
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
import getBaseUrl from "utils/getBaseUrl";

import "../style/main.scss";
import "../style/olivo.css";

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
          address
          anchor
          anchorId
          appointmentCta
          brandLogo
          brandName
          closer
          content
          copyright
          cta
          cta1
          cta2
          descriptions {
            label
            image
          }
          email
          explainer
          header
          imageFileName
          inNavbar
          inFooter
          isActive
          jumpToAnchor
          jumpToAnchorText
          menuText
          name
          number
          partners {
            logo
            name
          }
          phone
          referCta
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
          subheaderFocus
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
        <ScrollToButton spaced target={`${getBaseUrl(defaultLang, langKey)}refer`} jumpToAnchorText={topNode.frontmatter.referCta} color="primary" />
        <ScrollToButton spaced jumpToAnchor="contact" jumpToAnchorText={topNode.frontmatter.appointmentCta} color="success" />
      </>
    );
  }

  useEffect(() => {
    /* const olivoDiv = document.createElement("div");
    olivoDiv.id = "widget";
    const olivoScript = document.createElement("script");
    olivoScript.type = 'text/javascript';
    olivoScript.src = "/chat-widget/main.js"
    document.body.appendChild(olivoDiv);
    document.body.appendChild(olivoScript); */
    const zohoScript = document.createElement("script");
    zohoScript.type = 'text/javascript';
    zohoScript.src = "/zoho.js"
    document.body.appendChild(zohoScript);
  }, []);

  return (
    <>
      <SEO lang={langKey} title="Hedg" keywords={keywords} description={description} />
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
