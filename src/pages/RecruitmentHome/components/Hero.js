import React from "react";
import HeroImage from "../images/hero.svg";

const Hero = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center w-full sm:px-12">
        <h1 className="text-white text-4xl sm:text-4xl md:text-6xl text-bold my-8 text-center md:justify-left md:pr-12">
          {" "}
          We Are Recruiting!!
        </h1>
        <p className="text-white my-6 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut labore
          suscipit aperiam commodi exercitationem quia modi numquam dolorum
          possimus, vel placeat adipisci nulla obcaecati voluptatem maiores
          quaerat, in ipsum cupiditate!
        </p>
        <div className="bg-[#3182CE] py-4 px-12 rounded-full cursor-pointer">
          Apply Now
        </div>
      </div>
      <div className="hidden sm:flex w-full justify-content items-center">
        <img src={HeroImage} alt="hero" className="w-[85%]" />
      </div>
    </div>
  );
};

export default Hero;
