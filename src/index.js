import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Notices from "helpers/Notices";
if (process.env.NODE_ENV !== "development") console.log = () => {};
ReactDOM.render(
  <React.StrictMode>
    <Notices />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
