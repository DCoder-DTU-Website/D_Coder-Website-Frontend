import React from "react";
import { useMediaQuery } from "react-responsive";

const Video = () => {
  const isPC = useMediaQuery({
    query: "(min-device-width: 690px)",
  });
  return (
    <div className="flex w-full h-[100vh] justify-center items-center flex-col">
      <h1 className="text-white text-2xl sm:text-4xl md:text-6xl text-bold my-24">
        Our Orientation
      </h1>
      {isPC ? (
        <iframe
          width="800"
          height="460"
          src="https://www.youtube.com/embed/ah_txKzayIc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : (
        <iframe
          width="300"
          height="350"
          src="https://www.youtube.com/embed/ah_txKzayIc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default Video;
