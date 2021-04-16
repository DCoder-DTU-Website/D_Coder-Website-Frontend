import React from "react";

function YoutubeVideo({ count, link, subtopic }) {
  return (
    <div>
      <iframe
        width="350"
        height="196.88"
        src={link}
        title={`${subtopic} - ${count}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
