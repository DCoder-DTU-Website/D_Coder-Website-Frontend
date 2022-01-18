import React from "react";
import HeroImage from "../images/hero.svg";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  return (
    <div className="flex w-full mt-[-3rem] sm:mt-0 sm:min-h-[100vh]">
      <div className="flex flex-col items-center w-full sm:px-12 mt-24">
        <h1 className="recruiter-heading text-white text-5xl sm:text-4xl md:text-6xl text-bold my-8 text-center sm:text-left sm:justify-left sm:pr-12">
          {" "}
          We Are Recruiting!!
        </h1>
        <p className="text-white my-6 text-center sm:text-justify">
          Yes! You read it right !!! <br/>If you are unsure about how to crack
          Google, Microsoft, etc and which resources to follow, and if you are
          someone who seeks your personal, academic as well as social growth,
          this society is for you. Click on the button below to apply and set
          your career on the right path.
        </p>
        <div
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded-full cursor-pointer"
          onClick={() => history.push("/recruitment-form")}
        >
          Apply Now
        </div>
      </div>
      <div className="hidden sm:flex w-full  items-center">
        <img src={HeroImage} alt="hero" className="w-[85%]" />
      </div>
    </div>
  );
};

export default Hero;
