import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
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
import { Button, IconButton } from "@material-ui/core";
import useUser from "../useUser";
import { BrowserRouter, Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import swal from "sweetalert";
import api from "../api/apiClient";
import MenuDropdown from "components/hero/MenuDropdown.js";
import { ExitToApp } from "@material-ui/icons";
import "./NavBarStyling.css";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import SecurityRoundedIcon from "@material-ui/icons/SecurityRounded";
import DropNav from "./navBar";

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
  const [profile, setProfile] = useState(null);

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

  const getProfile = async () => {
    const res = await api.post("/userprofile", { user });
    const userProfile = res.data;
    setProfile(userProfile);
  };

  useEffect(() => {
    getProfile();
  }, [user]);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  const isMobile = useMediaQuery({
    query: "(max-device-width: 1154px)",
  });

  const navLinks = [
    <DropNav />,
    <NavLinks key={2}>
      {isLoggedIn.login ? (
        <>
          {isLoggedIn.login.isAdmin ? (
            <Link to="/admin/dashboard">
              <SecurityRoundedIcon className="NavBarIcon" />
            </Link>
          ) : (
            <Button style={{marginRight:"-10px"}}>
              {/* <BrowserRouter forceRefresh={true}> */}
              <Link to="/admin/user">
                <Avatar src={profile !== null && profile.image}></Avatar>
              </Link>
              {/* </BrowserRouter> */}
            </Button>
          )}
          <IconButton
            variant="contained"
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
                    break;
                  case "No":
                    return;
                  default:
                    return;
                }
              });
            }}
          >
            <PowerSettingsNewRoundedIcon className="NavBarIcon" />
          </IconButton>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn}>Login</Login>
      )}
    </NavLinks>,
  ];

  return <StyledHeader links={navLinks} />;
}
export default NavBar;
