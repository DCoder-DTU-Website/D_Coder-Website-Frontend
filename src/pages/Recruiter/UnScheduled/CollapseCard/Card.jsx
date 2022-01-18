import React from "react";
import "./Card.css";
import { useMediaQuery } from "react-responsive";
const Card = ({ applicant }) => {
  const isPC = useMediaQuery({
    query: "(min-device-width: 690px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 690px)",
  });
  return (
    <div className="card-main">
      <div className="name-info">
        <img
          src={applicant.image}
          alt="image"
          className="w-24 rounded-full"
        ></img>
        <div className="info">
          <div className="name">{applicant.name}</div>
          <div className="roll">{applicant.roll.toUpperCase()}</div>
        </div>
      </div>
      <div className="extra-info">
        <div className="contact">
          <h1 className="email">{applicant.email}</h1>
          <h1 className="phone">{applicant.phone}</h1>
          <h1 className="dob">DOB: {applicant.dob}</h1>
        </div>
        {isPC && <div className="line"></div>}
        {!isPC ? (
          <div
            style={
              !isPC && {
                display: "flex",
                flexDirection: "column",
                marginTop: "-80px",
              }
            }
          >
            <div className="stack">
              <h1 className="branch">{applicant.branch}</h1>
              <br />
              <h1 className="stack-head">TeckStack:</h1>
              <h1 className="tech-stack">{applicant.techStack.join(", ")}</h1>
            </div>
            {isPC && <div className="line"></div>}
            <div className="lang">
              <h1 className="lang-head">Coding Language:</h1>
              <h1 className="code-lang">
                {applicant.codingLanguage.join(", ")}
              </h1>
            </div>
          </div>
        ) : (
          <>
            <div className="stack">
              <h1 className="branch">{applicant.branch}</h1>
              <br />
              <h1 className="stack-head">TeckStack:</h1>
              <h1 className="tech-stack">{applicant.techStack.join(", ")}</h1>
            </div>
            {isPC && <div className="line"></div>}
            <div className="lang">
              <h1 className="lang-head">Coding Language:</h1>
              <h1 className="code-lang">
                {applicant.codingLanguage.join(", ")}
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
