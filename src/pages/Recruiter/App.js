import React from "react";
import "./App.css";
import Appbar from "./Components/Appbar/Appbar";
import Scheduled from "./Scheduled/App";
import UnScheduled from "./UnScheduled/App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Appbar style={{position:"absolute"}}/>
        <Switch>
          <Route key="1" exact path="/recruiter/scheduled">
            <Scheduled />
          </Route>
          <Route key="2" exact path="/recruiter/unscheduled">
            <UnScheduled />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
