import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import MinNavbar from "components/hero/MinNavbar";
import Footer from "components/footers/Footer";
import tw from "twin.macro";
import "./App.css";
import YoutubeVideo from "./components/YoutubeVideo";
import VideoContainer from "./components/VideoContainer";
import SideNav from "./components/SideNav";

const Container = tw.div`relative bg-gray-900`; //bg-gray-900
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center text-white`; //text-white
const Subheading = tw.h3`text-3xl mt-5 font-bold text-blue-600`;
const Content = tw.div`mt-16`;

export default function Lectures() {
  return (
    <>
      <MinNavbar className="Navbar" />
      <SideNav />
      <Container className="Lectures-root">
        <SingleColumn>
          <HeadingInfoContainer>
            <HeadingTitle>Lectures</HeadingTitle>
            <Subheading>Watch and Learn</Subheading>
          </HeadingInfoContainer>
          <Content>
            <VideoContainer />
          </Content>
        </SingleColumn>
      </Container>
      <Footer />
    </>
  );
}
