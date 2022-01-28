import React from "react";
import Load from "../images/loader3.gif";
const Loader = ({ isWhite = false }) => {
  return isWhite ? (
    <div className="flex w-full h-[100vh] justify-center items-center bg-[#ffffff]">
      <img src={Load} alt="loader" />
    </div>
  ) : (
    <div className="flex w-full h-[100vh] justify-center items-center bg-[#16253B]">
      <img src={Load} alt="loader" />
    </div>
  );
};

export default Loader;
