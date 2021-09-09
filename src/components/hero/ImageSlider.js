import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "helpers/library.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 mb-8 bg-center bg-cover h-screen min-h-144`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const splashScreen = (props) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${props.bgImage})`,
        marginBottom: "2.25rem",
      }}
    >
      <OpacityOverlay />
      <HeroContainer>
        <NavBar />
        <Content>
          <Heading className="dcoderTitle">{props.title}</Heading>
        </Content>
      </HeroContainer>
    </Container>
  );
};

export default splashScreen;
