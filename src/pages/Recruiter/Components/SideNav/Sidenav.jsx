import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
const Sidenav = () => {
  return (
    <div className="sider">
      <div className="main-content">
        <div className="profilePic">
          <img
            src="https://res.cloudinary.com/dcoderdtu/image/upload/v1620130571/image_-_Vaibhav_Gupta_eblpym.jpg"
            alt="profile"
            className="img"
          />
        </div>
        <div className="rec-info" style = {{alignItems:"center"}}>
          <h1 className="names">Vaibhav Gupta</h1>
          <h2 className="rec">Recruiter's Profile</h2>
        </div>
        <div className="links">
          <Link to="/recruiter/scheduled">
            <h2 className = "linkss">Scheduled</h2>
          </Link>
          <Link to="/recruiter/unscheduled">
            <h2 className = "linkss">Unscheduled</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
