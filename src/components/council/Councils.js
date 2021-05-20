import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import "./council.css";
import { coheads } from "./Coheads";
import { developers } from "./Developers";
import { heads } from "./Heads";
import { president } from "./President";
import { vp } from "./VicePresident";
import { generalseceratory } from "./GeneralSeceratory";
import AOS from "aos";
import "aos/dist/aos.css";

//Header (Team + Carousel) Styling Starts
const HeaderRow = tw.div`flex justify-center items-center flex-col xl:flex-row`; // Team Heading +carousel
const Header = tw(SectionHeading)``; // Team Heading
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`; // Carousel width > 640px
const TabsControls = tw.div`flex flex-col bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`; // Carousel Width <= 640 px;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-blue-500! text-gray-100!`}
  }
`; // width > 640px simple,hover and active styling

const TabControls = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/5 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 w-full text-gray-700`}
  }
  ${(props) => props.active && tw`bg-blue-500! w-full text-gray-100!`}
  }
`; // width <= 640px simple,hover and active styling

//Header (Team + Carousel) Styling Ends

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`flex justify-center mt-10 p-5 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)` rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-32 bg-center border-blue-600 border-4 p-32 bg-cover relative rounded-full`}
`;

const CardText = tw.div`p-4 text-white`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-white`;
const CardContent = tw.p`mt-1 text-sm font-medium text-white`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-blue-500`}
`;

//Cards For Heads
const Councils = ({
  heading = "Team",
  subHeading = "",
  tabs = {
    Heads: heads,
    // President: president,
    // VicePresident: vp,
    CoHeads: getCoHeads(),
    Developers: getDevelopers(),
  },
}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isnotMobile = useMediaQuery({ query: "(min-width: 641px)" });
  AOS.init();
  return (
    <Container className="councilStyle" style={{ textAlign: "center" }}>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header
            style={{
              fontSize: "60px",
              marginBottom: "35px",
              fontWeight: "light",
            }}
          >
            {heading}
          </Header>
        </HeaderRow>
        <Header
          style={{
            fontSize: "20px",
            fontWeight: "lighter",
            marginBottom: "35px",
            color: "grey",
            padding: "0px 100px",
          }}
        >
          {subHeading}
        </Header>
        <HeaderRow>
          {isMobile && (
            <TabsControls style={{ width: "320px" }}>
              {Object.keys(tabs).map((tabName, index) => (
                <TabControls
                  style={{ textAlign: "center" }}
                  key={index}
                  active={activeTab === tabName}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </TabControls>
              ))}
            </TabsControls>
          )}
          {isnotMobile && (
            <TabsControl>
              {Object.keys(tabs).map((tabName, index) => (
                <TabControl
                  key={index}
                  active={activeTab === tabName}
                  onClick={() => setActiveTab(tabName)}
                >
                  {tabName}
                </TabControl>
              ))}
            </TabsControl>
          )}
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  // initial="rest"
                  // whileHover="hover"
                  // animate="rest"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                >
                  <CardImageContainer
                    className="image"
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                    }}
                    imageSrc={card.imageSrc}
                  ></CardImageContainer>
                  <CardText style={{ textAlign: "center" }}>
                    <a href={card.linkedin} target="_blank" rel="noreferrer">
                      <CardTitle style={{ cursor: "pointer" }}>
                        {card.title}
                      </CardTitle>
                    </a>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

//Cards For Coheads
const getCoHeads = () => {
  return coheads;
};

// Cars for Developers
const getDevelopers = () => {
  return developers;
};

export default Councils;
