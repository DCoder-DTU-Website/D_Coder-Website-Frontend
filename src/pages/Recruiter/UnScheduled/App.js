import React, { useContext } from "react";
import Table from "./Table/Table";
import Profile from "../Components/Profile/Profile";
import Sidenav from "../Components/SideNav/Sidenav";
import RContext from "../Context/RContext";
const App = ({ scheduled }) => {
  const context = useContext(RContext);
  const { openNav } = context;
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          position: "absolute",
        }}
      ></div>
      {openNav && <Sidenav />}
      <Profile />
      <Table style={{ padding: "5%" }} scheduled={scheduled} />
    </div>
  );
};

export default App;
