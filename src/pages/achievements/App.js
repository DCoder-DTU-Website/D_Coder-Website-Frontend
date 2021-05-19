import React from "react";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import Promotions from "components/achievements/Promotions";
import Hackathons from "components/achievements/Hackathons";

const App = () => {
  return (
    <div>
      <Hero
        title="COMPETITIONS AND ACHIEVEMENTS"
        bgImage="https://media.giphy.com/media/JUXtbHuixcZKeGJEro/giphy.gif"
      />
      <p
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "20px",
          display: "flex",
          fontWeight: "bolder",
          fontSize: "30px",
        }}
      >
        <i>
          Continuing the legacy, last year too D_CODER teams participated in
          various competitions and won accolades for the society. Not only the
          members but even for our faculty advisor sir, the year bore many
          gifts.
        </i>
      </p>
      <Promotions />
      <Hackathons />
      <Footer />
    </div>
  );
};

export default App;
