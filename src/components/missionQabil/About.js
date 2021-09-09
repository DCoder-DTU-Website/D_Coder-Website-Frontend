import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="definition">
      <div className="container">
        <div>
          <a
            href="https://instagram.com/missionqabil?utm_medium=copy_link"
            className="title"
          >
            What is Missi<span style={{ color: "#f3a94e" }}>o</span>n{" "}
            <span style={{ color: "#f3a94e" }}>Q</span>abil ?
          </a>
          <p  className="def-para">
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
        <iframe
          className="video"
          id="video"
          src="https://www.youtube.com/embed/-KIE463QlK4"
          allowfullscreen="allowfullscreen"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
