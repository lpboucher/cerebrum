import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Nav } from "react-bootstrap";
import NavItem from "components/NavItem";
import Image from "components/Image";

import "./Footer.scss";

const Footer = ({ anchors, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    brandLogo,
    brandName,
    copyright,
  } = frontmatter;

  return (
    <footer className="bg-light text-white footer py-3">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={3} sm={3} xs={3} className="d-flex flex-column justify-content-between text-lg-left">
            <div>
              <Image className="light-logo" fileName={brandLogo} alt={brandName} />
            </div>
          </Col>
          <Col md={9} sm={9} xs={9} className="pt-3 my-3 my-lg-0">
            <Nav className="footer-link text-uppercase ml-auto">
                {anchors.map(({ anchor, id }) => (
                    <NavItem key={id} to={id}>{anchor}</NavItem>
                ))}
            </Nav>
            <p className="text-primary mt-3 ml-5 small">{copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.shape({
    anchor: PropTypes.string,
    id: PropTypes.string,
  })),
  frontmatter: PropTypes.object,
  location: PropTypes.string,
};

Footer.defaultProps = {
  anchors: [],
  frontmatter: null,
  location: "/",
};

export default Footer;
