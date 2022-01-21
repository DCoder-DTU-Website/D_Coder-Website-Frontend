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
          D_CODER is not only a solution for your technical worries, but it also
          focuses on your communication skills, management skills, thus
          developing your personality to a whole new level. We improve each
          other as a coterie and bring out the best in each other. All this
          happens when we do our creative adventures like organizing webinars,
          events, group discussions, and much more fun activities. These
          activities are a great medium to assimilate a good amount of soft
          skills needed in real life. The persisting question should not be “Why
          to join us ?”; rather, it should be “Why Not indeed? “.
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
