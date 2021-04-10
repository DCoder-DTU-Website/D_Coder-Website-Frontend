import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import Council from "components/council/councilPage"
import Tab from "components/council/tabCardCouncil"

function App() {
  return (
    <AnimationRevealPage disabled>
      <Tab />
    </AnimationRevealPage>
  )
}

export default App