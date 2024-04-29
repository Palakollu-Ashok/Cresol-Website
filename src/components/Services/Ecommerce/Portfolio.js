import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import portfolio from "../../../content/Services/Ecommerce/Portfolio.json";
import StyledPortfolio from "../styles/portfolio";

const Portfolio = () => {
  var settings = {
    autoplay: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: portfolio.portfolioList.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: portfolio.portfolioList.length,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: portfolio.portfolioList.length,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: portfolio.portfolioList.length,
        },
      },
    ],
  };
  return (
    <StyledPortfolio>
      <div className="main-container">
        <h2 className="text-white">{portfolio.heading}</h2>
        <p className="sub-heading">{portfolio.subHeading}</p>
        <ul className="portfolio-list">
          <Slider {...settings}>
            {portfolio.portfolioList.map((d, i) => (
              <li className="portfolio-item" key={i}>
                <div>
                  <img src={d.image} alt={d.heading} />
                </div>
                <div className="info">
                  <a
                    className="name"
                    href={d.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {d.heading}
                  </a>
                  <p className="description">{d.description}</p>
                  <a
                    className="button"
                    href={d.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore
                    <FaArrowRight />
                  </a>
                </div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
