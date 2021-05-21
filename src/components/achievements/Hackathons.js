import React, { useState } from "react";
import tw from "twin.macro";
import Card from "./HackathonsCard";
import "./Hackathons.css";

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Subheading = tw.h3`text-6xl mt-5 font-bold text-blue-600`;
const Content = tw.div`mt-16`;
const val = {
  upcomingEvents: [
    {
      id: 1,
      title: "HackNagpur Hackathon",
      description: (
        <div>
          Our team went on to win big with the HackNagpur hackathon conducted on
          December 30, 2020. The team of{" "}
          <a
            href="https://www.linkedin.com/in/riya-dev-varshney-361304197/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Riya Dev Varshney
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/ridham-jain-460327197/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Ridham Jain
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/garvit-gulati-700082193/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Garvit Gulati
          </a>{" "}
          secured the FIRST RUNNER UP among 800+ participating students all over
          the country, for their forward looking web app, BookMyVac that can be
          used to book vaccine slots and ease the vaccine distribution process.
        </div>
      ),
      img: "https://res.cloudinary.com/delhi-technological-university/image/upload/v1621427455/hacknagpur_azb2i2.jpg",
    },
    {
      id: 2,
      title: "ABHIGYAN Hackathon",
      description: (
        <div>
          In the ABHIGYAN Hackathon conducted at SRM University on March 4,
          2020, two out of four positions were won by our society teams. The
          team of{" "}
          <a
            href="https://www.linkedin.com/in/puneet-kumar-sehrawat-4b3312197/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Puneet Kumar Sehrawat
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/sameer-ahmed-2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Sameer Ahmed
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/vanshika-gupta-89a30a197/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Vanshika Gupta
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/bkaran091/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Karan Bajaj
          </a>{" "}
          were awarded FIRST RUNNER UP for their innovative hack, MILKART - The
          milk delivery app. The team of{" "}
          <a
            href="https://www.linkedin.com/in/riya-dev-varshney-361304197/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Riya Dev Varshney
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/ridham-jain-460327197/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Ridham Jain
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/garvit-gulati-700082193/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Garvit Gulati
          </a>{" "}
          bagged a SPECIAL MENTION for their one of its kind web app, BOOK MY
          LAWYER to ease the process of legal matters by connecting the lawyers
          and potential clients on the platform.
        </div>
      ),
      img: "https://res.cloudinary.com/delhi-technological-university/image/upload/v1621427414/abhigyan_qlxung.jpg",
    },
    {
      id: 3,
      title: "Smart India Hackathon 2018",
      description: (
        <div>
          First major victory by D_CODER at the most prestigious hackathon -
          Smart India Hackathon, wining a cash prize of one lakh. Credit of this
          stupenduous achievement goes to{" "}
          <a
            href="https://www.linkedin.com/in/adityakulrajdtu/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            {" "}
            Aditya Kulraj
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/aarnavjindal/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Aarnav Jindal
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/singhaditya8499/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Aditya Singh
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/akashdeep-9/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Akashdeep Ramnaney
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/deepanshuvarshney/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Deepanshu Varshney
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/daizy-mehta-473763149/"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Daizy Mehta
          </a>
        </div>
      ),
      img: "https://res.cloudinary.com/dcoderdtu/image/upload/v1621622341/SIH_r6ggvg.jpg",
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
