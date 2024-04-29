import React from "react";
import data from "../../../content/Services/SecurityTesting/SecurityTesting.json";
import Breadcrumb from "../../common/Breadcrumb";
import StyledDevelopment from "../styles/development";
import developmentData from "../../../content/Services/SecurityTesting/SecurityTestingDevelopmentPhases.json";

function SecurityTesting() {
  return (
    <StyledDevelopment>
      <div className="main-wrapper">
        <div className="left">
          <Breadcrumb
            title={data.breadCrumbTitle}
            description={data.breadCrumbDescription}
          />
          <div className="w-full">
            <img src={data.image} alt="" className="md:rounded-[24px] w-full" />
          </div>
          {data?.description.map((d, i) => (
            <div key={i} className="content">
              <p className="">{d.paragraph}</p>
              {i === 2 && (
                <ul>
                  <h2>{d.title}</h2>
                  <li>{d.li1}</li>
                  <li>{d.li2}</li>
                  <li>{d.li3}</li>
                  <li>{d.li4}</li>
                  <li>{d.li5}</li>
                </ul>
              )}
            </div>
          ))}

          <div>
            <h5>{data.heading}</h5>
            <>
              {data?.list.map((d, i) => (
                <div key={i} className="content-two">
                  <h2 className="">{d.title}</h2>
                  <p className="">{d.description}</p>
                  <p className="py-2">{d.description2}</p>
                  <p className="">{d.description3}</p>
                  {i === 0 && (
                    <ul>
                      <h2>{d.title}</h2>
                      <li>{d.desc1}</li>
                      <li>{d.desc2}</li>
                      <li>{d.desc3}</li>
                      <li>{d.desc4}</li>
                    </ul>
                  )}
                </div>
              ))}
            </>
          </div>
        </div>

        <div className="justify-between mt-5 right md:flex md:space-x-10">
          <img
            src={developmentData.image}
            alt=""
            className="self-start object-contain md:sticky md:top-32"
          />

          <div className="space-y-4">
            <h3 className="mb-5 text-white text-start">
              Development Phases at Cresol
            </h3>

            <ul className="process">
              {developmentData?.list.map((d, i) => (
                <li key={i}>
                  <div className="number">
                    <span>0{i + 1}</span>
                  </div>
                  <div className="content">
                    <h5>{d.title}:</h5>
                    <p>{d.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledDevelopment>
  );
}

export default SecurityTesting;
