import React, { useState } from "react";
import RContext from "./RContext";

const RState = (props) => {
  return (
    <RContext.Provider value={{}}>
      {props.children}
    </RContext.Provider>
  );
};

export default RState;