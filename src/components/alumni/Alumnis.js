import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import "./alumni.css";
import "aos/dist/aos.css";

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-full  lg:w-full sm:pr-10 md:pr-6 lg:pr-12 text-gray-400 bg-gray-900`;
// const Card = tw(
//   motion.a
// )`block max-w-xs mx-auto sm:max-w-none sm:mx-0 h-full flex flex-row items-center text-center`;
const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`flex-shrink-0 justify-center items-center w-72 h-72 border-4 border-blue-600 rounded-full mr-6 xl:w-80 xl:h-80 object-cover object-center mb-4`}
`;

const CardText = tw.div`p-12 text-justify text-gray-900`;
const CardTitle = tw.h5`-mx-4 text-sm md:w-48 xl:w-48 text-center font-semibold md:text-3xl text-xl md:text-3xl lg:text-3xl xl:w-96 xl:text-4xl text-white`;
const CardContent = tw.p`mt-1 text-justify text-sm font-medium text-xl text-gray-600 `;

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
          "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg",
        Name: "Daizy Mehta",
        Year: "2021",
        linkedin: "https://www.linkedin.com/in/daizy-mehta-473763149/",
        content:
          "Former president and founder of D_CODER DTU, Daizy Mehta is an extremely talented individual filled with zeal for perfection. Smart India Hackathon winner,Vistara Hackathon winner, DCB bank innovative carnival winner are a few gems of her accolades crown. She also served as a placement coordinator of the college for her batch. Currently, she is working as a software developer at Paytm.",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg",
        Name: "Aditya Kulraj",
        Year: "2021",
        linkedin: "https://www.linkedin.com/in/daizy-mehta-473763149/",
        content:
          "Aditya Kulraj is one of the gems that the D_CODER family has. He was the Co-founder of D_CODER and He was among the 2 Students who represented India in a 3-week long program at UNESCO. He served as a part-time UNESCO Youth Leader and is a Full-time Climate Change Activist. Code to school was his brainchild, and he successfully chased his dream and changed the lives of many underprivileged children. He was also featured in the Smart India Hackathon 2018 that was conducted by the Government of India. Former Research Intern at the National University of Singapore working on Web Scraping and Machine Learning projects. Former Deloitte India(Offices of The US) Intern. Currently, He is working as a Software Engineer at OPPO.",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg",
        Name: "Abhinav Thapper",
        Year: "2021",
        linkedin: "https://www.linkedin.com/in/daizy-mehta-473763149/",
        content:
          "Abhinav Thapper is dedicated, highly enthusiastic, and Ex-Vice President of D-Coder. Co-founder of Code to School, and took the initiative to lead a team of 25+ engineering students from different institutions, intending to expose students of govt. schools of over 10 schools across Delhi to Computer Science fundamentals. He also served as a volunteer at NSS. Former Coding Ninja Intern, Former Software engineer intern at Forethought Integrated Infotech Pvt. Ltd. Currently, He is working as a Software Engineer at Tata Health.",
      },
    ],
  },
}) => {
  const tabsKeys = Object.keys(tabs);

  return (
    <Container className="councilStyle" style={{ textAlign: "center" }}>
      <ContentWithPaddingXl>
        {tabsKeys.map((tabKey, index) => (
          <TabContent style={{ marginTop: "-100px" }}>
            {tabs[tabKey].map((card, index) => (
              <CardContainer
                key={index}
                style={{ marginLeft: "7%", marginRight: "7%" }}
              >
                <Card
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  reversed={index % 2 === 1}
                >
                  <CardImageContainer
                    imageSrc={card.imageSrc}
                  ></CardImageContainer>
                  <a href={card.linkedin} target="_blank" rel="noreferrer">
                    <CardText style={{ textAlign: "center" }}>
                      <CardTitle className={"Hover"}>
                        {card.Name} ( {card.Year} )
                      </CardTitle>
                      <CardContent>{card.content}</CardContent>
                    </CardText>
                  </a>
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
