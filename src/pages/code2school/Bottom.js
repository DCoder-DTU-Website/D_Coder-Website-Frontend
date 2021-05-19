import React from "react";
import AOS from "aos";
import "./Bottom.css";

const mission = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="mission">
      <div data-aos="fade-up">
        <h1 style={{ color: "white", fontSize: "40px", textAlign: "center" }}>
          Highlights
        </h1>
        <div className="card-flex">
          <div className="card card-mission">
            <p className="card-text p-mission">
              The initiative garnered around 1000 students from different
              schools and we as a tech society feel proud that we were crazy
              enough to take forward this initiative on such a large scale and
              were successful in our objective.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              The annual event of the initiative brought in students from
              multiple schools under one roof to compete in the BIGGEST IDEATHON
              CHALLENGE IN INDIA FOR STUDENTS organized on 8th February 2019.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission" style={{ marginTop: "17%" }}>
              Some of the participating schools were Ryan International School,
              Rohini, Bal Bharati Public School Dwarka, Ramjas School Pusa Road,
              Mira Model School, Government Sarvodaya co-ed Vidyalaya, SD Public
              School, Patel Nagar and many more.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              The event looked at INNOVATION as a process driven by a gamut of
              disciplines, including MANAGEMENT, ENGINEERING AND DESIGN. The
              event was a platform to present projects done in various fields
              and talk about the untapped potential and discuss processes for
              need-based innovation.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission" style={{ marginTop: "10%" }}>
              The students got to learn amazing ideas and innovation that was
              not accessible to them by normal schooling methods. The support we
              got from different schools and the amount of enthusiasm shown by
              students was enthralling.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              We believe that when an initiative is taken with an aim to change
              something there will always be some difficulty and lots of effort,
              but after the completion, all is forgotten with how much we
              achieved and that is important.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mission;
