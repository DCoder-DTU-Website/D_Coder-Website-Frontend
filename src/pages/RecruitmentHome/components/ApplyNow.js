import React from "react";

const ApplyNow = () => {
  return (
    <div className="flex w-full min-h-[100vh] flex-col justify-center items-center">
      <h1 className="text-white text-2xl text-center my-4 sm:text-4xl md:text-6xl text-bold sm:my-8 justify-center">
        What are you Waiting for?
      </h1>
      <h1 className="text-white text-xl sm:text-4xl text-semibold justify-center">
        Come Join Us!!
      </h1>
      <div className="bg-[#3182CE] py-4 px-12 my-16 rounded-full cursor-pointer text-2xl text-bold shadow-xl shadow-slate-600">
        Apply Now
      </div>
    </div>
  );
};

export default ApplyNow;
