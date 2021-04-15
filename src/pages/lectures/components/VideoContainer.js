import React, { useState } from "react";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import YoutubeVideo from "./YoutubeVideo";

import fakeData from "../fakeData";

const GridContainer = tw.div`grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
const VideoSection = tw.div`m-10 flex justify-center items-center`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Subheading = tw.h3`text-3xl mb-5 font-bold text-blue-600`;

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

  return (
    <>
      <HeadingInfoContainer>
        <Subheading>{subtopic.toUpperCase()}</Subheading>
      </HeadingInfoContainer>
      <GridContainer>{displayVideos}</GridContainer>
    </>
  );
}

export default VideoContainer;
