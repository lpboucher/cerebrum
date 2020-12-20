import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import Carousel from "react-elastic-carousel";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Image from "components/Image";

import "./Partners.scss";

const Partners = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const sliderBreakpoints = [
    { width: 576, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
  ]

  const { anchorId, header, partners } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchorId}>
      <Row>
        <SectionHeader header={header} />
      </Row>
      <Row>
        <Carousel
          className="partner-slider"
          enableAutoPlay
          showArrows={false}
          breakPoints={sliderBreakpoints}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="mt-5 pagination">
                {pages.map(page => {
                  const isActivePage = activePage === page
                  return (
                    <button
                      className={clsx("page-btn", isActivePage && "page-btn-active")}
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                      type="button"
                    > </button>
                  )
                })}
              </div>
            )
          }}
        >
          {partners.map(({ name, logo }) => (
            <Col className={clsx("my-3", className)} key={logo}>
              <Image fileName={logo} alt={name} />
            </Col>
          ))}
        </Carousel>
      </Row>
    </PageSection>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Partners.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Partners;
