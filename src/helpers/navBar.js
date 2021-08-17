import React from "react";
import "./newNavbar-style.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-dropdown">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              Administration
            </Link>
            <div
              className="dropdown"
              style={{ width: "200px", borderRadius: "10px" }}
            >
              <Link to="/faculty">Faculty</Link>
              <Link to="/founder">Founder</Link>
              <Link to="/board_of_directors">Board of Directors</Link>
              <Link to="/council">Council</Link>
              <Link to="/alumni">Alumni</Link>
            </div>
          </li>
          <li className="navbar-dropdown">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              Wall of Fame
            </Link>
            <div className="dropdown" style={{ borderRadius: "10px" }}>
              <Link to="/placements">Placements</Link>
              <Link to="/internships">Internships</Link>
              <Link to="/achievements">Achievements</Link>
            </div>
          </li>
          <li className="navbar-dropdown">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              Initiatives
            </Link>
            <div
              className="dropdown"
              style={{ width: "180px", borderRadius: "10px" }}
            >
              <Link to="/code_to_school">Code To School</Link>
              <Link to="/mission_qabil">Mission Qabil</Link>
              <Link to="/seniors_se_mulaquaat">Seniors Se Mulaquaat</Link>
            </div>
          </li>
          <li className="navbar-dropdown">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
              }}
            >
              Education
            </Link>
            <div
              className="dropdown"
              style={{ width: "180px", borderRadius: "10px" }}
            >
              <Link to="/lectures">Lectures</Link>
              <Link to="/blog">Blogs</Link>
            </div>
          </li>
          <li className="navbar-dropdown">
            <Link to="/events">Events</Link>
          </li>
          <li className="navbar-dropdown">
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className="navbar-dropdown">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
