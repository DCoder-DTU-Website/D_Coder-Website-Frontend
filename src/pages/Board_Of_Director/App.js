import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/ImageSlider";
import Footer from "components/footers/Footer";
import FacultyCard from "./FacultyCard";
const Container = tw.div`relative bg-gray-900`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-4`;
const Content = tw.div`my-16`;

function BoardOfDirectors() {
  const data =
    "With advancement in technology, comes more confusion regarding what skillset one should learn for industrial needs. The core roots of D_CODER, that lies in making people widen their horizons, exploring new technologies according to industrial demands, makes the society one of its kind. We, in industry, often witness talented employees finding it difficult to adjust with work while they are freshers due to lack of industrial technology knowledge hence their vision to meet industrial demands hold great potential and we are really glad that we can contribute to their vision through our industrial experience. D_CODER has achieved a lot in a short span of time with their hard work, will power and never ending dedication and there are still many more milestones to achieve. We extend our best wishes to all the pillars like team members who are working extremely hard to help society reach new heights, also we would like to congratulate D_CODER for its first ever newsletter! Best Wishes";
  return (
    <>
      <Hero
        title="Board of Directors"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1629386526/Background_jq65e7_acmw2q.jpg"
      />

      <Container style={{ margin: "-35px" }}>
        <SingleColumn>
          <Content style={{ left: "15rem" }}>
            <FacultyCard
              count={1}
              desc={data}
              post={"Lt Governer of Delhi"}
              title="Shri Anil Baijal"
              key={1}
            />
          </Content>
        </SingleColumn>
      </Container>
      <Footer />
    </>
  );
}

export default BoardOfDirectors;
