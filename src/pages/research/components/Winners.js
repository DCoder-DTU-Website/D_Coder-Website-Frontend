import React, { useState } from "react";
import tw from "twin.macro";
import ScrollTrigger from "react-scroll-trigger";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";

import WinnerConfetti from "./WinnerConfetti";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`text-white`;
const Subheading = tw(SubheadingBase)`text-center mb-3 text-blue-600`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;

function Winners({ winners }) {
  const [insideWinners, setInsideWinners] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setInsideWinners(true)}
      onExit={() => setInsideWinners(false)}
    >
      <Container>
        {insideWinners && <WinnerConfetti />}
        <ContentWithPaddingXl>
          <HeadingContainer>
            <Subheading>Congratulations!</Subheading>
            <Heading>Meet the Champions!</Heading>
            <Description>Past Winners</Description>
          </HeadingContainer>
          <Cards>{winners}</Cards>
        </ContentWithPaddingXl>
      </Container>
    </ScrollTrigger>
  );
}

export default Winners;
