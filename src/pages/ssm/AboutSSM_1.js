import React from "react";
import tw from "twin.macro";
import AOS from "aos";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import TeamIllustrationSrc from "./video1.gif";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

import "./Typing.scss";
const Container = tw.div`relative bg-gray-900 -m-8`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between left-0 max-w-screen-xl mx-8 py-20 md:py-24 items-center px-10 xl:px-0`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-blue-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-blue-500`;
const Heading = tw(
  SectionHeading
)`md:text-left text-white mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-justify lg:text-2xl sm:text-xl md:text-2xl md:text-base  font-medium leading-relaxed text-secondary-100`;





const AboutC2S = ({
  subheading = "An Initiative by D_CODER",
  heading = <h1>Seniors Se Mulaquaat</h1>,
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = true,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null,
}) => {
  const defaultFeatures = [];
  AOS.init({
    duration: 1000,
  });
  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn
        style={{
          marginTop: "32px",
          margin: "auto",
        }}
      >
        <ImageColumn>
        <div data-aos="fade-up">         
          <Image
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
            style={{
              boxShadow: "10px 10px 5px -3px #000",
              webkitBoxShadow: "10px 10px 5px -3px #000",
              borderRadius: "15px",
            }}
          />
        </div>
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description >
              <ul>
                <br />
                <li>
                  Senior Se Mulaquaat is a community of DTU students and alumni
                  that aims to connect the students with alumni of the
                  university and gain valuable insights from their experiences
                  and guidance.
                </li>
                <br />
                <li>
                  The community was formed at an event organised in October 2019
                  in DTU to augment interaction with the alumni and help
                  students learn about their experiences. Honourable alumni of
                  the college working at prestigious firms attended and shared
                  their experiences from college and life. The formal session
                  was followed by an informal session where students got a
                  chance to network and interact directly with the speakers.
                </li>
              </ul>
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default AboutC2S;
