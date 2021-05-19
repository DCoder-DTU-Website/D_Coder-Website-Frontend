import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { BlueButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";
import { BlueLink as PrimaryLinkBase } from "components/misc/Links.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import testimonialData from "../../pages/testimonial/Components/testimonialdata";

const Container = tw.div`bg-gray-900 relative -m-8 lg:-mb-64`;
const Content = tw.div`max-w-screen-xl mx-auto py-20`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-2 xl:-mx-32 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-144 flex-shrink-0 py-1`;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center text-lg sm:mx-10 lg:justify-start border-b-0`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const ImageAndControlContainer = tw.div`relative px-20 sm:px-16 bg-cover bg-center outline-none h-144`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full bg-center bg-contain bg-no-repeat absolute -mx-32 right-1/2 h-64 w-64 sm:-mx-12 sm:h-96 sm:w-96 lg:h-96 lg:w-96 lg:-mx-32 sm:-mx-48`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-1/2 bg-transparent  py-12 rounded-tl-3xl lg:px-12 -mx-2 my-48 lg:my-20 lg:mx-8 sm:my-20 sm:mx-2`;
const ControlButton = styled(BlueButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2 left-1/2 `}
  svg {
    ${tw`w-6 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12 lg:-mx-32 my-12 sm:-my-32 -my-56 pb-20 px-6 lg:my-12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`text-white lg:text-left leading-tight`;
const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const QuoteContainer = tw.div`relative mt-8`;
const Quote = tw.blockquote`text-white text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-blue-500`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const QuotesLeft = tw(
  QuotesLeftIcon
)`w-6 h-6 opacity-75 text-blue-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(
  QuotesRightIcon
)`w-6 h-6 opacity-75 text-blue-500 inline-block ml-1 -mt-3`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-blue-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

const HomePageReviews = ({
  subheading = "",
  heading = "Testimonials",
  description = "",
  testimonials = null,
  textOnLeft = false,
}) => {
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  useEffect(() => {
    setInterval(() => {
      ref.current.click();
    }, 10000); //miliseconds
  });

  const ref = useRef(null);

  return (
    <Container>
      <Content style={{ margin: "auto", marginRight: "1em" }}>
        <HeadingInfo
          tw="text-center lg:hidden"
          subheading={subheading}
          heading={heading}
          description={description}
        />
        <TestimonialsContainer>
          <Testimonials style={{ marginLeft: "3%", marginRight: "3%" }}>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonialData.tabs.Heads.map((testimonial, index) => (
                  <ImageAndControlContainer
                    key={index}
                    style={{ marginLeft: "30%" }}
                  >
                    <Image imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon />
                      </ControlButton>
                      <ControlButton
                        ref={ref}
                        onClick={imageSliderRef?.slickNext}
                      >
                        <ChevronRightIcon />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo
                  tw="hidden lg:block"
                  subheading={subheading}
                  heading={heading}
                  description={description}
                />
                <PrimaryLink
                  style={{
                    margin: 0,
                    marginTop: "2px",
                  }}
                >
                  <Link
                    to="/testimonial"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    Check out our Testimonials <ArrowRightIcon />
                  </Link>
                </PrimaryLink>
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {testimonialData.tabs.Heads.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <QuoteContainer>
                        <Quote>
                          <QuotesLeft />
                          {testimonial.content}
                          <QuotesRight />
                        </Quote>
                      </QuoteContainer>
                      <CustomerInfo>
                        {/* <CustomerProfilePicture
                          src={testimonial.imageSrc}
                          alt={testimonial.Name}
                        /> */}
                        <CustomerTextInfo>
                          <a href={testimonial.linkedin}>
                            <CustomerName>{testimonial.Name}</CustomerName>
                          </a>
                          <CustomerTitle>{testimonial.Post}</CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);

export default HomePageReviews;
