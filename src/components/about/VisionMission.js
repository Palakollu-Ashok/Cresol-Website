import React from "react"
import StyledVisionMission from "./style/vision-mission"
import { FiEye } from "react-icons/fi"
import { BiTargetLock } from "react-icons/bi"

const VisionMission = ({ data }) => {
  return (
    <StyledVisionMission>
      <div className="main-wrapper">
        <div className="left glassmorphism">
          <div className="icon">
            <FiEye />
            <span>{data.vision.heading}</span>
          </div>
          <div className="content">{data.vision.description}</div>
        </div>
        <div className="right glassmorphism">
          <div className="icon">
            <BiTargetLock />
            <span>{data.mission.heading}</span>
          </div>
          <div className="content">{data.mission.description}</div>
        </div>
      </div>
    </StyledVisionMission>
  )
}

export default VisionMission
