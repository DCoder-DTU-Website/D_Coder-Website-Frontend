import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AOS from "aos";
import "aos/dist/aos.css";
// import Typewriter from "typewriter-effect";
const Card = styled.div((props) => [
  tw`md:flex justify-center items-center -mx-48`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-96  bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-xl mx-3 sm:mx-8 text-4xl md:mx-16 lg:mx-16 text-white`;
const Description = tw.p`mt-2 text-xl text-justify -mx-32 justify-center leading-loose items-center`;
// const Description1 = tw.Typewriter`mt-2 -mx-32 justify-center text-sm text-xl leading-loose items-center`;
function FacultyCard({ count, title, desc, img, post }) {
  AOS.init();

  return (
    <Card reversed={count % 2 === 1}>
      <Details style={({ textAlign: "center" }, { width: "800px" },{right:"200px"})}>
        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(desc).start();
          }}
        /> */}
        <Description>{desc}</Description>
      </Details>
    </Card>
  );
}

export default FacultyCard;
