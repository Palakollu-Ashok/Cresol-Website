import React from "react";

const Breadcrumb = (props) => {
  return (
    <div>
      <div className="flex space-x-1">
        <hr className="mt-5 w-11" />
        <h1 className="text-white text-[17px] font-poppins">{props.title}</h1>
      </div>
      <h2 className="py-2">{props.description}</h2>
    </div>
  );
};

export default Breadcrumb;
