import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import Form from "./components/Form";

export default function RecruitmentForm() {
  return (
    <div style={{ position: "relative" }}>
      <Hero
        title="🎊 Recruitment Time 🎊"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621525956/events_lekcvc.jpg"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "80px 0",
        }}
      >
        <Form />
      </div>
      <Footer />
    </div>
  );
}
