import React from "react"
import StyledBanner from "./style/banner"
import { Link } from "gatsby"

const Banner = ({ data }) => {
  return (
    <StyledBanner style={{ backgroundImage: `url(${data.bgImage})` }}>
      <div className="main-wrapper">
        <h2>{data.heading}</h2>
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li>About Us</li>
        </ul>
      </div>
    </StyledBanner>
  )
}

export default Banner
