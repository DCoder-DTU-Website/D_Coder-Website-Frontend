import React from "react";
import WinnerCard from "./WinnerCard";
import Winners from "./Winners";
import dummyImage from "./dummyImage.jpg";

import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const winners = [
  {
    id: 1,
    name: "Lorem1",
    image: dummyImage,
    position: 1,
    links: [
      {
        url: "https://linkedin.com",
        icon: LinkedinIcon,
      },
      {
        url: "https://github.com",
        icon: GithubIcon,
      },
    ],
    event: "TechFest 20",
  },
  {
    id: 2,
    name: "Lorem2",
    image: dummyImage,
    position: "1st",
    links: [
      {
        url: "https://linkedin.com",
        icon: LinkedinIcon,
      },
      {
        url: "https://github.com",
        icon: GithubIcon,
      },
    ],
    event: "TechFest 20",
  },
  {
    id: 3,
    name: "Lorem3",
    image: dummyImage,
    position: "2nd",
    links: [
      {
        url: "https://linkedin.com",
        icon: LinkedinIcon,
      },
      {
        url: "https://github.com",
        icon: GithubIcon,
      },
    ],
    event: "TechFest 20",
  },
  {
    id: 4,
    name: "Lorem4",
    image: dummyImage,
    position: "3rd",
    links: [
      {
        url: "https://linkedin.com",
        icon: LinkedinIcon,
      },
      {
        url: "https://github.com",
        icon: GithubIcon,
      },
    ],
    event: "TechFest 20",
  },
  {
    id: 5,
    name: "Lorem5",
    image: dummyImage,
    position: "4th",
    links: [
      {
        url: "https://linkedin.com",
        icon: LinkedinIcon,
      },
      {
        url: "https://github.com",
        icon: GithubIcon,
      },
    ],
    event: "TechFest 20",
  },
];

const winnerCards = winners.map((winner, i) => (
  <WinnerCard
    key={i}
    name={winner.name}
    img={winner.image}
    pos={winner.position}
    links={winner.links}
    evt={winner.event}
  />
));

const Hackathons = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <section>
        <Winners winners={winnerCards} />
      </section>
    </div>
  );
};

export default Hackathons;
