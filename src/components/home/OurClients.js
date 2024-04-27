import React from "react";
import StyledOurClients from "./style/our-clients";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import data from "../../content/home/our-clients.json";

const OurClients = () => {
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledOurClients>
      <Slider {...settings}>
        {data.list.map((d, i) => (
          <div className="flex justify-center">
            <Link to={d.link} target="_blank">
              <img
                className="hover:grayscale-[100%] w-[100px] h-[100px]"
                src={d.icon}
                alt={d.name}
                title={d.name}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </StyledOurClients>
  );
};

export default OurClients;
