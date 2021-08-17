import React from "react";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "./Hero";
import Footer from "components/footers/Footer";
import Bottom from "./Bottom";
import Gallery from "./GalPreview";
import "./Typing.scss";
import AboutSSM1 from "./AboutSSM_1";
import AboutSSM2 from "./AboutSSM_2";

const Container = tw.div`relative bg-gray-900`;

function SeniorsSeMulaquaat() {
  return (
    <>
      <Hero
        title="Seniors Se Mulaquaat"
        bgImage="https://doc-0s-90-docs.googleusercontent.com/docs/securesc/mhbft6p0oe8cd39chofjlo4kgg3g8ulu/93ijv8tllns9tlj9l2frkuuac0of4hqh/1621602525000/05284376294728761865/07086074736746004626/1PwotjuAFtsf7w_eEDhDAKOQ0nCRaEV-F?e=view&authuser=0&nonce=1jd48ppbg1q2u&user=07086074736746004626&hash=mde3bjov4l0oqtnjpkjg3qhhv6ic1pki"
      />
      <Container style={{ margin: "-35px" }}>
        <div>
          <AboutSSM1 />
        </div>
        <div>
          <AboutSSM2 />
        </div>
        <Bottom />
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}

export default SeniorsSeMulaquaat;
