import React from "react";
import Navbar from "../../components/hero/MinNavbar";
import {
  Hero,
  WhatWeDo,
  WhyJoinUs,
  Video,
  VisionMission,
  ApplyNow,
} from "./components";
import "./index.css";
import Footer from "../../components/footers/Footer";

const RecruitmentHome = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyJoinUs />
      {/* <Video /> */}
      <VisionMission />
      <ApplyNow />
      <Footer />
    </div>
  );
};

export default RecruitmentHome;
