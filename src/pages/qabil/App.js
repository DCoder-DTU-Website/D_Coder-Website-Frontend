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
        bgImage="https://www.therahnuma.com/wp-content/uploads/2018/08/unsc_somalia.jpg"
      />
      <About />
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
