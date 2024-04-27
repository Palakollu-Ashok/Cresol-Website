import React from "react";
// import banner from "/assects/CresolHome/home/banner.svg";
import Banner from "../home/Banner";
import BannerServices from "../home/BannerServices";
import About from "../home/About";
import Services from "../home/HomeServices";
import Counter from "../home/History";
import CaseStudies from "../home/CaseStudies";
import OurClients from "../home/OurClients";
import Testimonials from "../home/Testimonials";
import HomeContact from "../home/HomeContact";

function HomePage() {
  return (
    <>
      <div
        className="relative pt-8 bg-left bg-no-repeat sm:bg-cover"
        style={{
          backgroundImage: "url(/assets/Home/banner.svg)",
        }}
      >
        <Banner />
        <BannerServices />
      </div>

      <About />

      <Services />

      <div className="bg-white 2xl:mx-[160px] sm:mx-[50px] mx-[10px] md:p-8 p-2 rounded-2xl md:mb-6 mb-2">
        <Counter />
        <CaseStudies />
        <OurClients />
        <Testimonials />
      </div>

      <HomeContact />
    </>
  );
}

export default HomePage;
