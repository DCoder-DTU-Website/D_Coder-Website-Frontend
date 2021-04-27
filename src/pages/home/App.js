import React, { useState, useEffect } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/HomePageSplashScreen";
import GalPrev from "components/cards/GalPreview";
import AboutUs from "components/features/AboutUs";
import WhyDCoder from "components/features/WhyDCoder";
import Footer from "components/footers/Footer";
import Testimonials from "components/testimonials/HomePageReviews";
import ContactUs from "components/forms/HomePageContact";

export default function Home() {
  return (
    <>
      <Hero onClick={() => console.log()} />
      <AboutUs />
      <WhyDCoder />
      <GalPrev />
      <Testimonials />
      <div id="ContactUs">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
