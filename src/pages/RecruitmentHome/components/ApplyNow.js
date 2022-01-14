import React from "react";
import { useHistory } from "react-router-dom";
import Crowd from "../images/crowd.png";

const ApplyNow = () => {
  // const Crowd = `https://res.cloudinary.com/dcoderdtu/image/upload/v1642173546/crowd_y4cpy7.png`;
  const history = useHistory();
  return (
    <div
      className={`flex w-full min-h-[100vh] flex-col justify-center items-center bg-[url(${Crowd})] bg-no-repeat bg-bottom`}
    >
      <h1 className="recruiter-heading text-white text-2xl text-center my-4 sm:text-4xl md:text-6xl text-bold sm:my-8 justify-center">
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
      {/* <img src={Crowd} alt="crowd" className="  mb-[-13rem] w-[72vw]"></img> */}
    </div>
  );
};

export default ApplyNow;
