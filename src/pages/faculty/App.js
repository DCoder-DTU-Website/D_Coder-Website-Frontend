import React from "react";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import FacultyCard from "./FacultyCard";
const Container = tw.div`relative bg-gray-900`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-4`;
const Content = tw.div`my-16`;

function Founder() {
  const data = `We at D_CODER bridge the gap between college students and the industry through our
  efforts. We do projects, research, collaborate with organisations and research labs to
  contribute to new technology and innovation.
  D_CODER (CALIBRE) has published 20+ research papers in the previous year, with the
  focus of a significant number of them upon improving the feasibility during this deadly
  pandemic via advanced Machine Learning models. This year, we aim to increase this
  number even further by applying technologies like big data to benefit humanity.
  Learning is a lifelong journey. Yet, many of us still think learning happens only through
  academic training. Formal education is still an essential part of the journey, but learning goes
  beyond the comfort of school and university. I have always encouraged all the members to
  work hard in any scenario, learn as much as possible, and benefit from this fantastic
  community of seniors you all are blessed with.
  D_CODER has grown exponentially over the years, and I’m proud of all the members and
  everything they have achieved. It gives me immense pleasure to be the faculty advisor of
  such intelligent young minds, and I wish the entire team the best of luck in all their future
  endeavours`;
  return (
    <>
      <Hero
        title="Faculty"
        bgImage="https://res.cloudinary.com/dcoderdtu/image/upload/v1621525804/faculty_sggpms.jpg"
      />
      <Container style={{ margin: "-35px" }}>
        <SingleColumn>
          <Content>
            <FacultyCard
              count={1}
              desc={data}
              key={1}
              img={
                "https://res.cloudinary.com/dcoderdtu/image/upload/v1621625681/rahul_sir_jqgtyb_kxpatk.jpg"
              }
              title="Prof. Rahul Katarya"
              delay={10}
            />
          </Content>
        </SingleColumn>
      </Container>
      <Footer />
    </>
  );
}

export default Founder;
