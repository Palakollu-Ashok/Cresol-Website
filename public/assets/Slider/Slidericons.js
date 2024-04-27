import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import qr from "../../images/images/about S11.svg";
import codesandbox from "../../images/images/about s4.svg";
import tech4 from "../../images/images/About S8.svg";
import tech5 from "../../images/images/about S6.svg";
import tech6 from "../../images/images/about S7.svg";
import tech7 from "../../images/images/about s4.svg";
import tech8 from "../../images/images/about 8.svg";
import tech9 from "../../images/images/about S9.svg";
import tech10 from "../../images/images/about S10.svg";
import tech11 from "../../images/images/about S11.svg";
import tech12 from "../../images/images/about S6.svg";

function slidericons() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ml-15 p-10">
      <div className="w-full  ">
        <Slider {...settings}>
          <div className="slick-slide  ">
            <img
              src={qr}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>

          <div className="slick-slide inline-block">
            <img
              src={codesandbox}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>
          <div className="slick-slide">
            <img
              src={tech4}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>
          <div className="slick-slide">
            <img
              src={tech5}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>

          <div className="slick-slide">
            <img
              src={tech6}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>
          <div className="slick-slide">
            <img
              src={tech7}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>
          <div className="slick-slide">
            <img
              src={tech8}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>

          <div className="slick-slide">
            <img
              src={tech9}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>

          <div className="slick-slide">
            <img
              src={tech10}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>

          <div className="slick-slide">
            <img
              src={tech11}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>
          <div className="slick-slide">
            <img
              src={tech12}
              alt=""
              className="h-14 w-auto mx-auto  hover:bg-white"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default slidericons;
