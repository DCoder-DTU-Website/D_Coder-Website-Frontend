import React , {useEffect} from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import Navbar from "components/hero/MinNavbar";
import Footer from "../../components/footers/Footer";
import Testimonial from "./Components/testimonial";
export default function Testimonials() {
  useEffect(() => {
    console.log("came");
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Testimonial />
      <Footer />
    </div>
  );
}
