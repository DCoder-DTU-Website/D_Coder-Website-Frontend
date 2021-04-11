import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import "./EvtCard.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-72 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-xl mx-4 sm:mx-8 md:mx-4 lg:mx-8 text-white`; // text-white
const Subtitle = tw.div`flex font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`flex text-3xl font-bold text-gray-900 text-blue-600`; // text-white
const Description = tw.p`mt-2 text-sm leading-loose`;

function EvtCard({ count, title, desc, img, schedule }) {
  AOS.init();
  return (
    <Card
      className="EvtCard-root"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      reversed={count % 2 === 1}
    >
      <Image className="EvtCard-img" imageSrc={img} />
      <Details>
        <Title>{title}</Title>
        <Subtitle>
          {schedule.startDate}-{schedule.endDate}
        </Subtitle>

        <Description>{desc}</Description>
      </Details>
    </Card>
  );
}

export default EvtCard;
