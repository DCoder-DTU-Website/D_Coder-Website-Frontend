import React, { useState } from "react";
import RContext from "./RContext";

const RState = (props) => {
  const him = "Vaibhav Gupta";
  const [openNav, setOpenNav] = useState(false);
  return (
    
    <RContext.Provider value={{him,openNav, setOpenNav}}>
      {props.children}
    </RContext.Provider>
  );
};

export default RState;