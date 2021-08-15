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

import { BrowserView, MobileView, isMobile } from "react-device-detect";

const BigContainer = tw.div`bg-gray-900`;
const Container = tw.div`relative bg-gray-900`; //bg-gray-900
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Content = tw.div``;

export default function Lectures() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <>
      <MinNavbar className="Navbar" />
      <BrowserRouter>
        <BigContainer
          className={`Lectures-root && ${isMobile && `Lectures-root-mobile`}`}
        >
          <BrowserView>
            <Container className="Lectures-sidenav-container">
              <SideNav navOpen={setIsNavOpen} />
            </Container>
          </BrowserView>
          <MobileView className="Lectures-root-mobile-in">
            <Container className="Lectures-sidenav-container-mobile">
              <SideNav navOpen={setIsNavOpen} />
            </Container>
          </MobileView>
          <Container
            className={`Lectures-video-container ${
              isMobile && `Lectures-video-container-mobile`
            } `}
          >
            <section
              className={`Lectures-container-close ${
                isNavOpen && "Lectures-container-open"
              }`}
            >
              <SingleColumn className="Lectures-container-close-inside">
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
        <Footer />
      </BrowserRouter>
    </>
  );
}
