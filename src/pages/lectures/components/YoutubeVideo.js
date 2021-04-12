import React from "react";

function YoutubeVideo() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gLZJlf5rHVs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
