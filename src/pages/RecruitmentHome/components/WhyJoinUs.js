import React from "react";
import Join from "../images/Join.svg";

const WhyJoinUs = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center w-full px-12">
        <h1 className="text-white text-6xl text-bold my-8 justify-left">
          {" "}
          Why Join Us?
        </h1>
        <p className="text-white my-6 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          molestias expedita sunt, dolorem, ipsam facere, iusto sit ipsum est
          reprehenderit quam. Et inventore nobis dolor voluptatum ad temporibus
          fuga repellat excepturi obcaecati. Fugiat cumque molestias nulla ad
          beatae enim harum tenetur quidem quisquam sed ipsum inventore,
          doloremque quam ipsa culpa.
        </p>
      </div>
      <div className="hidden sm:flex w-full justify-content items-center">
        <img src={Join} alt="hero" className="w-[85%]" />
      </div>
    </div>
  );
};

export default WhyJoinUs;
