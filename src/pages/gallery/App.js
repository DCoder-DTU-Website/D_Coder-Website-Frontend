import React, { useEffect } from "react";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";

import PhotoIndex from "components/PhotoGallery/photoindex";


export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="back">
      <div style={{ zIndex: "0" }}>
        <Hero
          title="A Glance At The Past"
          bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621434921/Gallery_umdqwi.jpg"
        />
      </div>
      <div
        style={{
          backgroundColor: "rgb(26,32,44)",
          margin: "-35px",
          zIndex: "0",
        }}
      >
        <PhotoIndex></PhotoIndex>
      </div>
      <Footer />
    </div>
  );
}
