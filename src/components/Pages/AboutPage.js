import React from "react";
import Header from "../common/Header";
import About from "../about/About";
import OurTrustedPartners from "../about/OurTrustedPartners";
import WhyChoose from "../about/WhyChoose";
import OurMentors from "../about/OurMentors";

function AboutPage() {
  return (
    <>
      <Header
        title="About us"
        description="Let us take the technical overload off your shoulders – We deliver Software–led solutions."
      />
      <About />
      <OurTrustedPartners />

      <WhyChoose />

      <OurMentors />
    </>
  );
}

export default AboutPage;
