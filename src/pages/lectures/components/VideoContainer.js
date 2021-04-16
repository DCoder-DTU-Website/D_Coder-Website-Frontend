import React, { useState } from "react";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import YoutubeVideo from "./YoutubeVideo";

import fakeData from "../fakeData";

const GridContainer = tw.div`grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3`;
const VideoSection = tw.div`m-10 flex justify-center items-center`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center text-white`;

function VideoContainer({ history, location, match }) {
  const { topic, subtopic } = match.params;
  const [videos, setVideos] = useState(fakeData);
  const topicVideos = videos.filter(
    (video) =>
      video.topic.toLowerCase() === topic.toLowerCase() &&
      video.subtopic.toLowerCase() === subtopic.toLowerCase()
  );

  const displayVideos = topicVideos.map((video, index) => (
    <VideoSection key={index}>
      <YoutubeVideo
        key={index}
        count={index}
        link={video.link}
        subtopic={video.subtopic}
      />
    </VideoSection>
  ));

  return (
    <>
      <HeadingInfoContainer>
        <HeadingTitle>{subtopic.toUpperCase()}</HeadingTitle>
      </HeadingInfoContainer>
      {displayVideos.length ? (
        <GridContainer>{displayVideos}</GridContainer>
      ) : (
        <HeadingInfoContainer>
          <HeadingTitle>Coming Soon...</HeadingTitle>
        </HeadingInfoContainer>
      )}
    </>
  );
}

export default VideoContainer;
