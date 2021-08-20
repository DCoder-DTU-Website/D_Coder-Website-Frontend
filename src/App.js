import React, { useState, useEffect } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from "pages/home/App";
import FormEmbed from "pages/forms/App";
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
import Placements from "pages/Placements/App";
import Table from "pages/admin/pages/Members/Members";
import UserProfile from "pages/admin/pages/User/UserProfile";
// import NotAnAdmin from "./pages/miscellaneous/AdminError/index";
import useUser from "./useUser";
import ResetPass from "./pages/admin/components/PasswordResetForm";
import ForgotPass from "./pages/admin/components/ForgotPasswordForm";
import CodeToSchool from "pages/code2school/App";
import Faculty from "pages/faculty/App";
import BoardOfDirectors from "pages/Board_Of_Director/App";
import Founder from "pages/Founder/App";
import Achievements from "pages/achievements/App";
import Blog from "pages/Blog/App";
import ReadMore from "components/Blogs/routes/Blog/Blog";
import SeniorsSeMulaquaat from "pages/ssm/App";
import RecruitmentProcess from "pages/RecruitmentProcess/App";
import RecruitmentForm from "pages/RecruitmentProcess/RecruitmentForm";
import AddGoogleForm from "pages/admin/pages/Forms/Forms";

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
          <Route exact path="/internships">
            <Interns />
          </Route>
          <Route exact path="/placements">
            <Placements />
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
          <Route exact path="/seniors_se_mulaquaat">
            <SeniorsSeMulaquaat />
          </Route>
          <Route exact path="/blog/read_more" component={ReadMore} />
          <Route exact path="/achievements">
            <Achievements />
          </Route>
          <Route exact path="/forms/:id">
            <FormEmbed />
          </Route>
          <Route exact path="/lectures">
            <Redirect to="/lectures/interview/leetcode" />
          </Route>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
          <Route exact path="/admin/dashboard">
            {isAdmin ? (
              <Admin />
            ) : (
              <Route>
                <Redirect to="/" />
              </Route>
            )}
            {/* <Admin /> */}
          </Route>
          <Route exact path="/admin/table">
            {isAdmin ? (
              <Table />
            ) : (
              <Route>
                <Redirect to="/" />
              </Route>
            )}
          </Route>
          <Route exact path="/admin/form">
            {isAdmin ? (
              <AddGoogleForm />
            ) : (
              <Route>
                <Redirect to="/" />
              </Route>
            )}
          </Route>
          <Route
            exact
            path="/admin/user"
            // component={ isUser? UserProfile: UserRedirect}
          >
            {isUser ? (
              <UserProfile />
            ) : (
              <Switch>
                <Redirect from="/admin/user" to="/" />
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            )}
          </Route>
          <Route exact path="/testimonial">
            <Testimonial />
          </Route>
          <Route exact path="/code_to_school">
            <CodeToSchool />
          </Route>
          <Route exact path="/faculty">
            <Faculty />
          </Route>
          <Route exact path="/founder">
            <Founder />
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
          <Route path="/reset/:token">
            <ResetPass />
          </Route>
          <Route path="/forgot/:token">
            <ForgotPass />
          </Route>
          <Route path="/recruitment">
            {isAdmin ? (
              <RecruitmentProcess />
            ) : (
              <Route>
                <Redirect to="/" />
              </Route>
            )}
          </Route>
          <Route path="/recruitment-form">
            <RecruitmentForm />
          </Route>
          {/* <Route path="*" component={Error404} /> */}
        </Switch>
      </BrowserRouter>
    </AnimationRevealPage>
  );
}

export default App;
