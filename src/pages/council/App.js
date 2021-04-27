import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "../../components/hero/SplashScreenWithHeading";
import Councils from "../../components/council/Councils";
import Footer from "../../components/footers/Footer";

export default function Council() {
  return (
    <div>
      <Hero
        title="The Council"
        bgImage="https://www.therahnuma.com/wp-content/uploads/2018/08/unsc_somalia.jpg"
      />
      <Councils />
      <Footer />
    </div>
  );
}
