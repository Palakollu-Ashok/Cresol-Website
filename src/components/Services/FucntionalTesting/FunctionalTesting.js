import React from "react";
import data from "../../../content/Services/FunctionalTesting/AboutFunctionTesting.json";
import Breadcrumb from "../../common/Breadcrumb";
import StyledDevelopment from "../styles/development";
import developmentData from "../../../content/Services/FunctionalTesting/FunctionalDevelopmentPhases.json";

function FunctionalTesting() {
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
              <p>{d.paragraph}</p>
            </div>
          ))}

          <div>
            <h5>{data.heading}</h5>
            <>
              {data?.list.map((d,i) => (
                <div key={i} className="content-two">
                  <h2 className="">{d.title}</h2>
                  <p className="">{d.description}</p>
                  {i === 0 && (
                    <>
                      <li className="">{d.desc1}</li>
                      <li className="">{d.desc2}</li>
                      <li className="">{d.desc3}</li>
                      <li className="">{d.desc4}</li>
                      <li className="">{d.desc5}</li>
                    </>
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

export default FunctionalTesting;
