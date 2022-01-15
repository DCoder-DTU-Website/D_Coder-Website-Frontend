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
import axios from "axios";
import api from "../../../api/apiClient";
import { Formik, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import formurlencoded from "form-urlencoded";
import "./Form.css";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Chip from "@material-ui/core/Chip";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import ThankYou_RF from "../../../images/ThankYou-RF.jpeg";
import { ReactComponent as InstagramIcon } from "../../../images/instagram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../../images/youtube-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../../images/linkedin-icon.svg";

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
const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-500 hover:text-gray-500 transition duration-300 mx-5 md:mx-8 xl:mx-8 lg:mx-8`}
  svg {
    ${tw`w-8 h-8`}
  }
`;

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
  let dte = new Date();
  dte = dte.toISOString().substring(0, 10);
  const [imgUploading, setImgUploading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState("");

  const [allEmails, setAllEmails] = useState([]);
  const [allMobile, setAllMobile] = useState([]);
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
    whyJoin: Yup.string()
      .required("Reason for joining is Required")
      .min(10)
      .max(100),
    expect: Yup.string().required("Enter your expectations..").min(10).max(100),
    image: Yup.string().required("Image is required"),
  });

  useEffect(async () => {
    const applicants = await api.get("/applicants/all");
    let res = [];
    let res2 = [];
    applicants.data.forEach((applicant) => {
      res.push(applicant.email);
      res2.push(applicant.phone);
    });
    setAllEmails(res);
    setAllMobile(res2);
  }, []);

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
      await api.post("/applicants", formurlencoded(applicantData));
      // swal({
      //   title: "Successfully Submitted Your Application!",
      //   icon: "success",
      //   buttons: true,
      //   closeOnClickOutside: true,
      //   closeOnEsc: true,
      // }).then(() => {
      //   window.location = "/thankyou";
      // });
      handleOpen();
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

  const updateTechStack = (formik, e) => {
    const ts = e.target.innerText;
    if (formik.values.techStack.includes(ts)) {
      formik.setFieldValue(
        "techStack",
        formik.values.techStack.filter((elem) => elem !== ts)
      );
    } else {
      formik.setFieldValue("techStack", [...formik.values.techStack, ts]);
    }
  };

  const updateCodingLanguages = (formik, e) => {
    const ts = e.target.innerText;
    if (formik.values.codingLanguage.includes(ts)) {
      formik.setFieldValue(
        "codingLanguage",
        formik.values.codingLanguage.filter((elem) => elem !== ts)
      );
    } else {
      formik.setFieldValue("codingLanguage", [
        ...formik.values.codingLanguage,
        ts,
      ]);
    }
  };

  const validateEmail = (value) => {
    let error;
    if (allEmails.includes(value)) {
      error = "Email Address already Registered!";
    }
    return error;
  };

  const validateMobile = (value) => {
    let error;
    if (allMobile.includes(value)) {
      error = "Mobile already Registered!";
    }
    return error;
  };
  //Modal start
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: "rgb(236,239,242)",
      color: "black",
      padding: theme.spacing(2, 4, 3),
      outline: 0,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      "@media (max-width: 600px)":{
        width:300,
      }
    },
  }));

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getModalStyle() {
    return {
      top: `${50}%`,
      left: `${50}%`,
      transform: `translate(-${50}%, -${50}%)`,
    };
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img id="ThankYou_RF-img" src={ThankYou_RF}></img>
      <div id="ThankYou_RF-content">
        <p id="ThankYou_RF-title">THANK YOU</p>
        <p id="ThankYou_RF-description">
          The form was filled successfully. You will be receive all the necessary
          details in your email soon.
        </p>
        <div className="ThankYou_RF-socialMedia">
          <p>FOLLOW US</p>
          <SocialLinksContainer>
            <SocialLink
              target="_blank"
              href="https://www.instagram.com/d_coder_dtu/"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.youtube.com/channel/UCz0Bs3AXaa5ccEJBsLxyXzg"
            >
              <YoutubeIcon />
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/company/dcoder/mycompany/"
            >
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
        </div>
      </div>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      <div className="ContentRF">
        <Formik
          initialValues={{
            name: "",
            roll: "2K21/",
            phone: "",
            email: "@dtu.ac.in",
            dob: "",
            branch: "",
            techStack: [],
            codingLanguage: [],
            whyJoin: "",
            expect: "",
            image: backgroundImage,
          }}
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
                  Registration Form{" "}
                  <p style={{ fontSize: "0.6em" }}>
                    (Fields marked with * are mandatory)
                  </p>
                </div>
              </div>

              <Grid container xs={12} className="main-container-1">
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <Grid
                    item
                    style={{
                      width: "100%",
                      margin: "0.5em",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Image id="imgRF" imageSrc={formik.values.image} />
                    <Grid item>
                      <div>
                        <label
                          for="files"
                          className="UploadImageLabel RecruitmentForm-img-upload-btn"
                        >
                          {!imgUploading &&
                          formik.values.image === backgroundImage
                            ? "Select Image"
                            : "Change Image"}
                          {imgUploading && "Uploading..."}
                        </label>
                        <input
                          disabled={imgUploading}
                          id="files"
                          type="file"
                          name="image"
                          placeholder="image"
                          style={{ visibility: "hidden" }}
                          onChange={(event) => {
                            setImgUploading(true);
                            try {
                              if (event.target.files[0].size > 1000000) {
                                throw new Error("Image Size Exceeded!");
                              }
                              const formData = new FormData();
                              formData.append("file", event.target.files[0]);
                              formData.append("upload_preset", "gekvwtzt");
                              axios
                                .post(
                                  "https://api.cloudinary.com/v1_1/dcoderdtu/image/upload",
                                  formData
                                )
                                .then((response) => {
                                  formik.setFieldValue(
                                    "image",
                                    response.data.url
                                  );
                                  swal({
                                    title: "Successfully Uploaded Image!",
                                    icon: "success",
                                    buttons: true,
                                    closeOnClickOutside: true,
                                    closeOnEsc: true,
                                  });
                                });
                              setImgUploading(false);
                            } catch (err) {
                              setImgUploading(false);
                              if (err.message === "Image Size Exceeded!") {
                                swal({
                                  title: "Image size must be less than 1MB!",
                                  icon: "error",
                                  buttons: true,
                                  closeOnClickOutside: true,
                                  closeOnEsc: true,
                                });
                              } else {
                                swal({
                                  title:
                                    "Unable to submit your application! Try Again Later!",
                                  icon: "error",
                                  buttons: true,
                                  closeOnClickOutside: true,
                                  closeOnEsc: true,
                                });
                              }
                            }
                          }}
                          style={{ width: "0" }}
                        ></input>
                      </div>
                    </Grid>
                    {formik.values.image == "" ? (
                      <div>
                        <ErrorMessage render={ErrorComponent} name="image" />
                      </div>
                    ) : null}
                  </Grid>
                </Grid>
                <Grid container xs={12} sm={12} md={6} lg={6} direction="row">
                  <div
                    className={"MarginError MarginError3"}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid
                      item
                      style={{
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          marginBottom: "-0.5rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          required
                          placeholder="Name"
                          label="Name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          style={{ width: "100%" }}
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
                  <div
                    className={"MarginError MarginError3"}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid item style={{ width: "100%" }}>
                      <div
                        style={{
                          width: "100%",
                          marginBottom: "-0.5rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          required
                          placeholder="Roll Number"
                          label="Roll Number"
                          name="roll"
                          value={
                            formik.values.roll.startsWith("2K21/")
                              ? formik.values.roll
                              : "2K21/"
                          }
                          // value={formik.values.roll}
                          onChange={formik.handleChange}
                          style={{ width: "100%" }}
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
                  <div
                    className={"MarginError  MarginError3"}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid item style={{ width: "100%" }}>
                      <div
                        style={{
                          width: "100%",
                          marginBottom: "-0.5rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          required
                          placeholder="Mobile"
                          label="Mobile"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          style={{ width: "100%" }}
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

                  <div
                    className={"MarginError  MarginError3"}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Grid item style={{ width: "100%" }}>
                      <div
                        style={{
                          width: "100%",
                          marginBottom: "-0.5rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          required
                          placeholder="Email"
                          label="Email"
                          name="email"
                          value={
                            formik.values.email.endsWith("@dtu.ac.in")
                              ? formik.values.email
                              : "@dtu.ac.in"
                          }
                          // value={formik.values.email}
                          onChange={formik.handleChange}
                          style={{ width: "100%" }}
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
                  width: "100%",
                  marginBottom: "2em",
                }}
                xs={12}
              >
                <Grid item xs={12} md={4} style={{ margin: "auto 0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className={"textField shift changefont marginRF"}
                  >
                    <InputLabel
                      style={{
                        color: "white",
                      }}
                    >
                      Date Of Birth*
                    </InputLabel>
                    <TextField
                      required
                      placeholder="DOB"
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
                        inputProps: { max: dte },
                        // className: "InputLabelStyle",
                        style: {
                          padding: "1rem 0.6rem 0rem 0.8rem",
                          borderRadius: "0.8rem",
                          height: "4rem",
                          boxShadow: "5px 2px 8px 2px rgba(0,0,0,0.25)",
                          margin: "1rem 0rem 1rem 0rem",
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
                        marginTop: "-5%",
                      }}
                      className={"textField shift"}
                    >
                      <ErrorMessage render={ErrorComponent} name="dob" />
                    </div>
                  )}
                </Grid>

                <Grid item md={4} style={{ margin: "auto 0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    // style={{
                    //   marginTop: "2.78em",
                    // }}
                    className={
                      "textField branch selectbox shift changefont marginRF"
                    }
                  >
                    <InputLabel
                      style={{
                        color: "white",
                      }}
                    >
                      Branch*
                    </InputLabel>
                    <Select
                      placeholder="Branch"
                      label="Branch"
                      name="branch"
                      value={
                        formik.values.branch === ""
                          ? "SELE"
                          : formik.values.branch
                      }
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
                        margin: "1rem 0rem 1rem 0rem",
                      }}
                      className="color"
                    >
                      <option hidden value={"SELE"}>
                        Select Branch
                      </option>
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
                        marginTop: "-8%",
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
                  Field of Interest (if any)
                </FormLabel>
                <FormGroup
                  row
                  fullWidth
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="DSA"
                        label="DSA"
                        isChosen={formik.values.techStack.includes("DSA")}
                        onClick={(e) => updateTechStack(formik, e)}
                        name="DSA"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="web"
                        label="Web Dev"
                        isChosen={formik.values.techStack.includes("Web Dev")}
                        onClick={(e) => updateTechStack(formik, e)}
                        name="Web Dev"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="ML & AI"
                        label="ML & AI"
                        isChosen={formik.values.techStack.includes("ML & AI")}
                        onClick={(e) => updateTechStack(formik, e)}
                        name="ML & AI"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="App Dev"
                        label="App Dev"
                        isChosen={formik.values.techStack.includes("App Dev")}
                        onClick={(e) => updateTechStack(formik, e)}
                        name="App Dev"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="Blockchain"
                        label="Blockchain"
                        isChosen={formik.values.techStack.includes(
                          "Blockchain"
                        )}
                        onClick={(e) => updateTechStack(formik, e)}
                        name="Blockchain"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
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
                  Coding Languages (if any)
                </FormLabel>
                <FormGroup
                  row
                  fullWidth
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="c"
                        label="C"
                        isChosen={formik.values.codingLanguage.includes("C")}
                        onClick={(e) => updateCodingLanguages(formik, e)}
                        name="C"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="C++"
                        label="C++"
                        isChosen={formik.values.codingLanguage.includes("C++")}
                        onClick={(e) => updateCodingLanguages(formik, e)}
                        name="C++"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="Java"
                        label="Java"
                        isChosen={formik.values.codingLanguage.includes("Java")}
                        onClick={(e) => updateCodingLanguages(formik, e)}
                        name="Java"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="Python"
                        label="Python"
                        isChosen={formik.values.codingLanguage.includes(
                          "Python"
                        )}
                        onClick={(e) => updateCodingLanguages(formik, e)}
                        name="Python"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
                  />
                  <FormControlLabel
                    control={
                      <BlueCheckbox
                        id="Javascript"
                        label="Javascript"
                        isChosen={formik.values.codingLanguage.includes(
                          "Javascript"
                        )}
                        onClick={(e) => updateCodingLanguages(formik, e)}
                        name="Javascript"
                        clickable
                      />
                    }
                    style={{ margin: "20px 1em 0" }}
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
                    width: "70%",
                    margin: "1.5em auto",
                  }}
                  className={"textField shift changefont marginRF mgin"}
                >
                  <TextField
                    required
                    placeholder="Why you want to join D_CODER?"
                    label="Why you want to join D_CODER?"
                    name="whyJoin"
                    value={formik.values.whyJoin}
                    onChange={formik.handleChange}
                    style={{
                      width: "100%",
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
                    width: "70%",
                    margin: "1.5em auto",
                  }}
                  className={"textField shift changefont marginRF mgin"}
                >
                  <TextField
                    required
                    placeholder="Expectations From D_CODER"
                    label="Expectations From D_CODER"
                    name="expect"
                    value={formik.values.expect}
                    onChange={formik.handleChange}
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                        borderColor: "white",
                      },
                    }}
                    InputProps={{ className: "InputLabelStyle" }}
                    className="mgin"
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
                  fontWeight: "bold",
                  margin: "1.5em auto",
                  fontFamily: "Poppins",
                }}
                type="submit"
                className="RecruitmentForm-ApplyNowbtn"
              >
                Apply Now!
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}

export default Form;
