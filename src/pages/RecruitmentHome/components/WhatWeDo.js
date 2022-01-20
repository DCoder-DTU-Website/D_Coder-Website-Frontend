import React from "react";
import WhatDo from "../images/WhatWeDo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  AOS.init();
  return (
    <div className="flex w-full sm:min-h-[100vh]">
      <div className="hidden sm:flex w-full justify-content items-center">
        <img
          src={WhatDo}
          alt="hero"
          className="w-[85%]"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:px-12">
        <h1 className="recruiter-heading text-white text-4xl sm:text-4xl md:text-6xl text-bold my-8 justify-left">
          {" "}
          What We Do?
        </h1>
        <p
          className="text-white my-6 text-justify text-md sm:text-xl"
          data-aos="flip-right"
          data-aos-delay="300"
        >
          We create a fostering environment where students can have a space to
          share and solve each other's problems ranging from academics to
          placements to college life in general. Good peer groups can give the
          best of growth in college life. Therefore our society expands upon
          this idea and brings together a community of seniors who are happy to
          help and mentor the students to excel in any tech opportunity they
          want.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
