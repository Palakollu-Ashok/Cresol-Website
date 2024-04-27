import React from "react"
import StyledIndustries from "./style/industries"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Industries = ({ data }) => {
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <StyledIndustries>
      <div className="main-container">
        <div className="left">
          <h4>Industries We Serve:</h4>
        </div>
        <div className="right">
          <Slider {...settings}>
            {data.industries.map((d, i) => (
              <div className="wrapper" key={i} >
                <div className="list">
                  <img src={d.image} alt={d.title} />
                  <h6>{d.title}</h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div >
    </StyledIndustries >
  )
};

export default Industries
