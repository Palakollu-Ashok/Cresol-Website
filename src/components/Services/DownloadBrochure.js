import React from "react";
import { FaArrowDown } from "react-icons/fa";
import StyledDownloadBrochure from "./styles/download-brochure";

const DownloadBrochure = () => {
  return (
    <StyledDownloadBrochure>
      <div className="main-container">
        <div className="wrapper glassmorphism">
          <h2>Download Our Brochure</h2>
          <a
            href="../../Files/Cresol_booklet_2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download
            <FaArrowDown />
          </a>
        </div>
      </div>
    </StyledDownloadBrochure>
  );
};

export default DownloadBrochure;
