import "./styles.css";
import React, { useState, useCallback, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'



const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % state.slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? state.slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 700px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-device-width: 700px)'
  })
  return React.createElement(
    "div",
    {
      className: "slide",
      "data-active": active,
      style: {
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      },
    },

    React.createElement(
      "div",
      {
        className: "slideContent",
        style: {
          backgroundImage: `url('${slide.src}')`,
        },
      },
      
      React.createElement(
        "div",
        { className: "slideContentInner" },
        (isDesktopOrLaptop==true?React.createElement("h2", { className: "slideTitle" }, slide.title):""),

        React.createElement(
          "p",
          { className: "slideDescription" },
          slide.description
        )
      )
    )
  );
}

const CoverFlowFunc = ({ slideIndex, slides }) => {
  const initialState = {
    slideIndex: slideIndex,
    slides: slides,
  };
  function SliderPlaying(x) {
    if (x) sliderRef?.slickPlay();
    else sliderRef?.slickPause();
  }
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const [sliderRef, setSliderRef] = useState(null);

  
  return React.createElement(
    "div",
    { className: "slides" },
    React.createElement(
      "button",
      { onClick: () => dispatch({ type: "NEXT" }) },
      "\u2039"
    ),

    [...slides, ...slides, ...slides].map((slide, i) => {
      let offset = slides.length + (state.slideIndex - i);
      return React.createElement(Slide, {
        slide: slide,
        offset: offset,
        key: i,
      });
    }),
    React.createElement(
      "button",
      { onClick: () => dispatch({ type: "PREV" }) },
      "\u203A"
    )
  );
};

export default CoverFlowFunc;
