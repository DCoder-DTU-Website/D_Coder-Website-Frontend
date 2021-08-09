import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import "./council.css";
import "./CouncilCard.scss";
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
    <div className="card__collection clear-fix" style={{ margin: "1em 3em" }}>
      <div className="cards cards--two">
        <img src={card.imageSrc} className="img-responsive" alt="Cards Image" />
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
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
      {/* <div class="cards cards--three">
        <img
          src="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
          class="img-responsive"
          alt=""
        />
        <span class="cards--three__rect-1">
          <span class="shadow-1"></span>
          <p>Chris Levnon</p>
        </span>
        <span class="cards--three__rect-2">
          <span class="shadow-2"></span>
        </span>
        <span class="cards--three__circle"></span>
        <ul class="cards--three__list">
          <li>
            <i class="fab fa-facebook-f"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-linkedin-in"></i>
          </li>
        </ul>
      </div> */}
    </div>
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
  //<div
  //   id="curve"
  //   className="card"
  //   style={{ backgroundImage: `url(${card.imageSrc})` }}
  // >
  //   <div className="footer">
  //     <div className="connections">
  //       <div className="connection facebook">
  //         <div className="icon"></div>
  //       </div>
  //     </div>
  //     <svg id="curve">
  //       <path
  //         id={index}
  //         d="M0,200 Q80,100 400,200 V150 H0 V50"
  //         transform="translate(0 300)"
  //       />
  //       <rect
  //         id="dummyRect"
  //         x="0"
  //         y="0"
  //         height="450"
  //         width="400"
  //         fill="transparent"
  //       />
  //       <animate
  //         href={`#${index}`}
  //         attributeName="d"
  //         to="M0,50 Q80,100 400,50 V150 H0 V50"
  //         fill="freeze"
  //         begin="dummyRect.mouseover"
  //         end="dummyRect.mouseout"
  //         dur="0.1s"
  //         id="bounce1"
  //       />
  //       <animate
  //         href={`#${index}`}
  //         attributeName="d"
  //         to="M0,50 Q80,0 400,50 V150 H0 V50"
  //         fill="freeze"
  //         begin="bounce1.end"
  //         end="dummyRect.mouseout"
  //         dur="0.15s"
  //         id="bounce2"
  //       />
  //       <animate
  //         href={`#${index}`}
  //         attributeName="d"
  //         to="M0,50 Q80,80 400,50 V150 H0 V50"
  //         fill="freeze"
  //         begin="bounce2.end"
  //         end="dummyRect.mouseout"
  //         dur="0.15s"
  //         id="bounce3"
  //       />
  //       <animate
  //         href={`#${index}`}
  //         attributeName="d"
  //         to="M0,50 Q80,45 400,50 V150 H0 V50"
  //         fill="freeze"
  //         begin="bounce3.end"
  //         end="dummyRect.mouseout"
  //         dur="0.1s"
  //         id="bounce4"
  //       />
  //       <animate
  //         href={`#${index}`}
  //         attributeName="d"
  //         to="M0,50 Q80,50 400,50 V150 H0 V50"
  //         fill="freeze"
  //         begin="bounce4.end"
  //         end="dummyRect.mouseout"
  //         dur="0.05s"
  //         id="bounce5"
  //       />
  //       <animate
  //         href={`#${index}`}
  //         attributeName="d"
  //         to="M0,200 Q80,100 400,200 V150 H0 V50"
  //         fill="freeze"
  //         begin="dummyRect.mouseout"
  //         dur="0.15s"
  //         id="bounceOut"
  //       />
  //     </svg>
  //     <div className="info">
  //       <div className="name">{card.title}</div>
  //       <div className="job">{card.content}</div>
  //     </div>
  //   </div>
  //   <div className="card-blur"></div>
  // </div>
}
