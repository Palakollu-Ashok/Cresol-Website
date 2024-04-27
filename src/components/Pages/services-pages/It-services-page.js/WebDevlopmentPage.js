import React from "react";
import WebDevelopment from "../../../Services/Webdevelopment/WebDevelopment";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
import Portfolio from "../../../Services/Webdevelopment/Portfolio";
function WebDevlopmentPage() {
  return (
    <>
      <WebDevelopment />
      <DownloadBrochure />
      <Portfolio />
      <ServiceForm />
    </>
  );
}

export default WebDevlopmentPage;
