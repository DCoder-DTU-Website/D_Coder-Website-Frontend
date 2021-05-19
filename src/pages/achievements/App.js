import React from "react";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import Promotions from "components/achievements/Promotions";
import Hackathons from "components/achievements/Hackathons";
import "./App.css";

const App = () => {
  return (
    <div>
      <Hero
        title="COMPETITIONS AND ACHIEVEMENTS"
        bgImage="https://media.giphy.com/media/JUXtbHuixcZKeGJEro/giphy.gif"
      />
      <div style={{ textAlign: "center" }}>
        <p className="para">
          Continuing the legacy, last year too D_CODER teams participated in
          various competitions and won accolades for the society. Not only the
          members but even for our faculty advisor sir, the year bore many
          gifts.
        </p>
      </div>
      <Promotions />
      <Hackathons />
      <Footer />
    </div>
  );
};

export default App;
