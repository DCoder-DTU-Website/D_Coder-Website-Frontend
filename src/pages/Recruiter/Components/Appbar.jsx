import * as React from "react";
import "./Appbar.css";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <div className="main">
      <div className="org">
        <Link to = "/"><h2>D_CODER DTU</h2></Link>
      </div>
      <div className="tabs">
        <Link to="/scheduled"><h2>Scheduled</h2></Link>
        <Link to="/unscheduled"><h2>Unscheduled</h2></Link>
      </div>
    </div>
  );
}
