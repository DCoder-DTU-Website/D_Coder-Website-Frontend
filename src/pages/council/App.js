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
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621584962/Council-min_gqyqgq.jpg"
      />
      <script type="text/javascript" src="https://form.jotform.com/jsform/211292219446454"></script>
      <Councils />
      <Footer />
    </div>
  );
}
