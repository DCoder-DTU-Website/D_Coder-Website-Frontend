import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative bg-secondary-900 -mx-8 px-8 text-gray-100 flex justify-center`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`w-1/2`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full -mx-12 md:mx-10 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({ cards }) => {
  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Reach",
      description:
        "The initiative garnered around 1000 students from different schools and we as a tech society feel proud that we were crazy enough to take forward this initiative on such a large scale and were successful in our objective",
    },
    {
      imageSrc: SupportIconImage,
      title: "Ideathon for Students",
      description:
        "The annual event of the initiative brought in students from multiple schools under one roof to compete in the BIGGEST IDEATHON CHALLENGE IN INDIA FOR STUDENTS organized on 8th February 2019. Some of the participating schools were Ryan International School, Rohini, Bal Bharati Public School Dwarka,  Ramjas School Pusa Road, Mira Model School, Government Sarvodaya co-ed Vidyalaya,  SD Public School, Patel Nagar and many more.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Developed Various Skills",
      description:
        "The event looked at INNOVATION as a process driven by a gamut of disciplines, including MANAGEMENT, ENGINEERING AND DESIGN. The event was a platform to present projects done in various fields and talk about the untapped potential and discuss processes for need-based innovation. ",
    },
    {
      imageSrc: ReliableIconImage,
      title: "Success of the Event",
      description:
        "The students got to learn amazing ideas and innovation that was not accessible to them by normal schooling methods. The support we got from different schools and the amount of enthusiasm shown by students was enthralling.  We believe that when an initiative is taken with an aim to change something there will always be some difficulty and lots of effort, but after the completion, all is forgotten with how much we achieved and that is important.",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Highlights</Heading>
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">{card.description}</p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
