import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import StatsIllustrationSrc from "../../images/about_us_3.jpg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
// import AOS from "aos";

const Container = tw.div`relative -m-8 bg-gray-900`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-2xl bg-cover bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(
  SectionHeading
)`md:text-left mt-4 text-white font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 mx-4 sm:mx-0 text-center md:text-justify text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div` text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-white tracking-wide`;
const Key = tw.div`font-medium text-blue-700`;

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const WhyD = ({
  subheading = "Why D_CODER?",
  description = "D_CODER is the most active tech society of DTU. We prepare our members for internships and placements. Our senior council has badged internships in coveted companies like Goldman Sachs, Microsoft, DE Shaw, and many others. We will clear all your doubts and will aim to increase your accuracy and proficiency.",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Active Members",
      value: "500+",
    },
  ];

  if (!statistics) statistics = defaultStatistics;
  // AOS.init();
  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss} data-aos = "fade-right">
          {/* <div data-aos="fade-right" data-aos-duration="800"> */}
          <Image
            imageSrc={imageSrc}
            style={{
              boxShadow: "10px 10px 5px -3px #000",
              webkitBoxShadow: "10px 10px 5px -3px #000",
            }}
          />
          {/* </div> */}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Description>{description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value style={{ textAlign: "center" }}>
                    {statistic.value}
                  </Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default WhyD;
