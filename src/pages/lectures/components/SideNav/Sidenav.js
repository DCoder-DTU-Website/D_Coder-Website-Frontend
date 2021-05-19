import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaDatabase, FaNetworkWired } from "react-icons/fa";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";

import "./Sidenav.scss";

import { Link } from "react-router-dom";

import { BrowserView, isMobile } from "react-device-detect";

function Sidenav({ navOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    navOpen(isOpen);
  };

  return (
    <ProSidebar
      className={`Sidenav-root ${isMobile && `Sidenav-root-mobile`}`}
      collapsed={isOpen}
    >
      <SidebarHeader>
        <BrowserView>
          <Menu iconShape="circle">
            <MenuItem
              icon={isOpen ? <BsChevronDoubleRight /> : <BsChevronDoubleLeft />}
              onClick={toggleNav}
            >
              Lectures
            </MenuItem>
          </Menu>
        </BrowserView>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu title="DSA" icon={<FaDatabase />}>
            <MenuItem>
              <Link to="/lectures/dsa/arrays">Arrays</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/dsa/linkedlist">Linked List</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/dsa/stacks">Stacks</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/dsa/queues">Queues</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/dsa/dp">Dynamic Programming</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/dsa/graphs">Graphs</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Web Dev" icon={<FaNetworkWired />}>
            <MenuItem>
              <Link to="/lectures/webd/nodejs">Node JS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/webd/reactjs">React JS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/webd/angularjs">Angular JS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/webd/vuejs">Vue JS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lectures/webd/django">Django and Python</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Interview" icon={<FaNetworkWired />}>
            <MenuItem>
              <Link to="/lectures/interview/leetcode">LeetCode</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter className="Sidenav-footer">
        <Menu iconShape="circle"></Menu>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default Sidenav;
