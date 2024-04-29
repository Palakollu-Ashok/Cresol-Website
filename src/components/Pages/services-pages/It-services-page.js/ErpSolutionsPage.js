import React from "react";
import ErpSolutions from "../../../Services/ErpSolutions/ErpSolutions";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
import Portfolio from "../../../Services/ErpSolutions/Portfolio";

function ErpSolutionsPage() {
  return (
    <>
      <ErpSolutions />
      <DownloadBrochure />
      <Portfolio />
      <ServiceForm />
    </>
  );
}

export default ErpSolutionsPage;
