import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AOS from "aos";
import TeamIllustrationSrc from "./video2.gif";
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
const Description = tw.p`text-center md:text-justify lg:text-2xl sm:text-xl md:text-2xl md:text-base font-medium leading-relaxed text-secondary-100`;

const AboutC2S = ({
  subheading = "An Initiative by D_CODER",
  heading = <h1>Seniors Se Mulaquaat</h1>,
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = false,
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
            {/* <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading> */}
            <Description >
              <ul>
                <br />
                <li>
                  Seniors Se Mulaquaat allows alumni to relive their college
                  life and also guides creative young minds through the journey
                  of the experienced minds. Most importantly it builds a strong
                  network among seniors and juniors of college where everyone
                  grows and there is mutual benefit. It helps seniors to work
                  with enthusiastic trustworthy students on their dream idea and
                  the students can hence grab a decent job or placement
                  opportunity in their field of interest.
                </li>
                <br />
                <li>
                  Our community strongly believes in the concept of growing
                  skills together and we are tirelessly working towards building
                  stronger networks. The social media handles of Seniors Se
                  Mulaquaat are mentioned below, where we regularly update our
                  progress in this direction.
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
