import React, { useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import api from "../../../api/apiClient";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import formurlencoded from "form-urlencoded";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  roll: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().required(),
  dob: Yup.string().required(),
  branch: Yup.string().required(),
  techStack: Yup.string().required(),
  codingLanguage: Yup.string().required(),
  whyJoin: Yup.string().required(),
  expect: Yup.string().required(),
});

export default function Form() {
  const [uploading, setUploading] = useState(false);
  const clickSubmit = async () => {
    setUploading(true);
    try {
      let applicantData = formik.values;
      formik.resetForm();
      applicantData = {
        ...applicantData,
        isAccepted: false,
        interviewCompleted: false,
        inteviewLink: "",
        interviewTime: "",
        interviewerName: "",
      };
      await api.post("/applicants", formurlencoded(applicantData));
      swal({
        title: "Successfully Submitted Your Application!",
        icon: "success",
        buttons: true,  
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      setUploading(false);
    } catch (err) {
      swal({
        title: "Unable to submit your application! Try Again Later!",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    }
    setUploading(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      roll: "",
      phone: "",
      email: "",
      dob: "",
      branch: "",
      techStack: "",
      codingLanguage: "",
      whyJoin: "",
      expect: "",
    },
    validationSchema,
    onSubmit: clickSubmit,
  });
  return (
    <div
      style={{
        width: "60vw",
        height: "200vh",
        backgroundColor: "white",
        borderRadius: "20px",
      }}
    >
      <form
        style={{
          height: "90%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        onSubmit={formik.handleSubmit}
        method="POST"
      >
        <div style={{ fontSize: "80px" }}>Join D_CODER!</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Name"
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Roll Number"
            label="Roll Number"
            name="roll"
            value={formik.values.roll}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Mobile"
            label="Mobile"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Email"
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="DOB"
            label="DOB"
            name="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Branch"
            label="Branch"
            name="branch"
            value={formik.values.branch}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Tech Stack"
            label="Tech Stack"
            name="techStack"
            value={formik.values.techStack}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Coding Language"
            label="Coding Language"
            name="codingLanguage"
            value={formik.values.codingLanguage}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Why you want to join D_CODER?"
            label="Why you want to join D_CODER?"
            name="whyJoin"
            value={formik.values.whyJoin}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Expectations from D_CODER"
            label="Expectations from D_CODER"
            name="expect"
            value={formik.values.expect}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
          />
        </div>
        <Button
          disabled={uploading}
          variant="contained"
          color="primary"
          type="submit"
        >
          Apply Now! 🍻
        </Button>
      </form>
    </div>
  );
}
