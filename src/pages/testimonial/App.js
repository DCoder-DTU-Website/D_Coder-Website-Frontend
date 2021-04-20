import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Navbar from "components/hero/MinNavbar";
import Hero from "../../components/hero/SplashScreenWithHeading";
import GalPrev from "components/cards/GalPreview";
import Testimonials from "components/testimonials/HomePageReviews";
import Alumnis from "../../components/alumni/Alumnis";
import Footer from "../../components/footers/Footer";
import Testimonial from "./components/testimonial"
export default function Alumni() {
  return (
    <div>
      <Navbar />
      <Testimonial>
      <Footer />
    </div>
  );
}
