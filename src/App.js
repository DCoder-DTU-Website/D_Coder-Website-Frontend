import React from "react"
import "style.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/BackgroundAsImageWithCenteredContent"
import Head from "components/council/heads"
import CoHead from "components/council/coHeads"
import Designer from "components/council/designer"
import Developer from "components/council/developer"

function App() {
  return (
    <AnimationRevealPage disabled>
      <Hero/>
      <Head />
      <CoHead />
      <Designer />
      <Developer />
    </AnimationRevealPage>
  )
}

export default App