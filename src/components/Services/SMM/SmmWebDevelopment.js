import React from "react";
import data from "../../../content/Services/SMM/AboutSmm.json";
import Breadcrumb from "../../common/Breadcrumb";
import StyledDevelopment from "../styles/development";
import developmentData from "../../../content/Services/SMM/SmmDevelopmentPhases.json";

function SmmWebDevelopment() {
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

          {data?.description.map((d) => (
            <div className="content">
              <p>{d.paragraph}</p>
            </div>
          ))}

          <div>
            <h5>{data.heading}</h5>
            <>
              {data?.list.map((item, index) => (
                <div key={item.id} className="content-two">
                  <h2 className="">{item.title}</h2>
                  {index === 1 && item.description && (
                    <p className="">{item.description}</p>
                  )}
                  {index !== 1 && item.description && (
                    <p className="">{item.description}</p>
                  )}
                  {index !== 1 && (
                    <ul>
                      {Object.keys(item).map((key) => {
                        if (key.startsWith("li")) {
                          return (
                            <li key={key} className="">
                              {item[key]}
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  )}
                  {item.desc && <p className="">{item.desc}</p>}
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
              What proves that you outrank your competitors?
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

export default SmmWebDevelopment;
