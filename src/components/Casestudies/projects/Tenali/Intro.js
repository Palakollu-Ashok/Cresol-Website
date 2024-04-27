import React from "react";
import data from "../../../../content/Casestudies/Projectsjd/Tenali.json";
function Intro() {
  return (
    <div className=" 2xl:px-[70px] sm:px-[50px] px-[10px] py-14">
      <div className="md:flex md:space-x-24 ">
        <div className="w-full md:w-full ">
          <div className="">
            <h1 className="text-4xl font-bold text-white ">
              {data.intro.heading}
            </h1>
            <p className="py-3 text-white/85 font-poppins">
              {data.intro.title}
            </p>
          </div>
        </div>
        <div className=" md:px-10">
          <p className="leading-7 tracking-wider text-white/70 text-md font-poppins">
            {data.intro.introduction}
          </p>
        </div>
      </div>

      <div className="self-end justify-between py-5 md:flex lg:py-10">
        <div>
          <h2 className="text-white/90 text-[18px]">Client</h2>
          <p className="text-white/65">E-commerce</p>
        </div>
        <div>
          <h2 className="text-white/90 text-[18px]">Categories</h2>
          <p className="text-white/65">Online Store</p>
        </div>
        <div>
          <h2 className="text-white/90 text-[18px]">Location</h2>
          <p className="text-white/65">Tenali, AP</p>
        </div>
        <div>
          <h2 className="text-white/90 text-[18px]">Project Url</h2>
          <a
            href="https://tdhfoodproducts.com"
            target="_blank"
            className="text-red-600 "
          >
            https://tdhfoodproducts.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
