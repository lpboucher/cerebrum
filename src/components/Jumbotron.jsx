import React from "react";
import PropTypes from "prop-types";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Image from "components/Image";

import "./Jumbotron.scss";

const Jumbo = ({ imageFileName, imageAlt, header, subheader, extraInfo }) => {
  return (
    <Jumbotron fluid className="px-3 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12} className="pt-5 px-0 justify-content-around">
            <p className="pb-5">
              {subheader}
            </p>
            {header}
            {extraInfo}
          </Col>
          <Col md={6} sm={12} className="text-center py-5">
            <Image className="image p-3" fileName={imageFileName} alt={subheader} />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

Jumbo.propTypes = {
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.object,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

Jumbo.defaultProps = {
  imageFileName: null,
  imageAlt: null,
  header: null,
  subheader: "",
  extraInfo: null,
};

export default Jumbo;
