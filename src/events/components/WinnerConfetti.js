import React, { useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Confetti from "react-confetti";

export default () => {
  const { width, height } = useWindowSize();

  //   useEffect(() => {
  //     function handleScroll() {
  //       console.log("Scrolled here");
  //     }

  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <Confetti
      width={width}
      height={height + 500}
      recycle={false}
      numberOfPieces={500}
    />
  );
};
