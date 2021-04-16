import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import AOS from "aos";
import "aos/dist/aos.css";

import "./WinnerCard.css";

const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded-full`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-blue-600`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-white`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-blue-600 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

function WinnerCard({ evt, name, img, pos, links }) {
  AOS.init();
  return (
    <Card data-aos="zoom-in" className="WinnerCard-root">
      <div className="container">
        <CardImage imageSrc={img} className="WinnerCard-img" />
        <div className="middle">
          <div className="text">{name}</div>
        </div>
      </div>
      <CardContent>
        <span className="position">{pos}</span>
        <span className="name">{evt}</span>
        <CardLinks>
          {links.map((link, linkIndex) => (
            <a key={linkIndex} className="link" href={link.url}>
              <link.icon className="icon" />
            </a>
          ))}
        </CardLinks>
      </CardContent>
    </Card>
  );
}

export default WinnerCard;
