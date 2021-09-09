import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Typewriter from "typewriter-effect";
import "./Founder.css";
import Footer from "components/footers/Footer";

function Founder() {
  const data = `As an engineering student, I was fascinated by the idea to implement technology to solve
    real-world problems, this motivated me to build a team and take part in hackathons. After
    winning multiple hackathons, I started expanding the team, and soon that small team
    became a community of 250+ college students, 1500+ school students, and 30+ industry
    mentors.
    D_CODER is the family that gave me the power to bring change. Together we were able to
    pioneer Code To School, a National skill development to teach basic coding in schools which
    was later established in 10+ Schools. We also founded Mission Qabil, an initiative to train
    differently-abled students for technical placements. Currently the initiative is live with 100+
    Differently Abled Students, 30+ student Mentors and 15+ Industry Mentors.
    Today D_CODER is ruling with its presence in all possible domains be it blog writing,
    youtube content creation, or project making. Many of our team members have got their
    dream jobs under society’s guidance and whenever I hear about their achievements, my
    heart becomes full of pride while my eyes become emotional as I witness my dream vision
    coming to life. Even while I sit to pen this down, I feel nostalgic how far we as a team have
    come, the journey was difficult but was worth it all, still, there are miles to go and I trust all
    my juniors that they will continue the legacy that we created together for years to come and
    will shine brighter and brighter !!!"`;
  return (
    <>
      <Hero
        title="Founder"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621440906/Chairperson_qhwx4s.jpg"
      />
      <div className="mainContainer">
        <img
          src="https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg"
          alt=""
          className="daizy"
        />
        <h2 className="titleText">Daizy Mehta</h2>
        <h3 className="descText">{data}</h3>
      </div>
      <Footer />
    </>
  );
}

export default Founder;
