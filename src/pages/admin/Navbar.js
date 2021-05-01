import React from "react";
import { Button } from "@material-ui/core";
import { Route } from "react-router-dom";
import tw from "twin.macro";
import logo from "../../images/logo.png";
import styled from "styled-components";

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export default function AdminNavbarLinks() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a href="/" style={{ width: 40 }}>
        <img src={logo} alt="logo" />
      </a>
      <div style={{ display: "flex", gap: "10px" }}>
        <Route
          render={({ history }) => (
            <Button
              onClick={() => {
                history.push("/admin/dashboard");
              }}
              style={{ backgroundColor: "rgba(49,130,206)", color: "white" }}
            >
              Dashboard
            </Button>
          )}
        />
        <Route
          render={({ history }) => (
            <Button
              onClick={() => {
                history.push("/admin/table");
              }}
              style={{ backgroundColor: "rgba(49,130,206)", color: "white" }}
            >
              Members
            </Button>
          )}
        />
      </div>
    </div>
  );
}
