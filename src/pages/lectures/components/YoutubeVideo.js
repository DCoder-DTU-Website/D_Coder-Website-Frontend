import React from "react";
import ReactPlayer from 'react-player/lazy'

function YoutubeVideo({ count, link, subtopic }) {
  return (
    <div>
      {/* <iframe
        width="350"
        height="196.88"
        src={link}
        title={`${subtopic} - ${count}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe> */}
      <ReactPlayer
        url={link} 
        title={`${subtopic} - ${count}`}
        width="300px"
        height="200px" 
        controls="true"
      />
    </div>
  );
}

export default YoutubeVideo;
