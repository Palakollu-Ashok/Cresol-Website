import React from "react";
import SecurityTesting from "../../../Services/SecurityTesting/SecurityTesting";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
function SecurityTestingPage() {
  return (
    <>
      <SecurityTesting />
      <DownloadBrochure />
      <ServiceForm />
    </>
  );
}

export default SecurityTestingPage;
