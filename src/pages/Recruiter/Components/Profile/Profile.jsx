import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="main-profile">
      <div className="profilePic">
        <img
          src="https://res.cloudinary.com/dcoderdtu/image/upload/v1620130571/image_-_Vaibhav_Gupta_eblpym.jpg"
          alt="profile"
          className="image"
        />
      </div>
      <div className="rec-info">
        <div className="name"><h1 className ="rec-name">Vaibhav Gupta</h1></div>
        <div className="viewProfile"><h2 className ="rec-prof">Recruiter's Profile</h2></div>
      </div>
    </div>
  );
};

export default Profile;
