import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import Bottom from "./Bottom";
import Gallery from "./GalPreview";
import "./Typing.scss";
import AboutSSM_1 from "./AboutSSM_1";
import AboutSSM_2 from "./AboutSSM_2";

const Container = tw.div`relative bg-gray-900`;

function SeniorsSeMulaquaat() {
  return (
    <>
      <Hero
        title="Seniors Se Mulaquaat"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621352426/zqoaxq1ufuodivfxkvlc.jpg"
      />
      <Container style={{ margin: "-35px" }}>
        <div>
          <AboutSSM_1 />
        </div>
        <div>
          <AboutSSM_2 />
        </div>
        <Bottom />
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}

export default SeniorsSeMulaquaat;
