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

const RecruitmentHome = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyJoinUs />
      <Video />
      <VisionMission />
      <ApplyNow />
    </div>
  );
};

export default RecruitmentHome;
