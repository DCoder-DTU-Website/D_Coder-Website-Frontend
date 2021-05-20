import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
const Card = styled.div((props) => [
  tw`md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full md:w-1/2 lg:w-6/12 xl:w-96 flex-shrink-0 w-96 h-96 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 text-justify md:mt-0 md:max-w-xl justify-center text-3xl mx-4 sm:mx-8 md:mx-16 lg:mx-16 text-white`;
const Subtitle = tw.div`flex font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`flex my-4 justify-center text-6xl font-bold text-gray-900 text-blue-600`;
const Description = tw.p`mt-2 leading-loose`;

function FacultyCard({ count, title, desc, img, post }) {
  AOS.init();

  return (
    <Card
      reversed={count % 2 === 1}
      style={({ display: "flex" }, { flexDirection: "column" })}
    >
      <Image imageSrc={img} />
      <Details style={{ marginTop: "20px" }}>
        <Title>{title}</Title>
        <Description style={{ width: "85vw", marginLeft: "-55%" }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
                .start();
            }}
            style={{ width: "800px" }}
          />
        </Description>
      </Details>
    </Card>
  );
}

export default FacultyCard;
