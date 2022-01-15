import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Route, Link } from "react-router-dom";
import tw from "twin.macro";
import logo from "../../../images/logo.png";
import styled from "styled-components";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "./Navbar.css";

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

const PCNav = (props) => {
  return (
    <Route
      render={({ history }) => (
        <Button
          onClick={() => {
            history.push(`/admin/${props.where}`);
          }}
          style={{ backgroundColor: "rgba(49,130,206)", color: "white" }}
        >
          {props.name}
        </Button>
      )}
    />
  );
};

const MobileNav = (props) => {
  return (
    <Route
      render={({ history }) => (
        <div
          onClick={() => {
            history.push(`/admin/${props.where}`);
          }}
        >
          <h1 className="text-center">{props.name}</h1>
        </div>
      )}
    />
  );
};

export default function AdminNavbarLinks() {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="dcoder-logo-wrapper"
    >
      <div style={{ width: 40 }} className="dcoder-logo">
        <Link to="/" style={{ width: 40 }}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="admin-btns hidden md:flex gap-x-2">
        <PCNav name="Dashboard" where="dashboard" />
        <PCNav name="Members" where="table" />
        <PCNav name="Form" where="form" />
        <PCNav name="Recruitment" where="recruitment" />
        <PCNav name="Internships" where="internships" />
        <PCNav name="Placements" where="placements" />
      </div>
      <div className="md:hidden absolute">
        <div className="w-[90vw] flex justify-end items-center">
          <MenuRoundedIcon
            className="text-white scale-150"
            onClick={() => setOpen(true)}
          />
        </div>
        {open && (
          <div className="absolute bg-white z-10 w-[70vw] sm:w-[45vw] h-[106vh] right-[-2.5rem] top-[-2.5rem] pr-[2rem] pt-[3rem] sm:pt-[1rem]">
            <div className="flex justify-end">
              <CloseRoundedIcon
                className="text-[blue] scale-150"
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="mt-10 flex flex-col gap-y-4">
              <MobileNav name="Dashboard" where="dashboard" />
              <MobileNav name="Members" where="table" />
              <MobileNav name="Form" where="form" />
              <MobileNav name="Recruitment" where="recruitment" />
              <MobileNav name="Internships" where="internships" />
              <MobileNav name="Placements" where="placements" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
