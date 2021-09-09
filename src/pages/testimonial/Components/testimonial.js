import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AOS from "aos";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import "./testimonial.css";
import testimonaldata from "./testimonialdata";
const HeaderRow = tw.div`flex justify-center items-center flex-col xl:flex-row`; // Team Heading +carousel
const Header = tw(SectionHeading)``; // Team Heading
const MainContainer = tw.div`w-full px-4 pt-4`;
const SubContainer = tw.div`container mx-auto`;
const SubSubContainer = tw.div`lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around`;
const CardContainer = tw.div`xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 items-center bg-gray-900`;
const Card = tw.div`rounded shadow-md bg-gray-900 border-blue-400 border-4`;
const ImageContainer = tw.div`absolute -mt-20 w-full flex justify-center `;
const ImageData = tw.div`h-40 w-40`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
      text-align: "centre";
    `}
  ${tw`rounded-full object-cover h-full w-full shadow-md border-blue-400 border-4`}
`;
const DataContainer = tw.div`px-6 mt-12 `;
const DataName = tw.div`font-bold text-3xl text-center pb-1 py-4 text-indigo-400 pt-12`;
const DataPost = tw.div`text-white text-sm text-center`;
const DataContent = tw.div` text-white text-justify text-base pt-6 font-normal`;
const DataIcons = tw.div`w-full flex justify-center pt-5 pb-5`;
const Icons = tw.a`mx-10`;

const testimonials = () => {
  AOS.init({ duration: 2000 });
  const tabsKeys = Object.keys(testimonaldata.tabs);
  return (
    <Container
      className="councilStyle"
      style={({ textAlign: "center" }, { backgroundColor: "rgb(21, 26, 35)" })}
    >
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header
            style={{
              fontSize: "40px",
              marginBottom: "35px",
              fontWeight: "lighter",
              color: "#63b3ed",
            }}
          >
            {testimonaldata.heading}
          </Header>
        </HeaderRow>
        <Header
          style={{
            fontSize: "16px",
            marginBottom: "35px",
            padding: "0px 100px",
            fontWeight: "lighter",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {testimonaldata.subHeading}
        </Header>
        <MainContainer>
          <SubContainer>
            {tabsKeys.map((tabKey) => (
              <SubSubContainer>
                {testimonaldata.tabs[tabKey].map((card, index) => (
                  <CardContainer data-aos="fade-up" key={index}>
                    <Card
                      className="group"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <ImageContainer>
                        <ImageData>
                          <Image imageSrc={card.imageSrc}></Image>
                        </ImageData>
                      </ImageContainer>
                      <DataContainer>
                        <DataName>{card.Name}</DataName>
                        <DataPost>{card.Post}</DataPost>
                        <DataContent>{card.content}</DataContent>
                        <DataIcons>
                          <Icons>
                            <a
                              href={card.linkedin}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <svg
                                className="svgtestimonial feather feather-linkedin"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </a>
                          </Icons>
                        </DataIcons>
                      </DataContainer>
                    </Card>
                  </CardContainer>
                ))}
              </SubSubContainer>
            ))}
          </SubContainer>
        </MainContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default testimonials;
