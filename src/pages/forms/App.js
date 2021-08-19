import React, { useState, useEffect } from "react";
import api from "../../api/apiClient";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import MinNavbar from "components/hero/MinNavbar";
import Footer from "components/footers/Footer";

import "./App.css";

const Container = tw.div`relative bg-gray-900`;
function EventPage() {
  const [form, setForm] = useState([]);
  const params = useParams();
  const id = params.id;
  const getForms = async () => {
    try {
      const { data } = await api.get("/forms/all");
      setForm(data.data.find((x) => x._id === id));
      console.log(
        "DATA: ",
        data.data.find((x) => x._id === id)
      );
    } catch (err) {
      console.log("Could not retrieve Events!", err);
    }
  };

  useEffect(() => {
    getForms();
  });

  // const compareDate = (date) => {
  //   var a = new Date();
  //   var day = a.getDate();
  //   var month = a.getMonth();
  //   var year = a.getFullYear();
  //   var year1 = parseInt(date.slice(0, 4));
  //   var month1 = parseInt(date.slice(5, 7));
  //   var day1 = parseInt(date.slice(8, 10));
  //   if (year1 < year || month1 < month || day1 < day) {
  //     return true;
  //   }
  //   return false;
  // };
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
            height="1000"
            frameborder="0"
            marginheight="10"
            marginwidth="0"
            title="dcoderform"
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
