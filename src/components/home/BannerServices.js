import React from "react";
import { Link } from "react-router-dom";

const BannerServices = () => {
  const data = [
    {
      id: 1,
      imag: "/assets/Home/UIuxdesign.svg",
      name: "UI/UX DESIGN",
      link: "/ui-ux-design-service/",
    },
    {
      id: 2,
      imag: "/assets/Home/website.svg",
      name: "WEB DEVELOPMENT",
      link: "/web-developement-service/",
    },
    {
      id: 3,
      imag: "/assets/Home/mobileapp.svg",
      name: "MOBILE APP DEVELOPMENT",
      link: "/mobile-development-service/",
    },
    {
      id: 4,
      imag: "/assets/Home/Testing.svg",
      name: "TESTING",
      link: "/functional-testing-service/",
    },
    {
      id: 5,
      imag: "/assets/Home/Digitalmarketing.svg",
      name: "DIGITAL MARKETING",
      link: "/searchEngine-Optimization-services/",
    },
  ];
  return (
    <div className="md:flex justify-between 2xl:px-[160px] sm:px-[50px] px-[10px]   md:space-x-10 space-y-5 mb-10">
      <div className="grid w-[25%] 2xl:mt-16 sm:mt-16 mt-10">
        <h2 className="sm:justify-self-end">SERVICES</h2>
      </div>

      <div className="flex space-x-3 text-center md:space-x-8">
        {data.map((s, idx) => (
          <div className="" key={idx}>
            <Link to={s.link}>
              <img
                placeholder="blurred"
                src={s.imag}
                alt={s.name}
                className="w-full h-full overflow-hidden duration-500 hover:scale-95"
              />

              <h2 className="xl:text-[17px] sm:text-[10px] text-[8px] ">
                {s.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerServices;
