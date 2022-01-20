import React, { useEffect } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import MinNavbar from "components/hero/MinNavbar";
import Footer from "components/footers/Footer";
import Form from "./components/Form";
import "./components/Form.css";

export default function RecruitmentForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "rgb(26,32,44)",
        margin: "0px -35px",
        padding: "0px 35px",
      }}
    >
      <MinNavbar className="Navbar" />
      <div className={"formStyling"}>
        <Form />
      </div>
      <Footer />
    </div>
  );
}
