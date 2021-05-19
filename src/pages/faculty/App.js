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

function Faculty() {
  const data =
    "Sh. Anil Baijal joined the Indian Administrative  Services (IAS) in 1969. In a long  career spanning over 37 years, Mr. Baijal held several eminent positions. He served as  Union Home  Secretary, Secretary, Urban Development, GOI, Vice-Chairman of Delhi  Development Authority, Chief Secretary of Andaman & Nicobar Islands,  Additional Secretary in the Ministry of Information and Broadcasting and Joint  Secretary in the Ministry of Civil Aviation, Chairman and MD of Indian  Airlines, CEO of Prasar Bharati, Development Commissioner of Goa, Commissioner  (Sales Tax and Excise) of Delhi, Counsellor In-charge of the Indian Aid Programme in Nepal, Embassy of India, Kathmandu among other positions. He was responsible for the introduction of DD Bharti. He also served as a Member of the Advisory Group for Integrated Development of Power, Coal, and Renewable Energy chaired by Sh. S.P Prabhu, currently Minister of Railways. He was Chairman of  a High Level Committee on implementation of Corporate Social Responsibility in  2016. He holds Master's  Degree in Arts from the University of Allahabad and the University of East  Anglia. Shri Anil Baijal took over as the 21st Lt. Governor, Government of N.C.T. of Delhi on 31st December,  2016.";
  return (
    <>
      <Hero
        title="Faculty"
        bgImage="https://media.giphy.com/media/JUXtbHuixcZKeGJEro/giphy.gif"
      />
      <Container style={{ margin: "-35px" }}>
        <SingleColumn>
          <Content>
            <FacultyCard
              count={1}
              desc={data}
              img={
                "http://www.dtu.ac.in/Web/Administrations/Images/Chancellor.jpg"
              }
              post={"Lt Governer of Delhi"}
              title="Shri Anil Baijal"
              key={1}
            />
          </Content>
          <Content>
            <FacultyCard
              count={2}
              desc={data}
              img={
                "http://www.dtu.ac.in/Web/Administrations/Images/Chancellor.jpg"
              }
              post={"Lt Governer of Delhi"}
              title="Shri Anil Baijal"
              key={2}
            />
          </Content>
          <Content>
            <FacultyCard
              count={3}
              desc={data}
              img={
                "http://www.dtu.ac.in/Web/Administrations/Images/Chancellor.jpg"
              }
              post={"Lt Governer of Delhi"}
              title="Shri Anil Baijal"
              key={3}
            />
          </Content>
        </SingleColumn>
      </Container>
      <Footer />
    </>
  );
}

export default Faculty;
