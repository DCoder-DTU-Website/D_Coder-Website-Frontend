import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/SplashScreen";
import GalPrev from "components/cards/GalPreview";
import Testimonials from "components/testimonials/HomePageReviews";
import EventPage from "events/EventPage";
import Footer from "components/footers/Footer";

export default function Events() {
  return (
    <>
      <Hero onClick={(e) => console.log(1)} />
      <EventPage />
      <Footer />
    </>
  );
}
