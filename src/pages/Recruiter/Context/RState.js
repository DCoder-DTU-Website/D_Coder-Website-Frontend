import React, { useState } from "react";
import RContext from "./RContext";

const RState = (props) => {
  const him = "Vaibhav Gupta";
  return (
    
    <RContext.Provider value={{him}}>
      {props.children}
    </RContext.Provider>
  );
};

export default RState;