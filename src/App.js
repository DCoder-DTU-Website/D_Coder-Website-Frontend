import React, { useState, useEffect } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
import NotAnAdmin from "./pages/miscellaneous/AdminError/index";
import Error404 from "./pages/miscellaneous/Error404/App";
import useUser from "./useUser";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsLoggedIn(true);
  }, [user]);

  const isAdmin = isLoggedIn && user && user.isAdmin;
  const isUser = isLoggedIn && user;

  return (
    <AnimationRevealPage disabled className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/council">
            <Council />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/lectures/dsa/arrays">
            <Lectures />
          </Route>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
          <Route exact path="/admin/dashboard">
            {isLoggedIn && user && user.isAdmin ? <Admin /> : <NotAnAdmin />}
          </Route>
          <Route exact path="/admin/table">
            {user && user.isAdmin ? <Table /> : <NotAnAdmin />}
          </Route>
          {/* {isLoggedIn && user && user.isAdmin && (
            <>
              <Route exact path="/admin/dashboard">
                <Admin />
              </Route>
              <Route exact path="/admin/table">
                <Table />
              </Route>
            </>
          )} */}
          {/* <Route
            exact
            path="/admin/dashboard"
            render={() => (isAdmin ? <Admin /> : <Redirect to="/" />)}
          />
          <Route
            exact
            path="/admin/table"
            render={() => (isAdmin ? <Table /> : <Redirect to="/" />)}
          />
          <Route
            exact
            path="/admin/user"
            render={() => (isUser ? <UserProfile /> : <Redirect to="/" />)} */}
          <Route exact path="/admin/user">
            {user && !user.isAdmin ? <UserProfile /> : <NotAnAdmin />}
          </Route>
          <Route exact path="/testimonial">
            <Testimonial />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="*" component={Error404} /> */}
        </Switch>
      </BrowserRouter>
    </AnimationRevealPage>
  );
}

export default App;
