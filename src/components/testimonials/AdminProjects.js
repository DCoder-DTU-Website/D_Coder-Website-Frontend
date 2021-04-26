import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { BlueButton } from "../misc/Buttons.js";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";
import Button from "@material-ui/core/Button";
import "../../pages/admin/styles.css";
import api from "../../api/apiClient";

const Container = tw.div` relative -mt-16 ml-4 -mb-16`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-4/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;
const Link = tw.a`inline-block text-sm text-blue-600 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-blue-600 mr-2 `;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-32 lg:h-64`,
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100  rounded-tl-3xl border`;
const ControlButton = styled(BlueButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

// const Subheading = tw.div`mb-4`;
const HeadingTitle = tw.div`text-blue-400 font-bold text-2xl lg:text-left leading-tight`;
// const Description = tw.p`max-w-md text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const QuoteContainer = tw.div`relative`;
const Quote = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 text-black text-sm font-medium sm:mx-8 md:mx-4 lg:mx-8`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-blue-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

const AdminProjects = ({
  heading = "",
  testimonials = null,
  textOnLeft = false,
}) => {
  const defaultTestimonials = [
    {
      imageSrc: "https://media.giphy.com/media/11JTxkrmq4bGE0/source.gif",
      ownerName: "Vaibhav Gupta",
      projectName: "Bhukkad Nukkad",
      teckStack: "Flutter",
      linkedin: "https://linkedin.com",
      github: "https://www.github.com/Vaibhav21112002",
      description:
        "One upon a time there was a crow who was very thirsty and was in the need of the food or water. Then suddenly it saw a tank which has a little water.",
    },
    {
      imageSrc: "https://media.giphy.com/media/kKefeMw8rbMVq/source.gif",
      ownerName: "Shashank Tripathi",
      projectName: "Get The Coin",
      teckStack: "React Native",
      linkedin: "https://linkedin.com",
      github: "https://www.github.com/Shashanktri32",
      description:
        "One upon a time there was a crow who was very thirsty and was in the need of the food or water. Then suddenly it saw a tank which has a little water.",
    },
  ];

    
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const { data } = await api.get("/project/all");
      const { data: projectsData } = data;
      setProjects(projectsData);
    } catch (err) {
      console.log("Could not retrieve Projects!", err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  
  if (!testimonials || testimonials.length === 0)
    testimonials = projects;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container>
      <Content>
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider
                arrows={false}
                ref={setImageSliderRef}
                asNavFor={textSliderRef}
                fade={true}
              >
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.image} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeftIcon
                          className="arr"
                          style={{ opacity: "1 !important" }}
                        />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRightIcon className="arr" />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo tw="hidden lg:block" heading={heading} />
                <TestimonialTextSlider
                  arrows={false}
                  ref={setTextSliderRef}
                  asNavFor={imageSliderRef}
                  fade={true}
                >
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <QuoteContainer>
                        <Quote>{testimonial.title}</Quote>
                        <Quote>
                          <Link href={testimonial.linkedin}>
                            {testimonial.dev}
                          </Link>

                          <Link href={testimonial.github}>Github</Link>
                        </Quote>
                        <Quote>{testimonial.techStack}</Quote>
                        <Quote>{testimonial.desc}</Quote>
                      </QuoteContainer>
                      <div
                        style={{
                          marginTop: "5%",
                          textAlign: "center !important",
                        }}
                      >
                        <Button 
                          variant="contained"
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            marginRight: "5%",
                          }}
                        >
                          Permit
                        </Button>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "red", color: "white" }}
                        >
                          Deny
                        </Button>
                      </div>
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

const HeadingInfo = ({ heading, ...props }) => (
  <div {...props}>
    <HeadingTitle>{heading}</HeadingTitle>
  </div>
);

export default AdminProjects;
