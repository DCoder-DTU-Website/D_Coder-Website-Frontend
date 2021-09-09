import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import "./CouncilCard.scss";
import "./council.css";
import { FaLinkedinIn } from "react-icons/fa";

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

// const CardText = tw.div`p-4 text-white`;
// const CardTitle = tw.h5`text-lg font-semibold group-hover:text-white`;
// const CardContent = tw.p`mt-1 text-sm font-medium text-white`;

export default function CouncilCard({ index, card }) {
  const backImage = [
    "https://i.pinimg.com/736x/b8/9d/22/b89d221eaf478e368e9b205a30d5d263.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/311/889/original/glitched-circle-frame-design-distorted-glitch-style-modern-background-glow-design-for-graphic-design-banner-poster-flyer-brochure-card-illustration-vector.jpg",
    "https://i.pinimg.com/originals/db/8c/82/db8c8283057bfc1e3261587c0d0223f2.jpg",
  ];
  return (
    <div className="card__collection clear-fix image-container-photo">
      <div className="cards cards--two">
        <img
          src={card.imageSrc}
          className="img-responsive"
          alt="Cards Image"
          style={{
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>{card.title}</p>
        <ul
          className="cards__list"
          style={{
            marginLeft: "0.6em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li>{card.content}</li>
          <li
            style={{
              margin: "auto",
              backgroundColor: "#0072b1",
              padding: "5px",
              borderRadius: "50%",
            }}
          >
            <a href={card.linkedin} target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
