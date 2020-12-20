import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
// import TestimonialItem from "components/TestimonialItem";

import "./Testimonials.scss";

const slideBackgrounds = ["bg-primary", "bg-secondary", "bg-success"];

const Testimonials = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, testimonials } = frontmatter;

  const sliderBreakpoints = [
    { width: 576, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 2 },
    { width: 992, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
  ]

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Carousel
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
        {testimonials.map((testimonial, index) => (
          <div className={`${slideBackgrounds[index % 3]} single-slide rounded`} key={testimonial.content.slice(0, 10)}>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </Carousel>
    </PageSection>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Testimonials.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Testimonials;
