import React from "react";

const Video = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center flex-col">
        <h1 className="text-white text-6xl text-bold my-24">Our Orientation</h1>
      <iframe
        width="800"
        height="460"
        src="https://www.youtube.com/embed/ah_txKzayIc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
