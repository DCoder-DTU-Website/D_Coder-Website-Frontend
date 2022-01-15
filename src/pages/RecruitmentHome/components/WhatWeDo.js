import React from "react";
import WhatDo from "../images/WhatWeDo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  AOS.init();
  return (
    <div className="flex w-full min-h-[100vh]">
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
          className="text-white my-6 text-justify"
          data-aos="flip-right"
          data-aos-delay="300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          molestias expedita sunt, dolorem, ipsam facere, iusto sit ipsum est
          reprehenderit quam. Et inventore nobis dolor voluptatum ad temporibus
          fuga repellat excepturi obcaecati. Fugiat cumque molestias nulla ad
          beatae enim harum tenetur quidem quisquam sed ipsum inventore,
          doloremque quam ipsa culpa. Et inventore nobis dolor voluptatum ad
          temporibus fuga repellat excepturi obcaecati. Fugiat cumque molestias
          nulla ad beatae enim harum tenetur quidem quisquam sed ipsum
          inventore, doloremque quam ipsa culpa.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
