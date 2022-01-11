import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  TextField,
  Button,
  Grid,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Upload from "components/features/Upload/Upload";
import axios from "axios";
import { DatePicker } from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import api from "../../../api/apiClient";
import { Formik, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import formurlencoded from "form-urlencoded";
import { Classnames } from "react-alice-carousel";
import { classExpression } from "@babel/types";
import "./Form.css";
import ThankYouPage from "../ThankYouPage";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Chip from "@material-ui/core/Chip";
import { IconButton } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const BlueCheckbox = withStyles({
  root: {
    backgroundColor: " #001eff",
    color: "white",
  },
})((props) => (
  <Chip
    color="#001eff"
    style={
      props.isChosen
        ? { backgroundColor: "#3d5afe" }
        : { backgroundColor: "#808080" }
    }
    {...props}
  />
));

const backgroundImage =
  "https://res.cloudinary.com/dcoderdtu/image/upload/v1621400604/WhatsApp_Image_2021-05-19_at_10.21.20_ekkng5.jpg";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required").min(4).max(30),
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
  image: Yup.string().required("Enter Image"),
});

const theme = createMuiTheme({
  overrides: {
    MuiSelect: {
      icon: {
        color: "white",
      },
    },
    MuiFilledInput: {
      input: {
        color: "white",
      },
    },
    MuiInputBase: {
      input: {
        color: "white",
        padding: "0rem 0 1rem",
      },
    },
    MuiList: {
      root: {
        color: "white",
        backgroundColor: "rgb(37, 44, 57)",
      },
    },
  },
});

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-32 lg:w-5/12 xl:w-64 xl:h-64 xl:mx-32 flex-shrink-0 my-1 h-64 w-64 md:h-32  bg-center sm:w-1/3  sm:mx-8 md:mx-16 lg:mx-24`,
]);

const ErrorComponent = (msg) => (
  <div
    style={{
      color: "red",
      justifyContent: "left",
      marginTop: "1.2rem",
      marginBottom: "1.5rem",
    }}
  >
    {msg}
  </div>
);

function Form() {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState("");
  const [data, setData] = useState({
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
    image: "",
  });
  useEffect(() => {
    try {
      const formData = new FormData();
      console.log(images);
      formData.append("file", images);
      formData.append("upload_preset", "gekvwtzt");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dcoderdtu/image/upload",
          formData
        )
        .then((response) => {
          // console.log(response.data.url);
          setData((prevData) => {
            prevData.image = response.data.url;
          });
          console.log(response.data.url);
          // console.log(data.image)
        });
    } catch (err) {
      console.error(err, "Image Upload Failed!");
    }
  }, [images]);
  const clickSubmit = async (values, actions) => {
    setUploading(true);
    try {
      let applicantData = values;
      actions.resetForm();
      applicantData = {
        ...applicantData,
        isAccepted: false,
        interviewCompleted: false,
        interviewLink: "",
        interviewTime: "",
        interviewerName: "",
      };
      console.log(applicantData);
      await api.post("/applicants", formurlencoded(applicantData));
      swal({
        title: "Successfully Submitted Your Application!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      }).then(() => {
        window.location = "/thankyou";
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
  // const formik = useFormik({
  //   initialValues: data,
  //   validationSchema,
  //   onSubmit: clickSubmit,
  // });

  return (
    <ThemeProvider theme={theme}>
      <div className="ContentRF">
        <Formik
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={clickSubmit}
        >
          {(formik) => (
            <form
              style={{
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
                  marginBottom: "5em",
                }}
              >
                <div
                  style={{
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
                    textAlign: "center",
                    backgroundColor: "white",
                    fontWeight: "700",
                    margin: "0.3em 0",
                  }}
                  className="changefont sizeH2"
                >
                  Registration Form
                </div>
              </div>
              <Grid container xs={9} justifyContent="center">
                <Grid item xs={5}>
                  {images != "" ? (
                    <Image id="imgRF" imageSrc={formik.initialValues.image} />
                  ) : (
                    <Image id="imgRF" imageSrc={backgroundImage} />
                  )}
                  <Grid
                    item
                    style={{
                      left: window.innerWidth <= 450 ? "22vw" : "13vw",
                      marginTop: "0.5em",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Grid item>
                      <div>
                        <label for="files" className="UploadImageLabel">
                          Select Image
                        </label>
                        <input
                          id="files"
                          type="file"
                          name="image"
                          placeholder="image"
                          style={{ visibility: "hidden" }}
                          onChange={(event) => {
                            setImages(event.target.files[0]);
                          }}
                        ></input>
                      </div>
                    </Grid>
                    {formik.initialValues.image == "" ? (
                      <div className="ErrorImageLeft">
                        <ErrorMessage render={ErrorComponent} name="image" />
                      </div>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid
                  container
                  xs={5}
                  direction="row"
                  className={"LeftTextFieldImage"}
                >
                  <div className={"MarginError MarginError3"}>
                    <Grid item>
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
                      </div>
                    </Grid>
                    {formik.errors.name && formik.touched.name && (
                      <ErrorMessage render={ErrorComponent} name="name" />
                    )}
                  </div>
                  <div className={"MarginError MarginError3"}>
                    <Grid item>
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
                      </div>
                    </Grid>
                    {formik.errors.roll && formik.touched.roll && (
                      <ErrorMessage render={ErrorComponent} name="roll" />
                    )}
                  </div>
                  <div className={"MarginError  MarginError3"}>
                    <Grid item xs={8}>
                      <div
                        style={{
                          width: "50rem",
                          marginBottom: "-0.5rem",
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
                      </div>
                    </Grid>
                    {formik.errors.phone && formik.touched.phone && (
                      <ErrorMessage render={ErrorComponent} name="phone" />
                    )}
                  </div>

                  <div className={"MarginError  MarginError3"}>
                    <Grid item xs={8}>
                      <div
                        style={{
                          width: "50rem",
                          marginBottom: "-0.5rem",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          placeholder="Email"
                          label="Email"
                          name="email"
                          value={formik.values.email}
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
                      </div>
                    </Grid>
                    {formik.errors.email && formik.touched.email && (
                      <ErrorMessage render={ErrorComponent} name="email" />
                    )}
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "70%",
                }}
              >
                <Grid item style={{ width: "50%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
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
                  </div>
                  {formik.errors.dob && formik.touched.dob && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-2.78em",
                      }}
                      className={"textField shift"}
                    >
                      <ErrorMessage render={ErrorComponent} name="dob" />
                    </div>
                  )}
                </Grid>

                <Grid item style={{ width: "45%" }}>
                  <div
                    style={{
                      marginTop: "2.78em",
                    }}
                    className={
                      "textField branch selectbox shift changefont marginRF"
                    }
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{
                        color: "white",
                        margin: "0rem -3rem 7.8rem 0rem",
                      }}
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
                      <MenuItem value={"ENE"}>
                        Environmental Engineering
                      </MenuItem>
                      <MenuItem value={"IT"}>Information Technology</MenuItem>
                      <MenuItem value={"MCE"}>
                        Mathematics and Computing
                      </MenuItem>
                      <MenuItem value={"ME"}>Mechanical Engineering</MenuItem>
                      <MenuItem value={"MAM"}>
                        Mechanical with specialization in Automotive Engineering
                      </MenuItem>
                      <MenuItem value={"PIE"}>
                        Production and Industrial Engineering
                      </MenuItem>
                      <MenuItem value={"SE"}>Software Engineering</MenuItem>
                    </Select>
                  </div>
                  {formik.errors.branch && formik.touched.branch && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "-4.2em",
                      }}
                      className={"textField shift"}
                    >
                      <ErrorMessage render={ErrorComponent} name="branch" />
                    </div>
                  )}
                </Grid>
              </Grid>
              <Grid
                item
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2em",
                }}
              >
                <FormLabel
                  id="demo-simple-select-label"
                  style={{
                    color: "white",
                  }}
                >
                  Tech Stack
                </FormLabel>
                <FormGroup row fullWidth>
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                </FormGroup>
              </Grid>
              <Grid
                item
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2em",
                }}
              >
                <FormLabel
                  id="demo-simple-select-label"
                  style={{
                    color: "white",
                  }}
                >
                  Coding Languages
                </FormLabel>
                <FormGroup row fullWidth>
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        // isChosen={props.data.techStack.includes("Web Dev")}
                        // onClick={(e) => props.onTechChange(e)}
                        // name="Web Dev"
                        // clickable
                        // disabled={props.editable ? false : true}
                      />
                    }
                    style={{ marginTop: "20px" }}
                  />
                </FormGroup>
              </Grid>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "75%",
                    margin: "1.5em auto",
                  }}
                  className={"textField shift changefont marginRF"}
                >
                  <TextField
                    placeholder="Why you want to join D_CODER?"
                    label="Why you want to join D_CODER?"
                    name="whyJoin"
                    value={formik.values.whyJoin}
                    onChange={formik.handleChange}
                    style={{
                      width: "70%",
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                        borderColor: "white",
                      },
                    }}
                    InputProps={{ className: "InputLabelStyle" }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {formik.errors.whyJoin && formik.touched.whyJoin && (
                    <ErrorMessage render={ErrorComponent} name="whyJoin" />
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "75%",
                    margin: "1.5em auto",
                  }}
                  className={"textField shift changefont marginRF"}
                >
                  <TextField
                    placeholder="Expectations From D_CODER"
                    label="Expectations From D_CODER"
                    name="expect"
                    value={formik.values.expect}
                    onChange={formik.handleChange}
                    style={{
                      width: "70%",
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                        borderColor: "white",
                      },
                    }}
                    InputProps={{ className: "InputLabelStyle" }}
                  />
                </div>
                <div>
                  {formik.errors.expect && formik.touched.expect && (
                    <ErrorMessage render={ErrorComponent} name="expect" />
                  )}
                </div>
              </div>

              <Button
                disabled={uploading}
                variant="contained"
                style={{
                  backgroundColor: "white",
                  fontWeight: "bold",
                  margin: "1.5em auto",
                  fontFamily: "Poppins",
                }}
                type="submit"
              >
                Apply Now! 🍻
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}

export default Form;
