import React from "react";
import StyledWhyChoose from "./style/why-choose";
import data from "../../content/about/why-choose.json";

const WhyChoose = () => {
  return (
    <StyledWhyChoose>
      <h3>{data.heading}</h3>
      <div className="main-wrapper">
        <div className="left">
          <img
            src={data.image}
            alt="why choose Cresol?"
            className="left-image"
          />
        </div>
        <div className="right">
          {data.rightDescription.map((d, i) => (
            <div className="mb-5 ">
              <h4>{d.heading} : </h4>
              <p key={i}>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledWhyChoose>
  );
};

export default WhyChoose;
