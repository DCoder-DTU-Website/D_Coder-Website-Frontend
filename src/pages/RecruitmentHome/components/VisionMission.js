import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMission = () => {
  AOS.init();
  const LoremText = `We not only believe in dreaming targets at the apex, but we also firmly believe that we can achieve them by perseverance and proper guidance from our seniors.`;
  const data = [
    {
      title: "Realistic Dreamers",
      desc: "We not only believe in dreaming targets at the apex, but we also firmly believe that we can achieve them by perseverance and proper guidance from our seniors.",
    },
    {
      title: "Difference",
      desc: "We firmly believe that we can make a real big difference in this world by solving real-life problems through technology.",
    },
    {
      title: "Zealous",
      desc: "We accept the challenges with enthusiasm and we think that life's most energetic years, that of  college, can be best utilized only within a fostering environment.",
    },
    {
      title: "Sharing",
      desc: "We believe that acquiring knowledge for a long time does not benefit us that much if we don't share it with our peers. We make this happen by saying yes to healthy technical discussions.",
    },
    {
      title: "Community",
      desc: "We are the average of 5 people we are with. Our mission is to create a community where people can interact with more competent people and learn & grow together.",
    },
    {
      title: "Innovation",
      desc: "When creativity and technology meets innovation, sparks are created. Our mission is to make the most of all and develop anew where few have dared to go.",
    },
    {
      title: "Diverse",
      desc: "Our mission is to create a group of people who can help each other in various technology fields so that no opportunity is left behind because of a lack of knowledge.",
    },
  ];
  const Card = ({ item }) => {
    return (
      <div className="w-[20rem] h-[12rem] bg-white mx-6 border my-6 rounded-xl p-4 border-4 border-[#3182CE] shadow-lg shadow-white">
        <h1 className="text-2xl font-semibold text-center mb-4">{item.title}</h1>
        <p className="text-sm text-center">{item.desc}</p>
      </div>
    );
  };
  return (
    <div className="flex w-full sm:min-h-[70vh] flex-col justify-center items-center mt-12">
      <h1 className="recruiter-heading text-white text-2xl sm:text-4xl md:text-6xl text-bold my-8 justify-center">
        Our Vision {`&`} Mission
      </h1>
      <div className="flex flex-wrap w-full h-full justify-center items-center">
        <div
          className="flex flex-wrap  gap-x-12 justify-center items-center"
          data-aos="zoom-in-down"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          {data.map((item, index) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
