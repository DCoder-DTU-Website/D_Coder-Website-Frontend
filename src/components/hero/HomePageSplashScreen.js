import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import NavBar from "helpers/library.js";
import { Link } from "react-scroll";
import "./title.css";
import "./HomePageSplash.css"

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black bg-cover opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
const BigHeading = styled.h1`
  ${tw`text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-blue-600 text-gray-100 hocus:bg-blue-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const splash = (props) => {
  return (
    <Container
      bgImage={props.bgImage}
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <OpacityOverlay />
      <HeroContainer>
        <NavBar />
        <Content>
          {props.bigHead ? (
            <BigHeading className = "Heading">{props.bigHead}</BigHeading>
          ) : (
            <Heading>
              {props.heading}
              <br />
              {props.subheading}
            </Heading>
          )}
          <Link to="ContactUs" smooth={true}>
            <PrimaryAction
              style={{ paddingTop: "8px" }}
              onClick={(e) => props.onClick()}
            >
              Get in Touch
            </PrimaryAction>
          </Link>
        </Content>
      </HeroContainer>
    </Container>
  );
};

export default splash;
