import React, { useState, useEffect } from "react";
import RContext from "./RContext";
import api from "../../../api/apiClient";
import useUser from "../../../useUser";
import swal from "sweetalert";

const RState = (props) => {
  const him = "Vaibhav Gupta";
  const { user } = useUser();
  const [data, setData] = useState({});
  const [applicants, setApplicants] = useState([]);
  const [openNav, setOpenNav] = useState(false);
  const getProfile = async () => {
    const res = await api.post("/userprofile", { user });
    const userProfile = res.data;
    setData(userProfile);
  };
  const getApplicants = async () => {
    const res = await api.get("/applicants/all-recruiter");
    const app = res.data;
    setApplicants(app);
  };
  useEffect(() => {
    getProfile();
    getApplicants();
  }, [user]);
  const recruiter = {
    name: `${data.firstName + " " + data.lastName}`,
    image: `${data.image}`,
    gMeet: "https://meet.google.com",
  };

  const setInterview = async (
    id,
    interviewTime,
    interviewLink,
    interviewerName = `${data.firstName + " " + data.lastName}`
  ) => {
    const details = {
      id,
      interviewTime,
      interviewLink,
      interviewerName,
    };
    for (let i = 0; i < applicants.length; i++) {
      if (applicants[i]._id === id) {
        if (applicants[i].interviewLink) {
          await swal({
            title: "Interview is already scheduled",
            icon: "error",
            buttons: true,
            closeOnClickOutside: true,
            closeOnEsc: true,
          });
          return;
        }
      }
    }

    if (interviewLink === "") {
      await swal({
        title: "Interview Link is Missing or Wrong",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      return;
    }
    const res = await api.post("/applicants/setInterview", details);
    await swal({
      title: "Interview Set Successfully",
      icon: "success",
      buttons: true,
      closeOnClickOutside: true,
      closeOnEsc: true,
    });
  };

  return (
    <RContext.Provider
      value={{ data, openNav, setOpenNav, recruiter, applicants, setInterview }}
    >
      {props.children}
    </RContext.Provider>
  );
};

export default RState;
