import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, {
  NavLink,
  NavLinks,
  BlueLink as BlueLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 pb-2 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-blue-500`}
  }
`;

const BlueLink = tw(BlueLinkBase)`rounded-full`;

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
    <BlueLink href="/admin">Login</BlueLink>
  </NavLinks>,
];

function NavBar() {
  return <StyledHeader links={navLinks} />;
}
export default NavBar;
