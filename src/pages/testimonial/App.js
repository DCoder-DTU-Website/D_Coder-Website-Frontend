import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Navbar from "components/hero/MinNavbar";
import Footer from "../../components/footers/Footer";
import Testimonial from "./components/testimonial"
export default function App() {
  return (
    <div>
      <Navbar />
      <Testimonial/>
      <Footer />
    </div>
  );
}
