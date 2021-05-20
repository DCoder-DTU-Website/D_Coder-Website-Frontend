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
  tw`rounded-full md:w-1/2 lg:w-5/12 xl:w-96 flex-shrink-0 w-96 h-96 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-xl mx-4 sm:mx-8 md:mx-16 lg:mx-16 text-white`;
const Subtitle = tw.div`flex font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`flex text-3xl font-bold text-gray-900 text-blue-600`;
const Description = tw.p`mt-2 text-justify text-lg leading-loose`;

function FacultyCard({ count, title, desc, img, post }) {
  AOS.init();

  return (
    <Card reversed={count % 2 === 1} style={{}}>
      <Image imageSrc={img} style={{ borderRadius: "50%" }} />
      <Details>
        <Title>{title}</Title>
        <Subtitle>{post}</Subtitle>
        <Description>{desc}</Description>
      </Details>
    </Card>
  );
}

export default FacultyCard;
