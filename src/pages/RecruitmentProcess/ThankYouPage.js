import React from "react"
import MinNavbar from "components/hero/MinNavbar";
import {Button} from "@material-ui/core";
import {  Redirect } from "react-router-dom";
import "./ThankYouPage.css"
export default function ThankYouPage(){
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "rgb(26,32,44)",
          margin: "0px -35px",
          padding: "0px 35px",
        }}
      >
        <MinNavbar className="NavbarT" />
        <br />
        <br />
        <div className="changefont ContentRFT">
          <div className="sizeH1T">Thank You For Registering!!</div>
          <div className="sizeH2T">We will connect with You soon.</div>
          <div className="sizeH3T">
            <Button
              style={{
                color: "rgb(40, 40, 182)",
                fontWeight: "600",
                fontSize: "2vw",
                textTransform: "capitalize",
              }}
              className="changefont"
              href="/"
            >
              click here
            </Button>
            to go back to main website
          </div>
        </div>
      </div>
    );
}