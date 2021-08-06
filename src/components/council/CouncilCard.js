import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import "./council.css";
import "./CouncilCard.css";

const CardContainer = tw.div`flex justify-center mt-10 p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)` rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-32 bg-center border-blue-600 border-4 p-32 bg-cover relative rounded-full`}
`;

const CardText = tw.div`p-4 text-white`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-white`;
const CardContent = tw.p`mt-1 text-sm font-medium text-white`;

export default function CouncilCard({ index, card }) {
  const backImage = [
    "https://i.pinimg.com/736x/b8/9d/22/b89d221eaf478e368e9b205a30d5d263.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/311/889/original/glitched-circle-frame-design-distorted-glitch-style-modern-background-glow-design-for-graphic-design-banner-poster-flyer-brochure-card-illustration-vector.jpg",
    "https://i.pinimg.com/originals/db/8c/82/db8c8283057bfc1e3261587c0d0223f2.jpg",
  ];
  return (
    <a
      class="card"
      style={{ backgroundColor: "#1a202c" }}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div
        class="front"
        style={{ backgroundImage: `url(${card.imageSrc})` }}
      ></div>
      <div
        class="back"
        style={{
          backgroundImage: `url(${backImage[1]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <h1>{card.title}</h1>
          <h4>{card.content}</h4>
          <button class="button">Click Here</button>
        </div>
      </div>
    </a>
  );
}

{
  /* <CardContainer key={index}>
      <Card
        className="group"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <CardImageContainer
          className="image"
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
          }}
          imageSrc={card.imageSrc}
        ></CardImageContainer>
        <CardText style={{ textAlign: "center" }}>
          <a href={card.linkedin} target="_blank" rel="noreferrer">
            <CardTitle style={{ cursor: "pointer" }}>{card.title}</CardTitle>
          </a>
          <CardContent>{card.content}</CardContent>
        </CardText>
      </Card>
    </CardContainer> */
}
