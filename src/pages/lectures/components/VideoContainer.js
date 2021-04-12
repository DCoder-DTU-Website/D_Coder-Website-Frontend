import React from "react";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import YoutubeVideo from "./YoutubeVideo";

const GridContainer = tw.div`grid grid-cols-2 gap-4`;
const VideoSection = tw.div`mt-10`;

function VideoContainer() {
  return (
    <GridContainer>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
      <VideoSection>
        <YoutubeVideo />
      </VideoSection>
    </GridContainer>
  );
}

export default VideoContainer;
