import React from "react"
import StyledOurInvestors from "./style/our-investors"
import Heading from "../common/Heading"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className="next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className="prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  )
}

const OurInvestors = ({ data }) => {
  var settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  }
  return (
    <StyledOurInvestors>
      <div className="main-wrapper">
        <Heading text={data.heading} color="white" />
        <p className="sub-heading">{data.subHeading}</p>
        <div className="wrapper">
          <Slider {...settings}>
            {data.list.map((d, i) => (
              <div className="investor-item" key={i}>
                <div className="investor-wrapper">
                  <div className="icon">
                    <img src={d.image} alt="Avatar" />
                  </div>
                  <div className="investor-content">
                    <h3>{d.name}</h3>
                    <h5>{d.profession}</h5>
                    <p>{d.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </StyledOurInvestors>
  )
}

export default OurInvestors
