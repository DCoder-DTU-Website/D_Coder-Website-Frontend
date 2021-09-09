import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "helpers/library.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-secondary-900`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col `;

const MinNavbar = (props) => {
  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <NavBar />
      </HeroContainer>
    </Container>
  );
};

export default MinNavbar;
