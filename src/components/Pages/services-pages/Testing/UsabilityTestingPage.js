import React from "react";
import FucntionalTesting from "../../../Services/UsabilitityTesting/UsabilityTesting";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
function UsabilityTestingPage() {
  return (
    <>
      <FucntionalTesting />
      <DownloadBrochure />
      <ServiceForm />
    </>
  );
}

export default UsabilityTestingPage;
