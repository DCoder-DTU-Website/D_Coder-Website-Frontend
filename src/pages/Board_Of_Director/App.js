import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/ImageSlider";
import Footer from "components/footers/Footer";
import "./Bod.css";

function BoardOfDirectors() {
  const data =
    "With advancement in technology, comes more confusion regarding what skillset one should learn for industrial needs. The core roots of D_CODER, that lies in making people widen their horizons, exploring new technologies according to industrial demands, makes the society one of its kind. We, in industry, often witness talented employees finding it difficult to adjust with work while they are freshers due to lack of industrial technology knowledge hence their vision to meet industrial demands hold great potential and we are really glad that we can contribute to their vision through our industrial experience. D_CODER has achieved a lot in a short span of time with their hard work, will power and never ending dedication and there are still many more milestones to achieve. We extend our best wishes to all the pillars like team members who are working extremely hard to help society reach new heights, also we would like to congratulate D_CODER for its first ever newsletter! Best Wishes";
  return (
    <>
      <Hero
        title="Board of Directors"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1629386526/Background_jq65e7_acmw2q.jpg"
      />

      <div className="mainContainer">
        <h3 className="descText">{data}</h3>
      </div>
      <Footer />
    </>
  );
}

export default BoardOfDirectors;
