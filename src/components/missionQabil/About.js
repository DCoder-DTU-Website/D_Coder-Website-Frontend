import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="definition">
      <div className="container">
        <div>
          <a style={{ fontSize: "50px" }} href = "https://instagram.com/missionqabil?utm_medium=copy_link">
            What is Missi<span style={{ color: "#f3a94e" }}>o</span>n{" "}
            <span style={{ color: "#f3a94e" }}>Q</span>abil ?
          </a>
          <p id="main-p" className="def-para">
            Mission Qabil is a non-profitable initiative to provide special
            training to specially-abled students for internships and placements.
            It is started by a group of students and alumni of DTU. We provide
            them with a competitive environment where they can develop and get
            empowered. We build a community for them, where they strive to
            become their best version. We aim to include differently-abled
            students from various colleges and thus strengthen this community as
            a strong unit. 
            <br/>
            DTU chapter of Mission Qabil was successfully
            inaugurated on January 17, 2021. Various alumni (from 1996 batch and
            onwards) marked their presence for the event. Ms. Rachna Garg,
            director of EOC DTU felicitated various alumni guests and Sanjay
            Gupta sir marked his presence as the chief guest of the event.
            Talented seniors like Maneesh Rajkumar Pherwani sir, Himanshu Mishra
            sir, Hemant Ahuja sir,etc. inspired students by their motivating
            speeches. The event wrapped up with an informal event where alumnus
            got a chance to relive their college life and interact with their
            juniors. It went live via a youtube live stream consisting of 250+
            viewers.
          </p>
        </div>
        <iframe
          className="video"
          id="video"
          src="https://www.youtube.com/embed/_aE-1oGvfNg?rel=0?version=3&loop=1"
          allowfullscreen="allowfullscreen"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
