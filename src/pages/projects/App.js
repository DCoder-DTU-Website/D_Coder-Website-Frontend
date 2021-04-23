import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Projects from "components/features/project";
import Navbar from "components/hero/MinNavbar";
import Footer from "components/footers/Footer";

export default function Project() {
  return (
    <div>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
