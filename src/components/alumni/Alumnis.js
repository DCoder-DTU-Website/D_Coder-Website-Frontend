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
import akk from "images/akk.jfif";
// import abt from "images/abt.jfif";
import abt from "images/abhinav.jpeg";
import dm from "images/dm.jpeg";
import ar from "images/Ashutosh Raturi.jpg";
import aditya from "images/aditya.jpeg";
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
  ${tw`flex-shrink-0 justify-center items-center bg-no-repeat w-96 h-96 border-4 border-blue-600 rounded-full mr-6 xl:w-80 xl:h-80  mb-4`}
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
        imageSrc: dm,
        // "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg",
        Name: "Daizy Mehta",
        Year: "2020",
        linkedin: "https://www.linkedin.com/in/daizy-mehta-473763149/",
        content:
          "Former president and founder of D_CODER, Daizy Mehta is an extremely talented individual filled with zeal for perfection. Smart India Hackathon winner, Vistara Hackathon winner, DCB bank innovative carnival winner are a few gems of her accolades crown. She also served as a placement coordinator of the college for her batch. Currently, she is working as a software developer at Paytm.",
      },
      {
        imageSrc: aditya,
        // "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg",

        Name: "Aditya Kulraj",
        Year: "2020",
        linkedin: "https://www.linkedin.com/in/adityakulrajdtu/",
        content:
          "Aditya Kulraj is one of the gems that the D_CODER family has. He was the Co-founder of D_CODER and Founder of Code To School. He was Smart India Hackathon 2018 winner. He was among the 2 Students who represented India in a 3-week long program at UNESCO. He served as a part-time UNESCO Youth Leader and is a Full-time Climate Change Activist. Former Research Intern at the National University of Singapore working on Web Scraping and Machine Learning projects.Former Deloitte India(Offices of The US) Intern.Currently, He is working as a Software Engineer at OPPO.",
      },
      {
        imageSrc: abt,
        // "blob:https://web.whatsapp.com/c65569f6-b603-422e-b89a-b8dc5256302e",
        // "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg",
        Name: "Abhinav Thapper",
        Year: "2020",
        linkedin: "https://www.linkedin.com/in/abhinav-thapper/",
        content:
          "Abhinav Thapper is dedicated, highly enthusiastic, and Ex-Vice President of D_CODER. Co-founder of Code to School, and took the initiative to lead a team of 25+ engineering students from different institutions, intending to expose students of govt. schools of over 10 schools across Delhi to Computer Science fundamentals. He also served as a volunteer at NSS. Former Coding Ninja Intern, Former Software engineer intern at Forethought Integrated Infotech Pvt. Ltd. Currently, He is working as a Software Engineer at Tata Health.",
      },
      {
        imageSrc: ar,
        // "blob:https://web.whatsapp.com/c65569f6-b603-422e-b89a-b8dc5256302e",
        // "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg",
        Name: "Ashutosh Raturi",
        Year: "2020",
        linkedin: "https://www.linkedin.com/in/ashutosh-raturi-939745136/",
        content:
          "Ashutosh Raturi, a very bright-minded and enthusiastic student, and is also an Associate Director of D_CODER. He was a former Intern at Impact Webcom Technorite Pvt. Ltd. He was also an intern at Evelyn Learning Systems Pvt. Ltd. and He was an SDE Intern at UnitedHealth Group and currently placed as a Software Engineer at the same place.",
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
                    <CardText style={{ textAlign: "center" }}>
                      <a href={card.linkedin} target="_blank" rel="noreferrer">
                          <CardTitle
                            className={"Hover"}
                            style={{
                              fontSize: "2.5rem",
                              width: "45vw",
                              textAlign: "center",
                            }}
                          >
                            {card.Name}({card.Year})
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

export default Alumni;
