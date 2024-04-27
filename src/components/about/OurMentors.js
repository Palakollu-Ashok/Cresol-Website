import React from "react";
import StyledOurMentors from "./style/our-mentors";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../content/about/our-mentors.json";

const OurMentors = () => {
  var settings = {
    autoplay: false,
    dots: true,
    infinite: data.mentorsList.length < 6 ? false : true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <StyledOurMentors>
      <div className="main-wrapper">
        {/* <Heading text={data.heading} color="" /> */}
        <h2>{data.heading}</h2>
        <div className="sub-heading">{data.subHeading}</div>
        <div className="mentors-list">
          <Slider {...settings}>
            {data.mentorsList.map((d, i) => (
              <li className="mentor-item" key={i}>
                <div className="image">
                  <img src={d.image} alt="Avatar" />
                </div>
                <div className="info">
                  {/* <h5 className="name">{d.name}</h5> */}
                  <p className="profession">{d.profession}</p>
                  <p className="profession">{d.Experience} Experience</p>
                  <ul className="social-media">
                    {/* <li>
                      <a href={d.socialLinks.facebook} target="_blank" rel="noreferrer">
                        <FaFacebookF />
                      </a>
                    </li> */}
                    {/* <li>
                      <a href={d.socialLinks.twitter} target="_blank" rel="noreferrer">
                        <FaTwitter />
                      </a>
                    </li> */}
                    <li className="list-none">
                      <a
                        href={d.socialLinks.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </Slider>
        </div>
        <div className="sub-heading">{data.endHeading}</div>
      </div>
    </StyledOurMentors>
  );
};

export default OurMentors;
