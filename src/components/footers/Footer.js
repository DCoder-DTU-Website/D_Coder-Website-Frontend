import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logo.png";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto pb-10 pt-2`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <Divider />
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>D_CODER</LogoText>
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink
              target="_blank"
              href="https://www.instagram.com/d_coder_dtu/"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.youtube.com/channel/UCz0Bs3AXaa5ccEJBsLxyXzg"
            >
              <YoutubeIcon />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/company/dcoder/mycompany/"
            >
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
        </Row>
      </Content>
    </Container>
  );
};

export default Footer;
