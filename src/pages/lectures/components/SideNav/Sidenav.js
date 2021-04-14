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
import { MdPersonalVideo } from "react-icons/md";

import dCoderLogo from "./D_CODER_LOGO_WHITE.png";

import "./Sidenav.scss";

import { Link } from "react-router-dom";

function Sidenav({ navOpen }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    navOpen(isOpen);
  };

  return (
    <ProSidebar className="Sidenav-root" collapsed={isOpen}>
      <SidebarHeader>
        <Menu iconShape="circle">
          <MenuItem icon={<MdPersonalVideo />} onClick={toggleNav}>
            Lectures
          </MenuItem>
        </Menu>
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
          <SubMenu title="Web Dev" icon={<FaNetworkWired />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components" icon={<FaNetworkWired />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Components" icon={<FaNetworkWired />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter className="Sidenav-footer">
        <Menu iconShape="circle">
          <MenuItem icon={<img src={dCoderLogo} height={60} width={100} />} />
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default Sidenav;
