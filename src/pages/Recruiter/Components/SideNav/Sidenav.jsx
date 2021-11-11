import React,{useContext} from "react";
import { Link } from "react-router-dom";
import RContext from "../../Context/RContext";
import "./sidenav.css";
const Sidenav = () => {
  const context = useContext(RContext);
  const { recruiter } = context;
  return (
    <div className="sider">
      <div className="main-content">
        <div className="profilePic">
          <img
            src={recruiter.image}
            alt="profile"
            className="img"
          />
        </div>
        <div className="rec-info" style = {{alignItems:"center"}}>
          <h1 className="names">{recruiter.name}</h1>
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
