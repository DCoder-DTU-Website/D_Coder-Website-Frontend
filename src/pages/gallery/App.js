import React, { useEffect } from "react";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";

import PhotoIndex from "components/PhotoGallery/photoindex";

import { BrowserRouter as Router } from "react-router-dom";

export default function Gallery() {
  useEffect(() => {
    console.log("came");
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="back">
        <div style={{ zIndex: "0" }}>
          <Hero
            title="A Glance At The Past"
            bgImage="https://images.unsplash.com/photo-1565799515768-2dcfd834625c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1092&q=80"
          />
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
