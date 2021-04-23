import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import "./alumni.css";

//Header (Team + Carousel) Styling Ends

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 text-gray-400 bg-gray-900`;
const Card = tw(
  motion.a
)`block max-w-xs mx-auto sm:max-w-none sm:mx-0 h-full flex flex-col items-center text-center`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4`}
`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold  text-white group-hover:text-blue-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 group-hover:text-blue-500`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-blue-500`}
`;

//Cards For Heads
const Alumni = ({
  heading = "",
  subHeading = "",
  tabs = {
    Heads: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Mahek Jain",
        Year: "2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Siddhart Singh",
        Year: "2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Rahul",
        Year: "2021",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Jalapeno Poppers",
        Year: "2020",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Cajun Chicken",
        Year: "2020",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Chillie Cake",
        Year: "2020",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Guacamole Mex",
        Year: "2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Carnet Nachos",
        Year: "2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates",
      },
    ],
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);

  return (
    <Container className="councilStyle" style={{ textAlign: "center" }}>
      <ContentWithPaddingXl>
        {tabsKeys.map((tabKey, index) => (
          <TabContent>
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer
                    imageSrc={card.imageSrc}
                  ></CardImageContainer>
                  <CardText style={{ textAlign: "center" }}>
                    <CardTitle>{card.Name}</CardTitle>
                    <CardTitle>{card.Year}</CardTitle>
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

export default Alumni;
