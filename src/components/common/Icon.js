import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Icon(props) {
  return (
    <div className="group w-fit py-4">
      <h1 className="text-white hover:text-red-400  flex border bg-[#001324] p-3 rounded-lg group-hover:border-x-blue-800 group-hover:border-y-red-500 border-x-red-500 border-y-indigo-800">
        {props.text}
        <h2 className="mt-1 px-2 group-hover:text-red-400   group-hover:rotate-[360deg]  duration-700 text-center">
          <MdArrowOutward />
        </h2>
      </h1>
    </div>
  );
}

export default Icon;
