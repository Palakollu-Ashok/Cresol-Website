import React from "react";
import { Fade } from "react-reveal";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../common/Button";

const CaseStudies = () => {
  const data = [
    {
      id: 1,
      name: "RR Jewellers",
      title:
        "Title: Revolutionizing Online Jewelry Retail: A Case Study of RR Jewelers' E-commerce Implementation by Cresol Infoserv.",
      description:
        "This case study highlights the successful collaboration between RR Jewelers, a renowned jewelry retailer, and Cresol Infoserv in implementing an e-commerce platform. The objective was to drive online sales growth, enhance the customer shopping experience, and expand market reach. This case study explores how Cresol Infoserv helped RR Jewelers leverage e-commerce solutions to  overcome challenges and achieve remarkable business outcomes.",
      image: "/assets/Home/rr.jpg",
      link: "/case-studies/e-commerce",
    },
    {
      id: 2,
      name: "Tenali Double Horse",
      title:
        "Title: Streamlining Operations and Driving Efficiency: A Case Study of Tenali Double Horse ERP Implementation by Cresol Infoserv",
      description:
        "This case study explores the successful implementation of the Tenali Double Horse (TDH) ERP system by Cresol Infoserv in a leading food processing company. The TDH ERP solution was aimed at streamlining operations, improving efficiency, and enabling better decision-making. This case study highlights how Cresol Infoserv collaborated with the company to overcome challenges and achieve significant benefits through the TDH ERP implementation.",
      image: "/assets/Home/tdh.jpg",
      link: "/case-studies/erp-tdh",
    },
    {
      id: 3,
      name: "HTS Bio Pharma",
      title:
        "Title: Accelerating Growth and Compliance: A Case Study of HTS Bio Pharma ERP Implementation by CRESOL INFOSERV",
      description:
        "The HTS Bio Pharma ERP solution is specifically tailored to the needs of the biopharmaceutical industry, offering comprehensive features to streamline operations, enhance regulatory compliance, and optimize resource utilization. This case study explores how Cresol Infoserv helped the pharmaceutical company achieve significant benefits through the adoption of HTS Bio Pharma ERP.",
      image: "/assets/Home/hts.jpg",
      link: "/case-studies/erp",
    },
    {
      id: 4,
      name: "Amnet",
      title: "Amnet CMS Project by Cresol Infoserv",
      description:
        "Cresol Infoserv, a renowned software development company, undertook the Amnet CMS project for a client in the manufacturing industry. The Amnet CMS project aimed to implement an end-to-end Enterprise Resource Planning (ERP) solution to streamline the client's business processes, optimize operations, and improve overall efficiency. This case study highlights the key objectives, strategies, and outcomes of Cresol's Amnet CMS implementation project",
      image: "/assets/Home/amnet.jpg",
      link: "/case-studies/cms",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="space-y-5">
      <Fade bottom>
        <h2 className="text-center text-black">CASE STUDIES</h2>
      </Fade>
      <Slider {...settings}>
        {data.map((d, idx) => (
          <div key={d.id}>
            <div className="justify-between pb-20 space-y-6 xl:flex xl:space-x-6 xl:space-y-0 ">
              <div className="xl:w-[50%] xl:space-y-4 space-y-2 xl:mx-10  tracking-widest self-end order-first">
                <h2 className="text-black">{d.name}</h2>
                <div className="space-y-2 xl:space-y-2 ">
                  <h3 className="font-medium text-black ">{d.title}</h3>
                  <p className="text-black">{d.description}</p>
                </div>

                <Fade bottom delay={600}>
                  <div className="mt-4">
                    <a href={d.link}>
                      <Button name="READ MORE" />
                    </a>
                  </div>
                </Fade>
              </div>
              <Fade className="order-last">
                <img
                  src={d.image}
                  alt={d.name}
                  title={d.name}
                  className="rounded-3xl"
                />
              </Fade>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CaseStudies;
