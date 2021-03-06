import React, { useContext } from "react";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import RContext from "../../Context/RContext";
import { useMediaQuery } from "react-responsive";
import "./Profile.css";

const Profile = () => {
  const context = useContext(RContext);
  const { recruiter } = context;
  const isPC = useMediaQuery({
    query: "(min-device-width: 690px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 690px)",
  });
  return (
    <div className="main-profile">
      {isPC && (
        <>
          <div className="profilePic">
            <img
              src={recruiter.image}
              alt="profile"
              className="image"
            />
          </div>
          <div className="rec-info">
            <div className="name">
              <h1 className="rec-name">
                {recruiter.name}{" "}
                <InsertLinkIcon
                  style={{ cursor: "pointer" }}
                  fontSize="large"
                />
              </h1>
            </div>
            <div className="viewProfile">
              <h2 className="rec-prof">Recruiter's Profile</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
