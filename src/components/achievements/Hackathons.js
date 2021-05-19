import React, { useState } from "react";
import tw from "twin.macro";
import Card from "./HackathonsCard";

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Subheading = tw.h3`text-4xl mt-5 font-bold text-blue-600`;
const Content = tw.div`mt-16`;
const val = {
  upcomingEvents: [
    {
      id: 1,
      title: "Hacknagpur hackathon",
      description:
        "Our team went on to win big with the Hacknagpur hackathon conducted on December 30, 2020. The team of Riya Dev Varshney, Ridham Jain and Garvit Gulati secured the FIRST RUNNER UP among 800+ participating students all over the country, for their forward looking web app, BookMyVac that can be used to book vaccine slots and ease the vaccine distribution process.",
    },
    {
      id: 2,
      title: "ABHIGYAN Hackathon",
      description:
        "In the ABHIGYAN Hackathon conducted at SRM University on March 4, 2020, two out of four positions were won by our society teams. The team of Puneet Kumar Sehrawat, Sameer Ahmed, Vanshika Gupta and Karan Bajaj were awarded FIRST RUNNER UP for their innovative hack, MILKART - The milk delivery app. The team of Riya Dev Varshney, Ridham Jain and Garvit Gulati bagged a SPECIAL MENTION for their one of its kind web app, BOOK MY LAWYER to ease the process of legal matters by connecting the lawyers and potential clients on the platform.",
    },
  ],
};

const Hackathons = () => {
  const wins = val.upcomingEvents.map((evt, i) => (
    <Card key={i} count={i} title={evt.title} desc={evt.description} />
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
              marginTop: "20px",
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            <i>
              Last year was one of the roller coaster rides, with the lives of
              many people coming to a halt, still our teams looked for a
              positive perspective in the situation and with sheer will and
              dedication worked upon their skills and participated in various
              events and brought laurels home.
            </i>
          </p>
        </HeadingInfoContainer>
        <Content>{wins}</Content>
      </section>
    </div>
  );
};

export default Hackathons;
