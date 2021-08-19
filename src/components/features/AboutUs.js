import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import TeamIllustrationSrc from "../../images/about_us.jpg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/users.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/message-square.svg";
import AOS from "aos";

const Container = tw.div`relative bg-gray-900 -m-8`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between left-0 max-w-screen-xl mx-8 py-20 md:py-24 items-center`;
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
const Description = tw.p`mt-8 text-center md:text-justify text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-blue-500 text-blue-500 text-center rounded p-2 flex-shrink-0`}
  ${(props) => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-blue-500 text-gray-100`,
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`text-white ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const AboutUs = ({
  subheading = "Technical Society of DTU",
  heading = <>About Us</>,
  description = "D_CODER is a Coding Society of DTU, dedicated to the advancement of software innovation and excellence for the benefit of the students.",
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
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Community",
      description:
        "We aim to build a community of skilled people in the university coming together for the benefit of all.",
      iconContainerCss: tw`bg-teal-300 text-teal-800`,
    },
    {
      Icon: MoneyIcon,
      title: "Platform",
      description:
        "We provide our members a platform to learn new skills and brush up on their existing ones.",
      iconContainerCss: tw`bg-red-300 text-red-800`,
    },
  ];

  if (!features) features = defaultFeatures;
  AOS.init();
  return (
    <Container>
      <TwoColumn
        style={{
          margin: "32px auto 0",
        }}
      >
        <ImageColumn>
          <div data-aos="fade-left" data-aos-duration="800">
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
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={feature.iconContainerCss || iconContainerCss}
                    >
                      {<feature.Icon />}
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
            </Features>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default AboutUs;
