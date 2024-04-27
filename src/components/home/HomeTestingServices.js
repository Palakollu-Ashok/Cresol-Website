import React from "react"
import StyledHomeServices from "./style/home-services"
import Heading from "../common/Heading"
import { FaArrowRight } from "react-icons/fa"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HomeTestingServices = ({ data }) => {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: data.edges.length < 3 ? false : true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <StyledHomeServices>
      <div className="main-container">
        <Heading text="Testing Services" color="primary" />
        <ul className="services-list">
          <Slider {...settings}>
            {data.edges.map((d, i) => (
              <li className="service-list-item" key={i}>
                <div className="icon">
                  <img
                    src={d.node.frontmatter.homeSection.icon.publicURL}
                    alt={d.node.frontmatter.title}
                  />
                  <h5>{d.node.frontmatter.title}</h5>
                </div>
                <div className="content">
                  <p>{d.node.frontmatter.homeSection.shortDescription}</p>
                  <a className="cta" href={d.node.frontmatter.slug}>
                    Read More
                    <FaArrowRight />
                  </a>
                </div>
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${d.node.frontmatter.homeSection.bgImage.publicURL})`,
                  }}
                ></div>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </StyledHomeServices>
  )
}

export default HomeTestingServices
