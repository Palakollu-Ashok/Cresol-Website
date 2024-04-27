import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Servicesicon(props) {
  return (
    <div className="w-fit bg-[#001323] px-7 py-2">
      <h1 className="text-white hover:text-red-400 flex border text-sm p-2 hover:rotate-[360deg] rounded-full  border-x-gray-300">
        {props.title}
        <h2 className="mt-1 px-1 text-center">
          <MdArrowOutward />
        </h2>
      </h1>
    </div>
  );
}

export default Servicesicon;
