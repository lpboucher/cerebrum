import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import getBaseUrl from "utils/getBaseUrl";

import clsx from "clsx";

import { Navbar, Container, Nav } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import Image from "components/Image";
import NavItem from "components/NavItem";
import { defaultLang } from "../../../config/site";

import "./Navbar.scss";

const MyNavbar = ({ language, location, anchors, frontmatter, extraItems }) => {
  const { brandLogo, brandName } = frontmatter;

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    if (location === "/") {
      handleScrollToTop()
    } else {
      navigate(`${getBaseUrl(defaultLang, language)}`)
    };
  }, [language, location, closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 80);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={clsx("navbar-root", { "navbar-shrink": shrink })}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          <Image className={clsx("p-0 logo-root", { "logo-shrink": shrink })} fileName={brandLogo} alt={brandName} />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          <Icon iconName="BarsIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {location === "/" && anchors.map(({ anchor, id }) => (
              <NavItem key={id} to={id} onClick={closeMenu}>{anchor}</NavItem>
            ))}
          </Nav>
          {extraItems}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.shape({
    anchor: PropTypes.string,
    id: PropTypes.string,
  })),
  frontmatter: PropTypes.object,
  extraItems: PropTypes.any,
  location: PropTypes.string,
  language: PropTypes.string,
};

MyNavbar.defaultProps = {
  anchors: [],
  frontmatter: {},
  extraItems: null,
  location: "/",
  language: "en",
};

export default MyNavbar;
