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
  const [anyChange, setAnyChange] = useState(false);
  const getProfile = async () => {
    const res = await api.post("/userprofile", { user });
    const userProfile = res.data;
    setData(userProfile);
  };

  const getApplicants = async () => {
    console.log("hello");
    const res = await api.post("/applicants/all-recruiter", {
      userId: data._id,
    });
    const app = res.data;
    setApplicants(app);
    // console.log(applicants, "applicants");
  };
  useEffect(() => {
    getProfile();
  }, [user]);
  useEffect(() => {
    if (data?._id) {
      console.log("FUNCTION UPDATE CALLED!");
      getApplicants();
    }
  }, [anyChange, data]);
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
    if (details.internviewTime < new Date()) {
      await swal({
        title: "Interview time cannot be in the past",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      return;
    }

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

  const setMarks = async (
    id,
    taskCompletionScore,
    codingSkillsScore,
    enthusiasmScore,
    remarksByRecruiter
  ) => {
    try {
      if (!remarksByRecruiter) {
        await swal({
          title: "Remarks is Missing",
          icon: "error",
          buttons: true,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
        return;
      }
      if (taskCompletionScore > 10 || taskCompletionScore < 0) {
        await swal({
          title: "Task Completion Score is Wrong",
          icon: "error",
          buttons: true,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
        return;
      }
      if (codingSkillsScore > 10 || codingSkillsScore < 0) {
        await swal({
          title: "Coding Skills Score is Wrong",
          icon: "error",
          buttons: true,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
        return;
      }
      if (enthusiasmScore > 10 || enthusiasmScore < 0) {
        await swal({
          title: "Enthusiasm Score is Wrong",
          icon: "error",
          buttons: true,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
        return;
      }
      const res = await api.post("/applicants/setMarks", {
        id,
        taskCompletionScore,
        codingSkillsScore,
        enthusiasmScore,
        remarksByRecruiter,
      });
      await swal({
        title: "Applicant Marked Successfully",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    } catch (e) {
      await swal({
        title: "An Error Occurred",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    }
  };

  return (
    <RContext.Provider
      value={{
        data,
        openNav,
        setOpenNav,
        recruiter,
        applicants,
        setInterview,
        setMarks,
        anyChange,
        setAnyChange,
      }}
    >
      {props.children}
    </RContext.Provider>
  );
};

export default RState;
