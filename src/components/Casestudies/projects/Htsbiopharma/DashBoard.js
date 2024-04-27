import React from "react";
import data from "../../../../content/Casestudies/Projectsjd/Hts.json";
import { IoMdArrowRoundForward } from "react-icons/io";

function Dashboard() {
  return (
    <div className="py-8">
      <div className="px-3 md:flex md:px-0">
        <img src={data.Objectives.img} alt="" className="md:w-1/2 w-fit" />
        <div className="py-3 space-y-3 md:px-10 md:py-10">
          <div>
            <h2>{data.Objectives.title}</h2>
          </div>
          <div className="">
            {data?.Objectives?.list.map((d, i) => (
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

export default Dashboard;
