import React from "react";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";

import PhotoIndex from "components/PhotoGallery/photoindex";

import { BrowserRouter as Router } from "react-router-dom";

export default function Gallery() {
  return (
    <Router>
      <div className="back">
        <div style={{ zIndex: "0" }}>
          <Hero title="A Glance At The Past" />
        </div>
        <div
          style={{
            backgroundColor: "rgb(26,32,44)",
            margin: "-35px",
          }}
        >
          <PhotoIndex></PhotoIndex>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
