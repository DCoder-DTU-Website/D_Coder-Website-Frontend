import React from "react";
import { useHistory } from "react-router-dom";

const ApplyNow = () => {
  const history = useHistory();
  return (
    <div className="flex w-full min-h-[100vh] flex-col justify-center items-center">
      <h1 className="text-white text-2xl text-center my-4 sm:text-4xl md:text-6xl text-bold sm:my-8 justify-center">
        What are you Waiting for?
      </h1>
      <h1 className="text-white text-xl sm:text-4xl text-semibold justify-center">
        Come Join Us!!
      </h1>
      <div
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer mt-12"
        onClick={() => history.push("/recruitment-form")}
      >
        Apply Now
      </div>
    </div>
  );
};

export default ApplyNow;
