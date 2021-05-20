import React, { useState, useEffect } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "pages/home/App";
import Events from "pages/events/App";
import Council from "pages/council/App";
import Gallery from "pages/gallery/App";
import Lectures from "pages/lectures/App";
import Projects from "pages/projects/App";
import Alumni from "pages/alumni/App";
import Mission from "pages/qabil/App";

import Admin from "pages/admin/App";
import Testimonial from "pages/testimonial/App";
import Research from "pages/research/App";
import Interns from "pages/interns/App";
import Table from "pages/admin/TableList";
import UserProfile from "pages/admin/UserProfile";
import NotAnAdmin from "./pages/miscellaneous/AdminError/index";
import Error404 from "./pages/miscellaneous/Error404/App";
import useUser from "./useUser";
import ResetPass from "./pages/admin/ResetPassForm";
import GoogleForm from "./pages/GoogleForms/Form1";
import CodeToSchool from "pages/code2school/App";
import Faculty from "pages/faculty/App";
import BoardOfDirectors from "pages/Board_Of_Director/App";
import Chairman from "pages/Chairman/App";
import Achievements from "pages/achievements/App";
import Blog from "pages/Blog/App";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsLoggedIn(true);
  }, [user]);

  const isAdmin = isLoggedIn && user && user.isAdmin;
  const isUser = isLoggedIn && user && !user.isAdmin;

  return (
    <AnimationRevealPage disabled className="wrapper">
      <BrowserRouter forceRefresh>
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
          <Route exact path="/internships">
            <Interns />
          </Route>
          <Route exact path="/research">
            <Research />
          </Route>
          <Route exact path="/lectures/:topic/:subtopic">
            <Lectures />
          </Route>
          <Route exact path="/mission_qabil">
            <Mission />
          </Route>
          <Route exact path="/achievements">
            <Achievements />
          </Route>
          <Route exact path="/lectures">
            <Redirect to="/lectures/interview/leetcode" />
          </Route>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
          <Route exact path="/admin/dashboard">
            {isAdmin ? <Admin /> : <NotAnAdmin />}
          </Route>
          <Route exact path="/admin/table">
            {isAdmin ? <Table /> : <NotAnAdmin />}
          </Route>
          <Route
            exact
            path="/admin/user"
            component={isUser ? UserProfile : NotAnAdmin}
          />
          <Route exact path="/testimonial">
            <Testimonial />
          </Route>
          <Route exact path="/code_to_school">
            <CodeToSchool />
          </Route>
          <Route exact path="/faculty">
            <Faculty />
          </Route>
          <Route exact path="/chairman">
            <Chairman />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/board_of_directors">
            <BoardOfDirectors />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form/sample">
            <GoogleForm />
          </Route>
          <Route path="/reset/:token">
            <ResetPass />
          </Route>
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </AnimationRevealPage>
  );
}

export default App;
