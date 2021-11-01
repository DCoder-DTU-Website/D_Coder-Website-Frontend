import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/recruitment/Hero";
import About from "components/recruitment/About";
import Video from "components/recruitment/Video";
import Features from "components/recruitment/Features";
import Footer from "components/footers/BlueFooter";

export default function RecruitmentForm() {
  return (
    <div style={{ position: "relative" }}>
      <Hero
        title="🎊 Recruitment Time 🎊"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621525956/events_lekcvc.jpg"
      />
      <About />
      <Video />
      <Features />
      <Footer />
    </div>
  );
}
