import React, { useState } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import MinNavbar from "components/hero/MinNavbar";
import Footer from "components/footers/Footer";
import tw from "twin.macro";
import "./App.css";
import VideoContainer from "./components/VideoContainer";
import SideNav from "./components/SideNav/Sidenav";

import { BrowserRouter, Route } from "react-router-dom";

const BigContainer = tw.div`bg-gray-900`;
const Container = tw.div`relative bg-gray-900`; //bg-gray-900
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center text-white `; //text-white
const Content = tw.div`mt-8`;

export default function Lectures() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <BrowserRouter>
      <MinNavbar className="Navbar" />
      <BigContainer className="Lectures-root">
        <Container className="Lectures-sidenav-container">
          <SideNav navOpen={setIsNavOpen} />
        </Container>
        <Container className="Lectures-video-container">
          <section
            className={`Lectures-container-close ${
              isNavOpen && "Lectures-container-open"
            }`}
          >
            <SingleColumn>
              <HeadingInfoContainer>
                <HeadingTitle>Lectures</HeadingTitle>
              </HeadingInfoContainer>
              <Content>
                <Route
                  exact
                  path="/lectures/:topic/:subtopic"
                  component={VideoContainer}
                />
              </Content>
            </SingleColumn>
          </section>
        </Container>
      </BigContainer>
      {/* <div className="SideNav-container">
        <SideNav navOpen={setIsNavOpen} />
      </div>
      <Container className="Lectures-root">
        <section
          className={`Lectures-container-close ${
            isNavOpen && "Lectures-container-open"
          }`}
        >
          <SingleColumn>
            <HeadingInfoContainer>
              <HeadingTitle>Lectures</HeadingTitle>
            </HeadingInfoContainer>
            <Content>
              <Route
                exact
                path="/lectures/:topic/:subtopic"
                component={VideoContainer}
              />
            </Content>
          </SingleColumn>
        </section>
      </Container> */}
      <Footer />
    </BrowserRouter>
  );
}
