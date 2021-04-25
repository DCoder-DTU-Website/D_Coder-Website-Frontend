import React, { useEffect } from "react";
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
  console.log(user);
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
      {user ? (
        <>
          <Button variant="contained" color="primary">
            {user.isAdmin ? (
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            ) : (
              <Link to="/admin/user">Dashboard</Link>
            )}
          </Button>
          <Button variant="contained" color="primary" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <Login>Login</Login>
      )}
    </NavLinks>,
  ];

  return <StyledHeader links={navLinks} />;
}
export default NavBar;
