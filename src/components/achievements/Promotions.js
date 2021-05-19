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
    "Sh. Anil Baijal joined the Indian Administrative  Services (IAS) in 1969. In a long  career spanning over 37 years";

  return (
    <div>
      <Container>
        <SingleColumn>
          <Content>
            <PromotionCard
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
        </SingleColumn>
      </Container>
    </div>
  );
};

export default Promotions;
