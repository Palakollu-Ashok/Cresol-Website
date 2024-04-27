import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import data from "../../content/home/history.json";

const Counter = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      className="3xl:pt-[71px] 2xl:pt-[60px] pt-[10px] pb-20 xl:flex grid xl:justify-center xl:space-x-10 justify-center space-y-5 xl:space-y-0 text-black "
    >
      <h1 className="flex items-center">
        {counter && (
          <CountUp
            end={data.years.totalYears}
            duration={3}
            className="2xl:text-[56px] sm:text-[30px] text-[25px]"
          />
        )}
        +
        <span className="ml-4 xl:w-[30%] tracking-wider">
          {data.years.heading}
        </span>
      </h1>
      <h1 className="flex items-center">
        {counter && (
          <CountUp
            end={data.projects.totalProjects}
            duration={3}
            className="2xl:text-[56px] sm:text-[30px] text-[25px]"
          />
        )}{" "}
        +
        <span className="ml-4 xl:w-[50%] tracking-wider">
          {data.projects.heading}
        </span>
      </h1>
      <h1 className="flex items-center">
        {counter && (
          <CountUp
            end={data.clients.totalClients}
            duration={3}
            className="2xl:text-[56px] sm:text-[30px] text-[25px]"
          />
        )}
        +
        <span className="ml-4 xl:w-[60%] tracking-wider">
          {data.clients.heading}
        </span>
      </h1>
    </ScrollTrigger>
  );
};

export default Counter;
