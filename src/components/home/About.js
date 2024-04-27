import React from "react";
import StyledAbout from "./style/about";
import { Link } from "react-router-dom";
import data from "../../content/home/about.json";
import Button from "../common/Button";

const About = () => {
  return (
    <StyledAbout>
      <div className="main-wrapper">
        <h2>{data.heading}</h2>

        <div className="description ">
          {data.rightDescription.map((d, i) => (
            <p key={i}>{d.description}</p>
          ))}
        </div>

        <div className="mt-4">
          <Link to="/about">
            <Button name="Know more..." />
          </Link>
        </div>
      </div>

      <img
        src="/assets/Home/about.avif"
        alt="people holding hands together"
        className="object-contain rounded-3xl"
      />
    </StyledAbout>
  );
};

export default About;
