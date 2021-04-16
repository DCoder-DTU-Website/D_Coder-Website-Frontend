import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import Confetti from "react-confetti";

export default () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height + 500}
      recycle={false}
      numberOfPieces={500}
    />
  );
};
