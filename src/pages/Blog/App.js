import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MinNavbar from "components/hero/MinNavbar";
// import fakeData from "./BlogData";
// import BlogCard from "./BlogCard";
import Footer from "components/footers/Footer";
import Home from "components/Blogs/routes/Home/Home";

function Blog() {
  return (
    <>
      <MinNavbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default Blog;
