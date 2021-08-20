import Home from "pages/home/App"
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, HashRouter, Redirect, Link } from "react-router-dom";
const UserRedirect = () => {
  return (
    // <Route path="/">
    // </Route>
    <BrowserRouter forceRefresh={true} basename="/">
        <Redirect to="/"/>
        {/* <Home></Home> */}
    </BrowserRouter>
  );
};