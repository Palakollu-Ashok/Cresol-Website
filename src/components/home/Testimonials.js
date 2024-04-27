import React from "react";
import StyledTestimonials from "./style/testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import data from "../../content/home/testimonials.json";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

const Testimonials = () => {
  var settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <StyledTestimonials>
      <div className="main-container">
        <h2 className="text-center text-black">{data.heading}</h2>

        <div className="wrapper">
          <Slider {...settings}>
            {data.list.map((d, i) => (
              <div className="testimonial-item" key={i}>
                <div className="testimonial-wrapper">
                  <div className="testimonial-content">
                    <p>{d.description}</p>
                  </div>
                  <div className="testimonial-name">
                    <h6>{d.personName}</h6>
                    <span>{d.companyName}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </StyledTestimonials>
  );
};

export default Testimonials;
