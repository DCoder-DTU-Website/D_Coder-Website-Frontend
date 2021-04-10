import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import Council from "components/council/councilPage"

function App() {
  return (
    <AnimationRevealPage disabled>
      <Council />
    </AnimationRevealPage>
  )
}

export default App