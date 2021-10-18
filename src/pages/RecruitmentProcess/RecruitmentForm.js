import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import MinNavbar from "components/hero/MinNavbar";
import Footer from "components/footers/Footer";
import Form from "./components/Form";
import "./components/Form.css";

export default function RecruitmentForm() {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "rgb(26,32,44)",
      }}
    >
      {/* <Hero /> */}
      <MinNavbar className="Navbar" />
      <div
        style={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // margin: "-75px -29px 40px -29px",
            // backgroundColor: "rgb(26,32,44)",
          }
        }
        className={"formStyling"}
      >
        <Form />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
