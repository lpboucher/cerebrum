const path = require("path");
const getBaseUrl = require("./src/utils/getBaseUrl");
const { defaultLang, langTextMap = {} } = require("./config/site");

/**
 * add fileName to node for markdown files
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileName = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: "fileName",
      value: fileName,
    });

    createNodeField({
      node,
      name: "directoryName",
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    });
  }
};

/**
 * define nullable items
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
    `type Frontmatter {
      anchor: String
      jumpToAnchor: String
      jumpToAnchorText: String
    }`,
  ];

  createTypes(typeDefs);
};

/**
 * generate i18n top pages
 */
exports.createPages = ({ graphql, actions: { createPage, createRedirect } }) => {
  const topIndex = path.resolve("./src/templates/top-index.jsx");

  createRedirect({ fromPath: 'http://joincerebrum.ca/*', toPath: 'https://joincerebrum.com/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://joincerebrum.ca/*', toPath: 'https://joincerebrum.com/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'http://www.joincerebrum.ca/*', toPath: 'https://joincerebrum.com/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://www.joincerebrum.ca/*', toPath: 'https://joincerebrum.com/:splat', isPermanent: true, force: true })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              distinct(field: fields___langKey)
            }
          }
        `,
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        data.allMarkdownRemark.distinct.forEach((langKey) => {
          createPage({
            path: getBaseUrl(defaultLang, langKey),
            component: topIndex,
            context: {
              langKey,
              defaultLang,
              langTextMap,
            },
          });
        });

        return null;
      }),
    );
  });
};
