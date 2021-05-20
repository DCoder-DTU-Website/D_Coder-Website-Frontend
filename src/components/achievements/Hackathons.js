import React, { useState } from "react";
import tw from "twin.macro";
import Card from "./HackathonsCard";

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Subheading = tw.h3`text-6xl mt-5 font-bold text-blue-600`;
const Content = tw.div`mt-16`;
const val = {
  upcomingEvents: [
    {
      id: 1,
      title: "HackNagpur Hackathon",
      description:
        "Our team went on to win big with the HackNagpur hackathon conducted on December 30, 2020. The team of Riya Dev Varshney, Ridham Jain and Garvit Gulati secured the FIRST RUNNER UP among 800+ participating students all over the country, for their forward looking web app, BookMyVac that can be used to book vaccine slots and ease the vaccine distribution process.",
      img: "https://res.cloudinary.com/delhi-technological-university/image/upload/v1621427455/hacknagpur_azb2i2.jpg",
    },
    {
      id: 2,
      title: "ABHIGYAN Hackathon",
      description:
        "In the ABHIGYAN Hackathon conducted at SRM University on March 4, 2020, two out of four positions were won by our society teams. The team of Puneet Kumar Sehrawat, Sameer Ahmed, Vanshika Gupta and Karan Bajaj were awarded FIRST RUNNER UP for their innovative hack, MILKART - The milk delivery app. The team of Riya Dev Varshney, Ridham Jain and Garvit Gulati bagged a SPECIAL MENTION for their one of its kind web app, BOOK MY LAWYER to ease the process of legal matters by connecting the lawyers and potential clients on the platform.",
      img: "https://res.cloudinary.com/delhi-technological-university/image/upload/v1621427414/abhigyan_qlxung.jpg",
    },
  ],
};

const Hackathons = () => {
  const wins = val.upcomingEvents.map((evt, i) => (
    <Card
      key={i}
      count={i}
      title={evt.title}
      desc={evt.description}
      img={evt.img}
    />
  ));

  return (
    <div>
      <section>
        <HeadingInfoContainer>
          <Subheading>Hackathons Winners</Subheading>
          <p
            style={{
              color: "white",
              width: "90%",
              marginTop: "25px",
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
            className="para"
          >
            Last year was one of the roller coaster rides, with the lives of
            many people coming to a halt, still our teams looked for a positive
            perspective in the situation and with sheer will and dedication
            worked upon their skills and participated in various events and
            brought laurels home.
          </p>
        </HeadingInfoContainer>
        <Content>{wins}</Content>
      </section>
    </div>
  );
};

export default Hackathons;
