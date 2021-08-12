import React, { useState, useEffect } from "react";
import api from "../../api/apiClient";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import MinNavbar from "components/hero/MinNavbar";
import Footer from "components/footers/Footer";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";

import "./App.css";

import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const Container = tw.div`relative bg-gray-900`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Subheading = tw.h3`text-5xl mt-5 font-bold text-blue-600`;
const Content = tw.div`mt-16`;
function EventPage() {
  const [form, setForm] = useState([]);
  const params = useParams();
  const id = params.id;
  const getForms = async () => {
    try {
      const { data } = await api.get("/forms/all");
      setForm(data.data.find((x) => x._id == id));
      console.log(
        "DATA: ",
        data.data.find((x) => x._id == id)
      );
    } catch (err) {
      console.log("Could not retrieve Events!", err);
    }
  };

  useEffect(() => {
    getForms();
  }, []);

  return (
    <>
      <MinNavbar />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px 0px",
        }}
      >
        <Container
          className="EventPage-root"
          style={{ width: "70%", marginTop: "3%" }}
        >
          <iframe
            src={form?.form_url ?? ""}
            width="100%"
            height="1082"
            frameborder="0"
            marginheight="10"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
