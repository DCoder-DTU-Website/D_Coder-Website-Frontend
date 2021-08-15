import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import Notices from "helpers/Notices";

ReactDOM.render(
  <React.StrictMode>
    <Notices />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

