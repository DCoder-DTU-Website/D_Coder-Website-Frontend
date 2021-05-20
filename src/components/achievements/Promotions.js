import React from "react";
import PromotionCard from "./PromotionCard";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";

const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-4`;
const Content = tw.div`my-16`;

const Promotions = () => {
  const data =
    "Our Faculty Advisor, Dr. Rahul Katarya with his sheer will, hard work and dedication is promoted as Professor, Department of Computer Science and Engineering. He has achieved this amazing feat at an early age making him the youngest Professor in the department. We, D_CODER extend our heartiest congratulations to Prof. Katarya. He has always motivated our team and guided us to reach the highest of the highs. We feel really honoured to be working under his excellence and hope to learn more and more from him in the future! ";

  return (
    <div>
      <Container>
        <SingleColumn>
          <Content>
            <PromotionCard
              count={1}
              desc={data}
              img={
                "https://res.cloudinary.com/dcoderdtu/image/upload/c_fill,h_135,w_135,y_60/v1621517845/rahul_sir_jqgtyb.jpg"
              }
              title="Rahul Sir's Promotion"
              key={1}
            />
          </Content>
        </SingleColumn>
      </Container>
    </div>
  );
};

export default Promotions;
