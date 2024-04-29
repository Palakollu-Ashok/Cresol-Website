import React from "react";
import SmmDevelopment from "../../../Services/SMM/SmmWebDevelopment";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
function SMMPage() {
  return (
    <>
      <SmmDevelopment />
      <DownloadBrochure />

      <ServiceForm />
    </>
  );
}

export default SMMPage;
