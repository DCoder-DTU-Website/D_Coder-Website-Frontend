import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import EventPage from "events/EventPage";

function App() {
  return (
    <AnimationRevealPage disabled>
      <EventPage />;
    </AnimationRevealPage>
  );
}

export default App;
