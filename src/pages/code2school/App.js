import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import Bottom from "./Bottom";
import Gallery from "./GalPreview";
import "./Typing.scss";
import AboutC2S from "./AboutC2S";

const Container = tw.div`relative bg-gray-900`;

function CodeToSchool() {
  return (
    <>
      <Hero
        title="Code To School"
        bgImage="https://media.giphy.com/media/JUXtbHuixcZKeGJEro/giphy.gif"
      />
      <Container style={{ margin: "-35px" }}>
        <div>
          <AboutC2S />
        </div>
        <Bottom />
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}

export default CodeToSchool;
