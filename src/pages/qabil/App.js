import React from "react";
import Footer from "components/footers/Footer";
import Hero from "components/missionQabil/Hero";
import About from "components/missionQabil/About";
import Bottom from "components/missionQabil/Bottom";

const App = () => {
  return (
    <div>
      <Hero
        title="Mission Qabil"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621525669/mq_df5eih.jpg"
      />
      <About />
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
