import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "helpers/library.js";
import logo from "images/recruitment_head.png";
import "./Hero.css";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 mb-8 bg-center bg-cover h-screen min-h-144`}
`;

const HeroContainer = tw.div`z-20 relative sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-row justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-4xl text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const splashScreen = (props) => {
  return (
    <Container
      style={{
        backgroundColor: "#1A202C",
        marginBottom: "2.25rem",
      }}
    >
      <HeroContainer>
        <NavBar />
        <Content>
          <Heading>
            We
            <br />
            Are
            <br />
            REC
            <br />
            RUI
            <br />
            TIN
            <br />
            G.
          </Heading>
          <img
            style={{ height: "80%", width: "auto" }}
            src={logo}
            className="logo_phone"
          />
        </Content>
      </HeroContainer>
    </Container>
  );
};

export default splashScreen;
