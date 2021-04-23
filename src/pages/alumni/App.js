import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Navbar from "components/hero/MinNavbar";
import Alumnis from "../../components/alumni/Alumnis";
import Footer from "../../components/footers/Footer";

export default function Alumni() {
  return (
    <div>
      <Navbar />
      <Alumnis />
      <Footer />
    </div>
  );
}
