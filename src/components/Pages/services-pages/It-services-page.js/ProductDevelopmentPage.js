import React from "react";

import ProductDevelopment from "../../../Services/ProductDevelopment/ProductDevelopment";
import ServiceForm from "../../../Services/ServiceForm";
import DownloadBrochure from "../../../Services/DownloadBrochure";
function ProductDevelopmentPage() {
  return (
    <>
      <ProductDevelopment />
      <DownloadBrochure />
      <ServiceForm />
    </>
  );
}

export default ProductDevelopmentPage;
