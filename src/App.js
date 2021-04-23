import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages/home/App";
import Events from "pages/events/App";
import Council from "pages/council/App";
import Gallery from "pages/gallery/App";
import Lectures from "pages/lectures/App";
import Projects from "pages/projects/App";
import Alumni from "pages/alumni/App";
import Admin from "pages/admin/App";
import Testimonial from "pages/testimonial/App";
import Table from "pages/admin/TableList";
import UserProfile from "pages/admin/UserProfile";

function App() {
  return (
    <AnimationRevealPage disabled className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/council">
            <Council />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/lectures/dsa/arrays">
            <Lectures />
          </Route>
          <Route path="/alumni">
            <Alumni />
          </Route>
          <Route exact path="/admin/dashboard">
            <Admin />
          </Route>
          <Route exact path="/admin/table">
            <Table />
          </Route>
          <Route exact path="/admin/user">
            <UserProfile />
          </Route>
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </AnimationRevealPage>
  );
}

export default App;
