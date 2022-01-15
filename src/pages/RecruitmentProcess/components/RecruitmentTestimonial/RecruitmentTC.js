import React from 'react'
import styled from 'styled-components';

const SocialMedia = styled.div`
  background-color: blue;
  z-index: 2;
  border-radius: 50%;
  width: 4vw;
  height: 4vw;
  color: white;
  margin-bottom: -5vw;
  margin-left:-0.5vw;
  justify-content: center;
  text-align: center;
  justify-items: center;
  padding: 1vw 0rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

function RecruitmentTC() {
    const size = window.innerWidth
    return (
      <div>
        <div style={{ padding: size/12 }}>
          <div
            style={{
              textAlign: "center",
              padding: "1vw 0px",
              margin: "-5vw 0vw 2vw 0vw",
              color: "white",
              fontSize: "2vw",
            }}
          >
            Name
          </div>
          <div>
            <SocialMedia>
              <a target="_blank" href="/">
                lin
              </a>
            </SocialMedia>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%", borderRadius: "50%", zIndex: "1" }}
            />
            <div
              style={{
                backgroundColor: "white",
                zIndex: "2",
                borderRadius: "4rem",
                padding: "1rem 2rem",
                width: "12vw",
                height: "2vw",
                marginTop: "-3.5rem",
                marginLeft: "8vw",
                boxShadow: "-5px -5px 5px rgba(0, 0, 0, 0.4)",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
}

export default RecruitmentTC
