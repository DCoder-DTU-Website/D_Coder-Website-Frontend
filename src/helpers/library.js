import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, {
  NavLink,
  NavLinks,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../components/headers/light.js";
import Login from "./loginModal";
import { Button } from "@material-ui/core";
import useUser from "../useUser";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import swal from "sweetalert";

const StyledHeader = styled(Header)`
  ${tw`pt-8 pb-2 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-blue-500`}
  }
`;

function NavBar() {
  const { user, logout } = useUser();

  const [isLoggedIn, setIsLoggedIn] = useState({ login: user });

  useEffect(() => {
    setIsLoggedIn({ login: user });
  }, [user]);

  const logoutFromClient = () => {
    logout();
    setIsLoggedIn({ login: false });
    swal({
      title: "Successfully logged out!",
      icon: "success",
      closeOnEsc: true,
      closeOnClickOutside: true,
      button: {
        ok: "Ok",
      },
    });
  };

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/events">Events</NavLink>
      <NavLink href="/council">Council</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
      <NavLink href="/lectures/dsa/arrays">Lectures</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/alumni">Alumni</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      {isLoggedIn.login ? (
        <>
          {isLoggedIn.login.isAdmin ? (
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: "10px" }}
            >
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            </Button>
          ) : (
            <Button style={{ marginRight: "10px" }}>
              <Link to="/admin/user">
                <Avatar />
              </Link>
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              swal({
                title: "Are you sure you want to logout?",
                icon: "warning",
                buttons: {
                  yes: {
                    text: "Yes",
                    value: "Yes",
                  },
                  no: {
                    text: "No",
                    value: "No",
                  },
                },
                closeOnClickOutside: true,
                closeOnEsc: true,
              }).then((value) => {
                switch (value) {
                  case "Yes":
                    logoutFromClient();
                  case "No":
                    return;
                }
              });
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn}>Login</Login>
      )}
    </NavLinks>,
  ];

  return <StyledHeader links={navLinks} />;
}
export default NavBar;
