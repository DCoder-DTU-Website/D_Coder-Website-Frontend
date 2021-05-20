import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import FacultyCard from "./FacultyCard";
const Container = tw.div`relative bg-gray-900`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-4`;
const Content = tw.div`my-16`;

function Chairman() {
  const data =
    "I founded D_CODER back in 2017 during the initial days of my second year at Delhi Technological University as a small initiative. I and my friend Aditya Kulraj started D_CODER to create awareness about hackathons and various opportunities available in the domain. We aimed to create a community where passionate learners come together to create magic with their code. And today this small initiative has turned into one of the biggest full-fledged technical societies of the college with 250+ active members. While the society started with some basic awareness and guidance initiatives, today D_CODER is ruling with its presence in all possible domains be it blog writing, youtube content creation, or project making. Many of our team members have got their dream jobs under society’s guidance and whenever I hear about their achievements, my heart becomes full of pride while my eyes become emotional as I witness my dream vision coming to life. All this would never be possible without a solid rock-hard team that is working hard day and night behind the camera to take society to the highest of the high. While I sit to pen this down, I feel nostalgic how far we as a team have come, the journey was difficult but was worth it all, still, there are miles to go and I trust all my juniors that they will continue the legacy that we created together for years to come and will shine brighter and brighter !!!";
  return (
    <>
      <Hero
        title="Chairman"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621440906/Chairperson_qhwx4s.jpg"
      />
      <Container style={{ margin: "-35px" }}>
        <SingleColumn>
          <Content>
            <FacultyCard
              count={1}
              desc={data}
              key={1}
              img={
                "https://res.cloudinary.com/dcoderdtu/image/upload/v1621271944/daizy_qroggh.jpg"
              }
              title="Daizy Mehta"
            />
          </Content>
        </SingleColumn>
      </Container>
      <Footer />
    </>
  );
}

export default Chairman;
