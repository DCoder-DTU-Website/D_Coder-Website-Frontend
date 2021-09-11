import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import "./CouncilCard.scss";
import "./council.css";
import { FaLinkedinIn } from "react-icons/fa";

// const CardText = tw.div`p-4 text-white`;
// const CardTitle = tw.h5`text-lg font-semibold group-hover:text-white`;
// const CardContent = tw.p`mt-1 text-sm font-medium text-white`;

export default function CouncilCard({ index, card }) {
  return (
    <div className="card__collection clear-fix image-container-photo">
      <div className="cards cards--two">
        <img
          src={card.imageSrc}
          className="img-responsive"
          alt="Cards"
          style={{
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span className="cards--two__rect"></span>
        <span className="cards--two__tri"></span>
        <p>{card.title}</p>
        <ul
          className="cards__list"
          style={{
            marginLeft: "0.6em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li>{card.content}</li>
          <li
            style={{
              margin: "auto",
              backgroundColor: "#0072b1",
              padding: "5px",
              borderRadius: "50%",
            }}
          >
            <a href={card.linkedin} target="_blank" rel = "noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
