import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AOS from "aos";
import "aos/dist/aos.css";
const Card = styled.div((props) => [
  tw`md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-full md:w-1/2 lg:w-6/12 xl:w-96 flex-shrink-0 w-48 h-48 md:w-96 md:h-96 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 text-justify md:mt-0 md:max-w-xl justify-center text-xl mx-4 sm:mx-8 md:mx-16 lg:mx-16 text-white`;
const Title = tw.h4`flex my-4 justify-center text-4xl font-bold text-gray-900 text-blue-600`;
const Description = tw.p`mt-2 leading-loose`;

function FacultyCard({ count, title, desc, img, post }) {
  AOS.init();

  return (
    <Card
      reversed={count % 2 === 1}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image imageSrc={img} />
      <Details
        style={{
          marginLeft: "0px!important",
          marginRight: "0px!important",
          marginTop: "20px",
          maxWidth: "4000px",
          textAlign:"center"
        }}
      >
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </Details>
    </Card>
  );
}

export default FacultyCard;
