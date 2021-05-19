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
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621434874/Screenshot_505_x4so88.png"
      />
      <About />
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
