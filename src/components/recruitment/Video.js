import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="definitionVideo">
      <iframe
        className="video"
        id="video"
        src="https://www.youtube.com/embed/-KIE463QlK4"
        allowfullscreen="allowfullscreen"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Video;
