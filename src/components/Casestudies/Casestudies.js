import React from "react";
import data from "../../content/Casestudies/Casestudies.json";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import StyledCaseStudiesList from "./Styles/CaseStudiesStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

function Casestudies() {
  var settings = {
    autoplay: false,
    dots: true,
    infinite: data.length < 6 ? false : true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledCaseStudiesList>
      <div className="main-container">
        {/* <Heading text={headings.heading} color="" /> */}
        <h2 className="text-white">{data.title}</h2>
        <p className="sub-heading">{data.heading}</p>
        <ul className="portfolio-list">
          <Slider {...settings}>
            {data.cards.map((d, i) => (
              <li className="portfolio-item" key={i}>
                <div className="image">
                  <img src={d.image} alt={d.title} />
                </div>
                <div className="info">
                  <a
                    className="name"
                    href={d.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span> {d.title}</span>
                  </a>
                  <p className="description">{d.description}</p>
                  <a
                    className="button"
                    href={d.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span> Explore</span>
                    <FaArrowRight />
                  </a>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </StyledCaseStudiesList>
  );
}

export default Casestudies;
