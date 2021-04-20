import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import AOS from "aos";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import "./testimonial.css";

const HeaderRow = tw.div`flex justify-center items-center flex-col xl:flex-row`; // Team Heading +carousel
const Header = tw(SectionHeading)``; // Team Heading
const MainContainer = tw.div`w-full px-4 pt-4`;
const SubContainer = tw.div`container mx-auto`;
const SubSubContainer = tw.div`lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around`;
const CardContainer = tw.div`xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5  bg-gray-900`;
const Card = tw.div`rounded shadow-md bg-gray-900 border-blue-400 border-4`;
const ImageContainer = tw.div`absolute -mt-20 w-full flex justify-center `;
const ImageData = tw.div`h-40 w-40`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`rounded-full object-cover h-full w-full shadow-md border-blue-400 border-4`}
`;
const DataContainer = tw.div`px-6 mt-12 `;
const DataName = tw.div`font-bold text-3xl text-center pb-1 py-4 text-indigo-400 pt-12`;
const DataPost = tw.div`text-white text-sm text-center`;
const DataContent = tw.div`text-center text-white text-base pt-6 font-normal`;
const DataIcons = tw.div`w-full flex justify-center pt-5 pb-5`;
const Icons = tw.a`mx-10`;
export default ({
  heading = "BUILDING TEAM",
  subHeading = "The Talented People Behind the Scenes of the Organization",
  tabs = {
    Heads: [
      {
        imageSrc:
          "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
        Name: "Andres Berlin",
        Post: "Chief Executive Officer",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempo",
      },
      {
        imageSrc:
          "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
        Name: "Silene Tokyo",
        Post: "Product Design Head",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempo",
      },
      {
        imageSrc:
          "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif",
        Name: "Johnson Stone",
        Post: "Manager Development",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempo",
      },
      {
        imageSrc: "https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg",
        Name: "Rachel Adams",
        Post: "Product Design Head",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempo",
      },
      {
        imageSrc:
          "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg",
        Name: "Dean Jones",
        Post: "Principal Software Engineer",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempo",
      },
      {
        imageSrc:
          "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg",
        Name: "Charles Keith",
        Post: "UX Designer",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempo",
      },
    ],
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  AOS.init({ duration: 2000 });
  const tabsKeys = Object.keys(tabs);
  return (
    <Container
      className="councilStyle"
      style={({ textAlign: "center" }, { backgroundColor: "rgb(21, 26, 35)" })}
    >
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header
            style={{
              fontSize: "30px",
              marginBottom: "35px",
              fontWeight: "lighter",
            }}
          >
            {heading}
          </Header>
        </HeaderRow>
        <Header
          style={{
            fontSize: "45px",
            marginBottom: "35px",
            color: "#63b3ed",
            padding: "0px 100px",
            fontWeight: "lighter",
          }}
        >
          {subHeading}
        </Header>
        <MainContainer>
          <SubContainer>
            {tabsKeys.map((tabKey) => (
              <SubSubContainer>
                {tabs[tabKey].map((card, index) => (
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
                            <a href="https://www.google.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-github"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                            </a>
                          </Icons>
                          <Icons>
                            <a href="https://www.google.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-linkedin"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </a>
                          </Icons>
                          <Icons>
                            <a href="https://www.google.com/">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#718096"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-instagram"
                              >
                                <rect
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={5}
                                  ry={5}
                                />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
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
