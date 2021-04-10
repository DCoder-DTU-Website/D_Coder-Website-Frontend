import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;

const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/events">
        Events
      </NavLink>
      <NavLink href="/council">
        Council
      </NavLink>
      <NavLink href="/gallery">
        Gallery
      </NavLink>
      <NavLink href="/lectures">
        Lectures
      </NavLink>
      <NavLink href="/projects">
        Projects
      </NavLink>
      <NavLink href="/alumni">
        Alumni
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/admin">
        Login
      </PrimaryLink>
    </NavLinks>
  ];

function NavBar(){
  return <StyledHeader links={navLinks} />;
}
export default NavBar;
