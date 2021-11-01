import React from "react";
import "./About.css";
import { ReactComponent as Divider } from "../../images/recruitment_hr_line.svg";

const About = () => {
  return (
    <div className="definition">
      <div className="container">
        <div>
          <p className="title">What we do</p>
          <Divider
            style={{
              margin: 32,
              width: "100%",
              textAlign: "center",
            }}
          />
          <p className="def-para">
            <br />
            Mission Qabil is an initiative to empower differently-abled college
            students. We will provide them with a competitive environment where
            they could grow. <br />
            We aim to build a community for them, where they will strive to
            become their best version. These students will have easy access to
            the interview and placement preparation course. They will be
            allotted homework/tasks daily, and their performance will be
            regularly tracked. <br />
            <br /> Our team will always be there to solve their doubts and help
            them improve their weak areas in coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
