import React from "react";
import data from "../../../../content/Casestudies/Projectsjd/Amnet.json";

function Conclusion() {
  return (
    <div className="py-8">
      <div className="px-3 md:flex md:px-0">
        <img src={data.Conclusion.img} alt="" className="md:w-1/2 w-fit" />
        <div className="px-3 py-3 space-y-3 md:px-10 md:py-10">
          <div className="space-y-1 lg:space-y-5">
            <h1 className="lg:text-3xl">{data.Conclusion.title}</h1>
            <p className="text-lg tracking-wider text-white/80 text-md font-poppins">
              {data.Conclusion.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Conclusion;
