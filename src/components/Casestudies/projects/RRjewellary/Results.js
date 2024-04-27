import React from "react";
import data from "../../../../content/Casestudies/Projectsjd/RRJewellary.json";
import { IoMdArrowRoundForward } from "react-icons/io";

function Results() {
  return (
    <div className="py-8">
      <div className="px-3 md:flex md:px-0">
        <img src={data.results.img} alt="" className="md:w-1/2 w-fit" />
        <div className="py-3 space-y-3 md:px-10 md:py-10">
          <div>
            <h1 className="lg:text-3xl">{data.results.title}</h1>
            {data.results.description && (
              <p className="text-xl font-bold tracking-wider text-white text-md font-poppins">
                {data.results.description}
              </p>
            )}
          </div>
          <div className="">
            {data?.results?.list.map((d, i) => (
              <div key={i}>
                <h2 className="flex items-center text-white md:gap-2">
                  <span>
                    <IoMdArrowRoundForward />
                  </span>
                  {d.heading}
                </h2>
                <p className="tracking-wider text-white/70 text-md font-poppins">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
