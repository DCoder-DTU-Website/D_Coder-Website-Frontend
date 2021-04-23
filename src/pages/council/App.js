import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "../../components/hero/SplashScreenWithHeading";
import Councils from "../../components/council/Councils";
import Footer from "../../components/footers/Footer";

export default function Council() {
  return (
    <div>
      <Hero title="The Council" />
      <Councils />
      <Footer />
    </div>
  );
}
