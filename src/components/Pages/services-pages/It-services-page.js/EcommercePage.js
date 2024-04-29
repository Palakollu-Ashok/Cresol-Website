import React from "react";
import WebDevelopment from "../../../Services/Ecommerce/EcommerceDev";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
import Portfolio from "../../../Services/Ecommerce/Portfolio";
function EcommercePage() {
  return (
    <>
      <WebDevelopment />
      <DownloadBrochure />
      <Portfolio />
      <ServiceForm />
    </>
  );
}

export default EcommercePage;
