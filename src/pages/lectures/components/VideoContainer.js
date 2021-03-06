import React, { useState, useEffect } from "react";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import YoutubeVideo from "./YoutubeVideo";

import comingSoon from "../coming-soon.svg";
import api from "../../../api/apiClient";

const GridContainer = tw.div`grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3`;
const VideoSection = tw.div`m-10 flex justify-center items-center`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center text-white`;
const ImageContainer = tw.div`mt-10`;

function VideoContainer({ history, location, match }) {
  const { topic, subtopic } = match.params;
  const [lectures, setLectures] = useState([]);

  const getLectures = async () => {
    try {
      const { data } = await api.get("/lecture/all");
      const { data: lecture } = data;
      setLectures(lecture);
      console.log(lectures);
    } catch (err) {
      console.log("Could not retrieve Lectures!", err);
    }
  };

  useEffect(() => {
    getLectures();
    // eslint-disable-next-line
  }, []);

  const topicVideos = lectures.filter(
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
          <ImageContainer>
            <img src={comingSoon} alt="coming soon" />
          </ImageContainer>
        </HeadingInfoContainer>
      )}
    </>
  );
}

export default VideoContainer;
