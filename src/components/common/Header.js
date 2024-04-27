import React from "react";

const Header = (props) => {
  return (
    <div className="2xl:px-[160px] sm:px-[50px] px-[10px] md:mt-10 mt-4">
      <div className="flex space-x-2">
        <hr className="w-[4%] mt-4"></hr>
        <h4>{props.title}</h4>
      </div>
      <h2 className="text-xl tracking-wide md:text-2xl">{props.description}</h2>
    </div>
  );
};

export default Header;
