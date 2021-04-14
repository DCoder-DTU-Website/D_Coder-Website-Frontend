import React, { useState } from "react";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import YoutubeVideo from "./YoutubeVideo";

import fakeData from "../fakeData";

const GridContainer = tw.div`grid grid-cols-3 gap-4`;
const VideoSection = tw.div`m-10 flex justify-center items-center`;

function VideoContainer({ history, location, match }) {
  const { topic, subtopic } = match.params;
  const [videos, setVideos] = useState(fakeData);
  const topicVideos = videos.filter(
    (video) =>
      video.topic.toLowerCase() === topic.toLowerCase() &&
      video.subtopic.toLowerCase() === subtopic.toLowerCase()
  );

  const displayVideos = topicVideos.map((video, index) => (
    <VideoSection>
      <YoutubeVideo
        key={video.id}
        count={index}
        link={video.link}
        subtopic={video.subtopic}
      />
    </VideoSection>
  ));

  return <GridContainer>{displayVideos}</GridContainer>;
}

export default VideoContainer;
