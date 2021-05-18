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
import { Button } from "@material-ui/core";
import useUser from "../useUser";
import { BrowserRouter, Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import swal from "sweetalert";
import api from "../api/apiClient";
import MenuDropdown from "components/hero/MenuDropdown.js";
import "./NavBarStyling.css";

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
    <div className="Navlist">
      <MenuDropdown
        title="Administration"
        menuItems={[
          "Faculty",
          "Board of Directors",
          "Chairman",
          "Council",
          "Alumni",
        ]}
      />
      <MenuDropdown
        title="Achievements"
        menuItems={["Internships", "Placements"]}
      />
      <MenuDropdown
        title="Initiatives"
        menuItems={["Code To School", "Mission Qabil"]}
      />
      <MenuDropdown title="Events" />
      <MenuDropdown title="Gallery" />
      <MenuDropdown
        title="Student Corner"
        menuItems={["Lectures", "Projects"]}
      />
    </div>,
    <NavLinks key={2}>
      {isLoggedIn.login ? (
        <>
          {isLoggedIn.login.isAdmin ? (
            <Button
              color="primary"
              variant="contained"
              style={{
                marginRight: "10px",
                marginBottom: isMobile ? "5px" : "0px",
              }}
            >
              <BrowserRouter forceRefresh={true}>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </BrowserRouter>
            </Button>
          ) : (
            <Button style={{ marginRight: "10px" }}>
              <BrowserRouter forceRefresh={true}>
                <Link to="/admin/user">
                  <Avatar src={profile !== null && profile.image}></Avatar>
                </Link>
              </BrowserRouter>
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
                    break;
                  case "No":
                    return;
                  default:
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
