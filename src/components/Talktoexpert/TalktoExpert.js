import React from "react";
import data from "../../content/TalkToExpert/TalktoExpert.json";
import Breadcrumb from "../common/Breadcrumb";

function TalktoExpert() {
  return (
    <div className="bg-[#001324] grid justify-start 2xl:px-40 px-14 text-white py-8">
      <Breadcrumb title={data.title} description={data.description} />

      <div>
        <h2 className=" font-poppins font-semibold text-[#EBF9FC]  -tracking-tighter py-3 ">
          {data.description1}
        </h2>
      </div>
    </div>
  );
}

export default TalktoExpert;
