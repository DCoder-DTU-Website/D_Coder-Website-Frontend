import React from "react";
import Join from "../images/Join.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyJoinUs = () => {
  AOS.init();
  return (
    <div className="flex w-full sm:min-h-[100vh]">
      <div className="flex flex-col justify-center items-center w-full sm:px-12">
        <h1 className="recruiter-heading text-white text-3xl sm:text-4xl md:text-6xl text-bold my-8 justify-left">
          {" "}
          Why Join Us?
        </h1>
        <p
          className="text-white text-justify text-md sm:text-xl"
          data-aos="flip-left"
          data-aos-delay="300"
        >
          We don’t just guide our juniors on their internship or placement
          journeys but are also eveready to help out the juniors on any problem
          they face. We do not believe in keeping the society formal or calling
          our seniors “sir” or “ma'am”. Rather, the environment is so chilled out
          that you can ask anything to anyone without any hesitation
          irrespective of the type of problem you are facing. So, the question
          isn’t really “why join us?”, it's rather “why not?”.
        </p>
      </div>
      <div className="hidden sm:flex w-full justify-content items-center">
        <img
          src={Join}
          alt="hero"
          className="w-[85%]"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default WhyJoinUs;
