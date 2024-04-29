import React from "react";
import FucntionalTesting from "../../../Services/FucntionalTesting/FunctionalTesting";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
function FunctionalTestingPage() {
  return (
    <>
      <FucntionalTesting />
      <DownloadBrochure />
      <ServiceForm />
    </>
  );
}

export default FunctionalTestingPage;
