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
import mahekjain from "../../images/council/mahekjain.jpg";
import siddharthsingh from "../../images/council/siddharthsingh.jpg"
import rahulmahar from "../../images/council/rahulmahar.jpg"
import anima from "../../images/council/anima.PNG"
import vsriram from "../../images/council/vsriram.PNG"
import adityajain from "../../images/council/adityajain.jpg"
import achint from "../../images/council/achint.JPG"
import visheshaggrawal from "../../images/council/visheshaggrawal.jpg"
import varunbajlotra from "../../images/council/varunbajlotra.jpeg"
import vikas from "../../images/council/vikas.jpg"
import Vagish from "../../images/council/Vagish.jpg"
import vaibhavvarshney from "../../images/council/vaibhavvarshney.jpg"
import visheshjain from "../../images/council/visheshjain.jpg"
import aanchalbatra from "../../images/council/aanchalbatra.png";
import shivanggupta from "../../images/council/shivanggupta.jpeg";
import yashgandhi from "../../images/council/yashgandhi.jpeg";
import aaryangupta from "../../images/council/aaryangupta.jpeg";
import abhishekmidha from "../../images/council/abhishekmidha.jpeg";
import rachitsaksena from "../../images/council/rachitsaksena.jpeg";
import ramanshgrover from "../../images/council/ramanshgrover.jpeg";
import aadityanarayansubedy from "../../images/council/aadityanarayansubedy.jpeg";
import kushagrawadhwa from "../../images/council/kushagrawadhwa.jpeg";
import garvitgulati from "../../images/council/garvitgulati.jpg";
import riyadevvarshney from "../../images/council/riyadevvarshney.jpg";
import amoghjalan from "../../images/council/amoghjalan.jpg";
import sameerahmed from "../../images/council/sameerahmed.jpg";
// import  from "../../images/council/";
// import  from "../../images/council/";
// import  from "../../images/council/";
import "./council.css";

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
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-full`}
`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-blue-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-blue-500`}
`;

//Cards For Heads
const Councils = ({
  heading = "Team",
  subHeading = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, harum repellat assumenda, itaque error minima natus quos, nisi iste quas praesentium laboriosam doloremque exercitationem libero?",
  tabs = {
    Heads: [
      {
        imageSrc:
          mahekjain,
        title: "Mahek Jain",
        content: "President",
      },
      {
        imageSrc:
        siddharthsingh,
        title: "Siddhart Singh",
        content: "Vice - President",
      },
      {
        imageSrc:
          rahulmahar,
        title: "Rahul",
        content: "Vice - President",
      },
      {
        imageSrc:
          anima,
        title: "Anima Jain",
        content: "General Secretary",
      },
      {
        imageSrc:
          vsriram,
        title: "V Sriram",
        content: "General Secretary",
      },
      {
        imageSrc:
          adityajain,
        title: "Aditya Jain",
        content: "General Secretary",
      },
      {
        imageSrc:
          achint,
        title: "Anchit",
        content: "Technical Lead",
      },
      {
        imageSrc:
          visheshaggrawal,
        title: "Vishesh Aggrawal",
        content: "Technical Lead",
      },
      {
        imageSrc:
          varunbajlotra,
        title: "Varun Bajlotra",
        content: "Technical Lead",
      },
      {
        imageSrc:
          vikas,
        title: "Vikas",
        content: "Technical Lead",
      },
      {
        imageSrc:
          vaibhavvarshney,
        title: "Vaibhav Varshney",
        content: "Technical Lead",
      },
      {
        imageSrc:
          visheshjain,
        title: "Vishesh Jain",
        content: "Technical Lead",
      },
      {
        imageSrc:
          Vagish,
        title: "Vagish",
        content: "Technical Lead",
      },
      {
        imageSrc:
          aanchalbatra,
        title: "Aanchal Batra",
        content: "Frontend Director",
      },
      {
        imageSrc:
          shivanggupta,
        title: "Shivang Gupta",
        content: "General Coordinator and Treasury",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shivam",
        content: "General Coordinator and Treasury",
      },
      {
        imageSrc:
          abhishekmidha,
        title: "Abhishek Midha",
        content: "General Coordinator and Treasury",
      },
      {
        imageSrc:
          yashgandhi,
        title: "Yash",
        content: "General Coordinator and Treasury",
      },
      {
        imageSrc:
          aaryangupta,
        title: "Aaryan Gupta",
        content: "Research Lead",
      },
      {
        imageSrc:
          rachitsaksena,
        title: "Rachit Saksena",
        content: "Research Lead",
      },
      {
        imageSrc:
          ramanshgrover,
        title: "Ramansh Grover",
        content: "Research Lead",
      },
    ],

    CoHeads: getCoHeads(),
    Designers: getDesigners(),
    Developers: getDevelopers(),
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isnotMobile = useMediaQuery({ query: "(min-width: 641px)" });
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
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer
                    imageSrc={card.imageSrc}
                  ></CardImageContainer>
                  <CardText style={{ textAlign: "center" }}>
                    <CardTitle style={{cursor: "pointer"}}>{card.title}</CardTitle>
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
        aadityanarayansubedy,
      title: "Aaditya Narayan Subedy",
      content: "Co-Head",
    },
    {
      imageSrc:
        kushagrawadhwa,
      title: "Kushagra Wadhwa",
      content: "Co-Head",
    },
    {
      imageSrc:
        garvitgulati,
      title: "Garvit Gulati",
      content: "Co-Head",
    },
    // {
    //   imageSrc:
    //     riyadevvarshney,
    //   title: "Riya Dev Varshney",
    //   content: "Co-Head",
    // },
    {
      imageSrc:
        amoghjalan,
      title: "Amogh Jalan",
      content: "Co-Head",
    },
    {
      imageSrc:
        sameerahmed,
      title: "Sameer Ahmed",
      content: "Co-Head",
    },
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
    },
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
    },
  ];
  return cards;
};

export default Councils;
