import React from "react"
// import "App.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/MinNavbar"
import Footer from "components/footers/Footer"
import CoverFlow from "components/Gallery/coverFlow"
import GalPrev from "components/cards/GalPreview"
import Testimonials from "components/testimonials/HomePageReviews"

export default function Council() {
  return (
    <div>
      <Hero />
      <div style = {{
        width:"100%",
        height:"100s%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
        }}>
        <CoverFlow />
      </div>
      <Footer />
    </div>
  );
}

