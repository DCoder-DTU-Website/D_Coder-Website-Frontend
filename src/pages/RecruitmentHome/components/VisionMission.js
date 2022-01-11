import React from "react";

const VisionMission = () => {
  const LoremText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quo quidem ad quisquam cupiditate tempore deleniti unde laudantium a voluptatum eligendi accusantium assumenda repellat, accusamus,`;
  const Card = ({ desc }) => {
    return (
      <div className="w-[20rem] h-[12rem] bg-white mx-6 border my-6 rounded-xl p-4 border-4 border-[#3182CE] shadow-2xl shadow-white">
        <p className="text-center">{desc}</p>
      </div>
    );
  };
  return (
    <div className="flex w-full min-h-[100vh] flex-col justify-center items-center">
      <h1 className="text-white text-2xl sm:text-4xl md:text-6xl text-bold my-8 justify-center">
        Our Vision {`&`} Mission
      </h1>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex flex-col md:flex-row gap-x-12">
          <Card desc={LoremText} />
          <Card desc={LoremText} />
          <Card desc={LoremText} />
        </div>
        <div className="flex flex-row gap-x-12">
          <Card desc={LoremText} />
          <Card desc={LoremText} />
          <Card desc={LoremText} />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
