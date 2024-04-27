import React from "react";
import data from "../../../../content/Workwithus/Careers.json";
import Breadcrumb from "../../../common/Breadcrumb";

function Careers() {
  return (
    <div className="2xl:px-[160px] sm:px-[50px] px-[10px]">
      <Breadcrumb title={data.title} description={data.desc} />
    </div>
  );
}

export default Careers;
