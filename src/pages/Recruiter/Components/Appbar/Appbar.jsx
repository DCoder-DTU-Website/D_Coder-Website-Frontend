import React, { useContext } from "react";
import "./Appbar.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../../../images/D_CODER_LOGO_WHITE.png";
import RContext from "../../Context/RContext";
export default function ButtonAppBar() {
  const context = useContext(RContext);
  const { openNav, setOpenNav } = context;
  const isPC = useMediaQuery({
    query: "(min-device-width: 690px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 690px)",
  });
  return (
    <div className="main">
      <div className="org">
        <Link to="/">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              style={{ width: "150px", margin: "0px -35px" }}
            ></img>
            <h2>D_CODER DTU</h2>
          </div>
        </Link>
      </div>
      <div className="tabs">
        {isPC && (
          <>
            <Link to="/recruiter/scheduled">
              <h2>Scheduled</h2>
            </Link>
            <Link to="/recruiter/unscheduled">
              <h2>Unscheduled</h2>
            </Link>
          </>
        )}
        {!isPC && (
          <div style={{ marginRight: "3%" }}>
            <MenuIcon onClick={() => setOpenNav(!openNav)} />
          </div>
        )}
      </div>
    </div>
  );
}
