import React from "react"
import Head from "components/council/heads"
import CoHead from "components/council/coHeads"
import Designer from "components/council/designer"
import Developer from "components/council/developer"
import './council.css'


function Council() {
  return (
      <div className = "councilStyle" >
        <Head />
        <CoHead />
        <Designer />
        <Developer />
    </div>
  )
}

export default Council