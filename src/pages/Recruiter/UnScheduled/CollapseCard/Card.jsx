import React from "react";
import "./Card.css";
import { useMediaQuery } from "react-responsive";
const Card = () => {
  const isPC = useMediaQuery({
    query: "(min-device-width: 690px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 690px)",
  });
  return (
    <div className="card-main">
      <div className="name-info">
        <div className="pic">
          <img
            src="https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg"
            alt="profile"
            className="app-image"
          />
        </div>
        <div className="info">
          <div className="name">Naman Malhotra</div>
          <div className="roll">2K20/CO/294</div>
        </div>
      </div>
      <div className="extra-info">
        <div className="contact">
          <h1 className="email">namanMalhotra@gmail.com</h1>
          <h1 className="phone">8784512365</h1>
          <h1 className="dob">DOB: 04.05.2002</h1>
        </div>
        {isPC && <div className="line"></div>}
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
            <h1 className="branch">Computer Engineering</h1>
            <br/>
            <h1 className="stack-head">TeckStack:</h1>
            <h1 className="tech-stack">C++, React</h1>
          </div>
          {isPC && <div className="line"></div>}
          <div className="lang">
            <h1 className="lang-head">Coding Language:</h1>
            <h1 className="code-lang">C++, Python</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
