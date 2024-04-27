import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

function CaseStudiesBreadCrumb(props) {
  return (
    <div className="">
      <h2 className="flex items-center gap-2 text-white ">
        <span>
          <IoMdArrowRoundForward />
        </span>
        {props.heading2}
      </h2>
      <p className="tracking-wider text-white/70 text-md font-poppins">
        {props.desc2}
      </p>
    </div>
  );
}

export default CaseStudiesBreadCrumb;
