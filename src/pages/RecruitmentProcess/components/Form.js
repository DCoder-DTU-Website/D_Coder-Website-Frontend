import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { TextField, Button, Grid} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { DatePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import api from "../../../api/apiClient";
import { useFormik,ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import formurlencoded from "form-urlencoded";
import { Classnames } from "react-alice-carousel";
import { classExpression } from "@babel/types";
import "./Form.css"
import ThankYouPage from "../ThankYouPage"
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Require.").min(4).max(30),
  roll: Yup.string().required("Roll Number is Required"),
  phone: Yup.number().required("Phone number is Required"),
  email: Yup.string()
    .required("Email is Required")
    .email("Email must be Vaild")
    .max(255),
  dob: Yup.date().required("Date of Birth is Required"),
  branch: Yup.string().required("Branch is Required"),
  techStack: Yup.string().required("TechStack is Required"),
  codingLanguage: Yup.string().required("Coding language is Required"),
  whyJoin: Yup.string()
    .required("Reason for joining is Required")
    .min(10)
    .max(100),
  expect: Yup.string().required("Enter your expectations..").min(10).max(100),
});

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-80 lg:w-5/12 xl:w-80 xl:mx-32 flex-shrink-0 h-80 w-80 md:h-64  bg-center sm:w-1/3  sm:mx-8 md:mx-16 lg:mx-24`,
]);

// const branches = [
//   { value: "BT", label: "Bio Technology" },
//   { value: "CHE", label: "Chemical Engineering" },
//   { value: "CE", label: "Civil Engineering" },
//   { value: "COE", label: "Computer Scinece Engineering" },
//   { value: "EE", label: "Electrical Engineering" },
//   { value: "ECE", label: "Electronics and Communication Engineering" },
//   { value: "EP", label: "Engineering Physics" },
//   { value: "ENE", label: "Environmental Engineering" },
//   { value: "IT", label: "Information Technology" },
//   { value: "MCE", label: "Mathematics and Computing" },
//   { value: "ME", label: "Mechanical Engineering" },
//   {
//     value: "MAM",
//     label: "Mechanical with specialization in Automotive Engineering",
//   },
//   { value: "PIE", label: "Production and Industrial Engineering" },
//   { value: "SE", label: "Software Engineering" },
// ];

export default function Form() {

  const [uploading, setUploading] = useState(false);
  // const [branch, setBranches] = React.useState(" ");
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
      }).then(()=>{
        window.location= "/thankyou"
      });
      setUploading(false);
    } catch (err) {
      swal({
        title: "Unable to submit your application! Try Again Later!",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      })
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
        width: "70vw",
        height: "220vh",
        backgroundColor: "rgb(26,32,44)",
        borderRadius: "20px",
        marginTop: "40vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="ContentRF"
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
        <div
          style={{
            backgroundColor: "white",
            width: "100vw",
            color: "black",
            marginBottom: "15vh",
          }}
        >
          <div
            style={{
              // fontSize: "6vw",
              textAlign: "center",
              backgroundColor: "white",
              fontWeight: "300",
            }}
            className="changefont sizeH1"
          >
            Join D_CODER!
          </div>
          <div
            style={{
              // fontSize: "3vw",
              textAlign: "center",
              backgroundColor: "white",
              marginTop: "1vw",
              marginBottom: "2vw",
              fontWeight: "700",
            }}
            className="changefont sizeH2"
          >
            Registration Form
          </div>
        </div>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4}>
            <Image
              id="imgRF"
              imageSrc={"https://source.unsplash.com/user/erondu/900x900"}
            />
          </Grid>
          <Grid
            container
            item
            xs={8}
            direction="row"
            className={"LeftTextFieldImage"}
          >
            <Grid item xs={12}>
              <div
                style={{
                  width: "50rem",
                  marginBottom: "-0.5rem",
                }}
                className={"textFieldLeft changefont marginRF"}
              >
                <TextField
                  placeholder="Name"
                  label="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  style={{ width: "50%" }}
                  InputLabelProps={{
                    style: { color: "white", borderColor: "white" },
                  }}
                  InputProps={{ className: "InputLabelStyle" }}
                />
                {/* <ErrorMessage name="name" /> */}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  width: "50rem",
                  marginBottom: "-0.5rem",
                }}
                className={"textFieldLeft changefont marginRF"}
              >
                <TextField
                  placeholder="Roll Number"
                  label="Roll Number"
                  name="roll"
                  value={formik.values.roll}
                  onChange={formik.handleChange}
                  style={{ width: "50%" }}
                  InputLabelProps={{
                    style: { color: "white", borderColor: "white" },
                  }}
                  InputProps={{ className: "InputLabelStyle" }}
                />
                {/* <ErrorMessage name="roll" /> */}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  width: "50rem",
                  marginBottom: "-0.2rem",
                }}
                className={"textFieldLeft changefont marginRF"}
              >
                <TextField
                  placeholder="Mobile"
                  label="Mobile"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  style={{ width: "50%" }}
                  InputLabelProps={{
                    style: {
                      color: "white",
                      borderColor: "white",
                    },
                  }}
                  InputProps={{ className: "InputLabelStyle" }}
                />
                {/* <ErrorMessage name="phone" /> */}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            width: "120vw",
            marginLeft: "5rem",
          }}
          className={"textField shift changefont marginRF"}
        >
          <TextField
            placeholder="Email"
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            style={{ width: "50%", marginBottom: "1rem" }}
            InputLabelProps={{
              style: { color: "white", borderColor: "white" },
            }}
            InputProps={{ className: "InputLabelStyle" }}
          />
          {/* <ErrorMessage name="email" /> */}
        </div>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className={"directionChange marginRF"}
        >
          <Grid item xs={6}>
            <div
              style={{
                justifyContent: "left",
                marginLeft: "7rem",
              }}
              className={"textField shift changefont marginRF"}
            >
              <TextField
                placeholder="DOB"
                label="Date Of Birth"
                name="dob"
                type="date"
                format={"Select"}
                defaultValue="Select"
                value={formik.values.dob}
                onChange={formik.handleChange}
                style={{
                  width: "15rem",
                  color: "white",
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                    // borderColor: "white",
                  },
                }}
                InputProps={{
                  // className: "InputLabelStyle",
                  style: {
                    padding: "1rem 0.6rem 0rem 0.8rem",
                    borderRadius: "0.8rem",
                    height: "4rem",
                    boxShadow: "5px 2px 8px 2px rgba(0,0,0,0.25)",
                    margin: "4rem 0rem 1rem 0rem",
                    backgroundColor: "rgb(43, 50, 65)",
                  },
                }}
                className="dob"
              />
              {/* <ErrorMessage name="dob" /> */}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                justifyContent: "left",
                marginTop: "3.5rem",
                marginLeft: "4.2rem",
              }}
              className={"textField branch selectbox shift changefont marginRF"}
            >
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "white", margin: "0rem -3rem 7.8rem 0rem" }}
              >
                Branch
              </InputLabel>
              <Select
                placeholder="Branch"
                label="Branch"
                name="branch"
                value={formik.values.branch}
                onChange={formik.handleChange}
                style={{
                  width: "15rem",
                  color: "white",
                  height: "4rem",
                  // backgroundColor: "white",
                  padding: "1rem 1.5rem 0rem 0.8rem",
                  borderRadius: "0.8rem",
                  boxShadow: "5px 2px 8px 2px rgba(0,0,0,0.25)",
                  // margin: "3.5rem 0rem",
                  backgroundColor: "rgb(43, 50, 65)",
                }}
                className="color"
              >
                <MenuItem value={"BT"}>Bio Technology</MenuItem>
                <MenuItem value={"CHE"}>Chemical Engineering</MenuItem>
                <MenuItem value={"CE"}>Civil Engineering</MenuItem>
                <MenuItem value={"COE"}>Computer Engineering</MenuItem>
                <MenuItem value={"EE"}>Electrical Engineering</MenuItem>
                <MenuItem value={"ECE"}>
                  Electronics and Communication Engineering
                </MenuItem>
                <MenuItem value={"EP"}>Engineering Physics</MenuItem>
                <MenuItem value={"ENE"}>Environmental Engineering</MenuItem>
                <MenuItem value={"IT"}>Information Technology</MenuItem>
                <MenuItem value={"MCE"}>Mathematics and Computing</MenuItem>
                <MenuItem value={"ME"}>Mechanical Engineering</MenuItem>
                <MenuItem value={"MAM"}>
                  Mechanical with specialization in Automotive Engineering
                </MenuItem>
                <MenuItem value={"PIE"}>
                  Production and Industrial Engineering
                </MenuItem>
                <MenuItem value={"SE"}>Software Engineering</MenuItem>
              </Select>
              {/* <ErrorMessage name="branch" /> */}
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            width: "120vw",
            marginLeft: "5rem",
          }}
          className={"textField shift changefont marginRF"}
        >
          <TextField
            placeholder="Tech Stack"
            label="Tech Stack"
            name="techStack"
            value={formik.values.techStack}
            onChange={formik.handleChange}
            style={{ width: "50%", marginTop: "-3rem" }}
            InputLabelProps={{
              style: { color: "white", borderColor: "white" },
            }}
            InputProps={{ className: "InputLabelStyle" }}
          />
          {/* <ErrorMessage name="techStack" /> */}
        </div>
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            width: "120vw",
            marginLeft: "5rem",
          }}
          className={"textField shift changefont"}
        >
          <TextField
            placeholder="Coding Language"
            label="Coding Language"
            name="codingLanguage"
            value={formik.values.codingLanguage}
            onChange={formik.handleChange}
            style={{ width: "50%", marginTop: "-0.2rem" }}
            InputLabelProps={{
              style: { color: "white", borderColor: "white" },
            }}
            InputProps={{ className: "InputLabelStyle" }}
          />
          {/* <ErrorMessage name="codingLanguage" /> */}
        </div>
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            width: "120vw",
            marginLeft: "5rem",
          }}
          className={"textField shift changefont marginRF"}
        >
          <TextField
            placeholder="Why you want to join D_CODER?"
            label="Why you want to join D_CODER?"
            name="whyJoin"
            value={formik.values.whyJoin}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
            InputLabelProps={{
              style: { color: "white", borderColor: "white", width: "16rem" },
            }}
            InputProps={{ className: "InputLabelStyle" }}
          />
          {/* <ErrorMessage name="whyJoin" /> */}
        </div>
        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            width: "120vw",
            marginLeft: "5rem",
          }}
          className={"textField shift changefont marginRF"}
        >
          <TextField
            placeholder="Expectations from D_CODER"
            label="Expectations from D_CODER"
            name="expect"
            value={formik.values.expect}
            onChange={formik.handleChange}
            style={{ width: "50%" }}
            InputLabelProps={{
              style: { color: "white", borderColor: "white" },
            }}
            InputProps={{ className: "InputLabelStyle" }}
          />
          {/* <ErrorMessage name="expect" /> */}
        </div>
        <Button
          disabled={uploading}
          variant="contained"
          style={{
            backgroundColor: "white",
            fontWeight: "bold",
            marginTop: "3rem",
            marginBottom: "5rem",
            fontFamily: "Poppins",
          }}
          type="submit"
        >
          Apply Now! 🍻
        </Button>
      </form>
    </div>
  );
}
