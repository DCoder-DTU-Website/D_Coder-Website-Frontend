import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import Hero from "components/hero/MinNavbar"
import GalPrev from "components/cards/GalPreview"
import AboutUs from "components/features/AboutUs"
import WhyDCoder from "components/features/WhyDCoder"
import Footer from "components/footers/Footer"
import Testimonials from "components/testimonials/HomePageReviews"
import ContactUs from "components/forms/HomePageContact"

export default function Events() {
  return (
  	<>
    <Hero onClick={e=>console.log(1)}/>
 	<AboutUs />
 	<WhyDCoder />
 	<GalPrev />
	<Testimonials/>
	<div id="ContactUs"><ContactUs /></div>
	<Footer />
	</>
  );
}

