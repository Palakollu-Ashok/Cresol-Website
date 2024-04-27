import React from "react";
import { Link } from "react-router-dom";
import data from "../../content/Workwithus/Workwithus.json";
import Breadcrumb from "../common/Breadcrumb";
import Button from "../common/Button";

const Workwithus = () => {
  return (
    <div className="grid items-center 2xl:px-[160px] sm:px-[50px] px-[10px] md:pb-10 pb-4 ">
      <Breadcrumb title={data.title} description={data.description} />

      <div className="py-4 md:py-10">
        <h2>{data.description1} </h2>
        <p className="w-full text-start">{data.description2}</p>
      </div>

      <div className="grid items-center gap-4 mt-6">
        <h2 className="text-center "> {data.title2}</h2>
        <h4 className="text-center text-md ">{data.description3}</h4>
      </div>

      <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-3">
        {data?.list.map((d) => (
          <div className="bg-[#0D1F2F] border border-white shadow-md rounded-md px-10 py-8 gap-3 overflow-hidden">
            <h2 className="text-white ">{d.title}</h2>
            <p className="py-3 text-md">{d.location}</p>
            <div className="w-fit">
              <Link to={d.Link} className="text-center">
                <Button name="See Open Positions" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workwithus;
