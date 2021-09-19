import React, {useContext} from "react";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import RContext from "../../Context/RContext";
import "./Profile.css";

const Profile = () => {
  const context = useContext(RContext);
  const {him} = context
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
        <div className="name">
          <h1 className="rec-name">
            {him}{" "}
            <InsertLinkIcon style={{ cursor: "pointer" }} fontSize="large" />
          </h1>
        </div>
        <div className="viewProfile">
          <h2 className="rec-prof">Recruiter's Profile</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
