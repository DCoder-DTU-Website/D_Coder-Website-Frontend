import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { BlueButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import './alumni.css';
// import Gallery from "../AlumniFilter/gallery"

//Header (Team + Carousel) Styling Starts
const HeaderRow = tw.div`flex justify-center items-center flex-col xl:flex-row`; // Team Heading +carousel
const Header = tw(SectionHeading)``; // Team Heading

//Header (Team + Carousel) Styling Ends

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12 text-gray-400 bg-gray-900`;
const Card = tw(
  motion.a
)`block max-w-xs mx-auto sm:max-w-none sm:mx-0 h-full flex flex-col items-center text-center`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4`}
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
export default ({
  
  heading = "",
  subHeading = "",
  tabs = {
    Heads: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Mahek Jain",
        Year: "2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Siddhart Singh",
        Year:"2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Rahul",
        Year:"2021",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Jalapeno Poppers",
        Year:"2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Cajun Chicken",
        Year:"2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Chillie Cake",
        Year:"2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Guacamole Mex",
        Year:"2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        Name: "Carnet Nachos",
        Year:"2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nisi sequi possimus exercitationem tempore culpa odit saepe quo expedita voluptates"
      }
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const isnotMobile = useMediaQuery({ query: '(min-width: 641px)' });
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

//Cards For Coheads
const getCoHeads = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Vibhor Jain",
      content: "Developer",
         
      // rating: "5.0",
      reviews: "87",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
         
      // rating: "4.5",
      reviews: "34",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
         
      // rating: "3.9",
      reviews: "26",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
         
      // rating: "4.2",
      reviews: "95",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
         
      // rating: "5.0",
      reviews: "61",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
         
      // rating: "4.9",
      reviews: "89",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
         
      // rating: "4.6",
      reviews: "12",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
         
      // rating: "4.2",
      reviews: "19",
       
    }
  ];
  return cards;
};

// Cards for Designers
  const getDesigners = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Any Designer",
      content: "Design anything anytime",
         
      // rating: "5.0",
      reviews: "87",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
         
      // rating: "4.5",
      reviews: "34",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
         
      // rating: "3.9",
      reviews: "26",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
         
      // rating: "4.2",
      reviews: "95",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
         
      // rating: "5.0",
      reviews: "61",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
         
      // rating: "4.9",
      reviews: "89",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
         
      // rating: "4.6",
      reviews: "12",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
         
      // rating: "4.2",
      reviews: "19",
       
    }
  ];
  return cards;
};

// Cars for Developers
  const getDevelopers = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "A developer",
      content: "Developer developes development",
         
      // rating: "5.0",
      reviews: "87",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
         
      // rating: "4.5",
      reviews: "34",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
         
      // rating: "3.9",
      reviews: "26",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
         
      // rating: "4.2",
      reviews: "95",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
         
      // rating: "5.0",
      reviews: "61",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
         
      // rating: "4.9",
      reviews: "89",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
         
      // rating: "4.6",
      reviews: "12",
       
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
         
      // rating: "4.2",
      reviews: "19",
       
    }
  ];
  return cards;
};

  

