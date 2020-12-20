import { curry, pathSatisfies, test, identity, path } from "ramda";

const propFilter = curry((pathList, regex) => pathSatisfies(test(regex), pathList));

/**
 * break down all data retrieved in index.js
 */
export default function breakDownAllNodes(nodes) {
  const filterByFileName = propFilter(["fields", "fileName"]);
  const filterByDirectoryName = propFilter(["fields", "directoryName"]);

  // top part
  const topNode = nodes.find(filterByFileName(/top/i)) || {};
  // navbar
  const navBarNode = nodes.find(filterByFileName(/navbar/i)) || {};
  // footer
  const footerNode = nodes.find(filterByFileName(/footer/i)) || {};
  // refer
  const referNode = nodes.find(filterByFileName(/refer/i)) || {};

  // sections part
  const sectionsNodes = nodes.filter(filterByDirectoryName(/sections/i));
  const activeSectionsNodes = sectionsNodes.filter(({ frontmatter }) => frontmatter.isActive);

  // anchors for NavBar
  const anchors = sectionsNodes.map(path(["frontmatter", "anchor"])).filter(identity);

  const navAnchors = sectionsNodes.filter(({ frontmatter }) => frontmatter.inNavbar).map(({ frontmatter }) => ({ anchor: frontmatter.anchor, id: frontmatter.anchorId }));
  const footAnchors = sectionsNodes.filter(({ frontmatter }) => frontmatter.inFooter).map(({ frontmatter }) => ({ anchor: frontmatter.anchor, id: frontmatter.anchorId }));

  return {
    topNode,
    navBarNode,
    footerNode,
    referNode,
    sectionsNodes: activeSectionsNodes,
    anchors,
    navAnchors,
    footAnchors
  };
}
