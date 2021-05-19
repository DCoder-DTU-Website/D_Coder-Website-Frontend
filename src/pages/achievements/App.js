import React from "react";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import Promotions from "components/achievements/Promotions";
import Hackathons from "components/achievements/Hackathons";


const App = () => {
  return (
    <div>
      <Hero
        title="Achievements"
        bgImage="https://media.giphy.com/media/JUXtbHuixcZKeGJEro/giphy.gif"
      />
      <Promotions />
      <Hackathons/>
      <Footer />
    </div>
  );
};

export default App;
