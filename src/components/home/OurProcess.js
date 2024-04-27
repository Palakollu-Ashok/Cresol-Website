import React from "react"
import StyledOurProcess from "./style/our-process"
import Heading from "../common/Heading"
import CTA from "../common/CTA"

const OurProcess = ({ data }) => {
  return (
    <StyledOurProcess
      style={{
        backgroundImage: `url(${data.bgImage})`,
      }}
    >
      <div className="main-container">
        <Heading text={data.heading} color="white" />

        <p className="desc">{data.description}</p>
        <ul className="list">
          {data.list.map((d, i) => (
            <li key={i}>
              <div className="icon">
                <img src={d.icon} alt={d.title} />
              </div>
              <div className="content">
                <h5>{d.title}</h5>
                <p>{d.iconDescription}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="cta-wrapper">
          <p>{data.ctaDesciption}</p>
          <CTA text={data.ctaText} type="secondary" link="/" />
        </div>
      </div>
    </StyledOurProcess>
  )
}

export default OurProcess
