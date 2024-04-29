import React from "react";
import PerformanceTesting from "../../../Services/PerformanceTesting/PerformanceTesting";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
function FunctionalTestingPage() {
  return (
    <>
      <PerformanceTesting />
      <DownloadBrochure />
      <ServiceForm />
    </>
  );
}

export default FunctionalTestingPage;
