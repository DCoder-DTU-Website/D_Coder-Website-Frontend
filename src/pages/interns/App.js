import React, { useEffect } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Navbar from "components/hero/MinNavbar";
import Footer from "../../components/footers/Footer";
import Placements from "./Components/Interns";
export default function Testimonials() {
  useEffect(() => {
    console.log("came");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Placements />
      <Footer />
    </div>
  );
}
