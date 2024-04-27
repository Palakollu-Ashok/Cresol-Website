import React from "react";
import OurClients from "../home/OurClients";

const OurTrustedPartners = () => {
  return (
    <div className="2xl:px-[160px] sm:px-[50px] px-[10px] text-center md:pb-10 pb-4 ">
      <div className="p-8 space-y-6 text-center text-black bg-white rounded-3xl">
        <h2>Our trusted partners</h2>
        <OurClients />
        <h3>
          Our Mission and Vision are to be a leading service provider and enable
          SMEs, MSMEs, and entrepreneurs to progress in the current position of
          the market. We are well known that Customer growth is the Company’s
          growth, So, we commit our growth helping businesses to reach their
          goals. We believe in working with accuracy, transparency, reliability,
          Innovation, user-friendly, and No-compromise Quality to seize growth
          and opportunities in today’s ever-evolving digital economy.
        </h3>
      </div>
    </div>
  );
};

export default OurTrustedPartners;
