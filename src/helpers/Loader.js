import React from "react";
import Load from "../images/loader3.gif";
const Loader = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center bg-[#16253B]">
      <img src={Load} alt="loader" />
    </div>
  );
};

export default Loader;
