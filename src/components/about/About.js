import React from "react";
import StyledAbout from "./style/about";
import data from "../../content/about/about.json";

const About = () => {
  return (
    <StyledAbout>
      <div className="overflow-hidden img">
        <img
          src="/assets/About/aboutLeft.jpg"
          alt=""
          className="rounded-[25px] md:h-[200px] lg:h-[300px] xl:h-[400px] 1920Screen:h-full"
        />
        <img
          src="/assets/About/AboutRight.jpg"
          alt=""
          className="rounded-[25px] md:h-[200px] lg:h-[300px] xl:h-[400px] 1920Screen:h-full"
        />
      </div>
      <div className="main-wrapper">
        <h2>{data.heading}</h2>

        <div className="description">
          {data.rightDescription.map((d, i) => (
            <p key={i}>{d.description}</p>
          ))}
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
