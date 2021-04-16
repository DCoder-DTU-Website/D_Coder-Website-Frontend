import React from "react"
import "./App.css"
import "tailwindcss/dist/base.css"
// import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/SplashScreenWithHeading"
import Footer from "components/footers/Footer"
// import CoverFlow from "components/Gallery/coverFlow"
// import Tail from "components/Gallery/tail"
// import GalPrev from "components/cards/GalPreview"
// import Testimonials from "components/testimonials/HomePageReviews"
import Particles from 'react-particles-js';
import PhotoIndex from 'components/PhotoGallery/photoindex'
import particlesConfig from 'components/particlejs/config/particle-config'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticlesBg from 'particles-bg'

export default function Council() {
  return (
    <Router>
      
        
        
    <div className = "back">
      <Hero title = "A Glance At The Past" />
      
       
        <div  style = {{position:"absolute", width:"100%", height:"100%", zIndex:"0"}}>
           <ParticlesBg type = "circle" bg = {true}/>
        <Particles 
          params={{
            particles: {
              number: {
                value: 75,
              },
              size: {
                value: 3,
              },
            },
          }}
        /></div>
        <PhotoIndex className = "images"></PhotoIndex>
      <Footer />
    </div>
    </Router>
  );
}




































{/* <div style = {{
        width:"100%",
        height:"100s%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
        marginTop:"50px",
        marginBottom:"50px"
        }}>
        <CoverFlow />
      </div> */}