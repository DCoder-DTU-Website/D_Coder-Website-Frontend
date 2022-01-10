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
              <Grid container spacing={10} justifyContent="center">
                <Grid item xs={4}>
                  {images != "" ? (
                    <Image id="imgRF" imageSrc={formik.initialValues.image} />
                  ) : (
                    <Image id="imgRF" imageSrc={backgroundImage} />
                  )}
                  <Grid item xs={16}>
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
                  <Grid item xs={16}>
                    {formik.initialValues.image == "" ? (
                      <div
                        style={{ width: "10rem", marginTop: "-2.1rem" }}
                        className="ErrorImageLeft"
                      >
                        <ErrorMessage render={ErrorComponent} name="image" />
                      </div>
                    ) : null}
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    className={"directionChange marginRF selectInput"}
                  >
                    {formik.errors.dob && formik.touched.dob ? (
                      <Grid
                        container
                        item
                        xs={6}
                        spacing={1}
                        direction="row"
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                          <div
                            style={{
                              justifyContent: "left",
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
                                width: "40%",
                                color: "white",
                              }}
                              InputLabelProps={{
                                style: {
                                  color: "white",
                                  // borderColor: "white",
                                },
                              }}
                              InputProps={
                                {
                                  // className: "InputLabelStyle",
                                  // style: {
                                  //   padding: "1rem 0.6rem 0rem 0.8rem",
                                  //   borderRadius: "0.8rem",
                                  //   height: "4rem",
                                  //   boxShadow: "5px 2px 8px 2px rgba(0,0,0,0.25)",
                                  //   margin: "4rem 0rem 1rem 0rem",
                                  //   backgroundColor: "rgb(43, 50, 65)",
                                  // },
                                }
                              }
                              className="dob"
                            />
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={{}}
                          // className={"textField shift changefont marginRF"}
                        >
                          <div className="ErrorMessagedob">
                            <ErrorMessage render={ErrorComponent} name="dob" />
                          </div>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item xs={6}>
                        <div
                          style={{
                            justifyContent: "left",
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
                              width: "100%",
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
                      </Grid>
                    )}
                    {formik.errors.branch && formik.touched.branch ? (
                      <Grid
                        container
                        item
                        xs={6}
                        spacing={1}
                        direction="row"
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                          <div
                            style={{
                              justifyContent: "left",

                              marginLeft: "4.2rem",
                            }}
                            className={
                              "textField branch selectbox shift changefont marginRF"
                            }
                          >
                            <InputLabel
                              id="demo-simple-select-label"
                              style={{
                                color: "white",
                                margin: "1rem -3rem 7.8rem 0rem",
                              }}
                            >
                              Branch1
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
                                marginLeft: "-1rem",
                                backgroundColor: "rgb(43, 50, 65)",
                              }}
                              className="color"
                            >
                              <MenuItem value={"BT"}>Bio Technology</MenuItem>
                              <MenuItem value={"CHE"}>
                                Chemical Engineering
                              </MenuItem>
                              <MenuItem value={"CE"}>
                                Civil Engineering
                              </MenuItem>
                              <MenuItem value={"COE"}>
                                Computer Engineering
                              </MenuItem>
                              <MenuItem value={"EE"}>
                                Electrical Engineering
                              </MenuItem>
                              <MenuItem value={"ECE"}>
                                Electronics and Communication Engineering
                              </MenuItem>
                              <MenuItem value={"EP"}>
                                Engineering Physics
                              </MenuItem>
                              <MenuItem value={"ENE"}>
                                Environmental Engineering
                              </MenuItem>
                              <MenuItem value={"IT"}>
                                Information Technology
                              </MenuItem>
                              <MenuItem value={"MCE"}>
                                Mathematics and Computing
                              </MenuItem>
                              <MenuItem value={"ME"}>
                                Mechanical Engineering
                              </MenuItem>
                              <MenuItem value={"MAM"}>
                                Mechanical with specialization in Automotive
                                Engineering
                              </MenuItem>
                              <MenuItem value={"PIE"}>
                                Production and Industrial Engineering
                              </MenuItem>
                              <MenuItem value={"SE"}>
                                Software Engineering
                              </MenuItem>
                            </Select>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{
                            marginTop: "-5.2rem",
                            marginLeft: "4.7rem",
                          }}
                          // className={
                          //   "textField branch selectbox shift changefont marginRF"
                          // }
                        >
                          <div className="ErrorMessagebranch">
                            <ErrorMessage
                              render={ErrorComponent}
                              name="branch"
                            />
                          </div>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item xs={6}>
                        <div
                          style={{
                            justifyContent: "left",
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
                              width: "100%",
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
                            <MenuItem value={"CHE"}>
                              Chemical Engineering
                            </MenuItem>
                            <MenuItem value={"CE"}>Civil Engineering</MenuItem>
                            <MenuItem value={"COE"}>
                              Computer Engineering
                            </MenuItem>
                            <MenuItem value={"EE"}>
                              Electrical Engineering
                            </MenuItem>
                            <MenuItem value={"ECE"}>
                              Electronics and Communication Engineering
                            </MenuItem>
                            <MenuItem value={"EP"}>
                              Engineering Physics
                            </MenuItem>
                            <MenuItem value={"ENE"}>
                              Environmental Engineering
                            </MenuItem>
                            <MenuItem value={"IT"}>
                              Information Technology
                            </MenuItem>
                            <MenuItem value={"MCE"}>
                              Mathematics and Computing
                            </MenuItem>
                            <MenuItem value={"ME"}>
                              Mechanical Engineering
                            </MenuItem>
                            <MenuItem value={"MAM"}>
                              Mechanical with specialization in Automotive
                              Engineering
                            </MenuItem>
                            <MenuItem value={"PIE"}>
                              Production and Industrial Engineering
                            </MenuItem>
                            <MenuItem value={"SE"}>
                              Software Engineering
                            </MenuItem>
                          </Select>
                        </div>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  {formik.errors.name && formik.touched.name ? (
                    <div className={"MarginError1 MarginError MarginError5"}>
                      <Grid item xs={8}>
                        <div
                          style={{
                            width: "50rem",
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
                      <ErrorMessage render={ErrorComponent} name="name" />
                    </div>
                  ) : (
                    <div>
                      <div
                        style={{
                          width: "100%",
                        }}
                        className={"textField shift changefont marginRF"}
                      >
                        <TextField
                          placeholder="Name"
                          label="Name"
                          name="name"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          style={{ width: "100%", marginBottom: "3em" }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>

                      <ErrorMessage render={ErrorComponent} name="name" />
                    </div>
                  )}
                  {formik.errors.roll && formik.touched.roll ? (
                    <div className={"MarginError"}>
                      <div
                        style={{
                          width: "100%",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          placeholder="Roll Number"
                          label="Roll Number"
                          name="roll"
                          value={formik.values.roll}
                          onChange={formik.handleChange}
                          style={{ width: "100%" }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>

                      <ErrorMessage render={ErrorComponent} name="roll" />
                    </div>
                  ) : (
                    <div className={"MarginError MarginError4"}>
                      <div
                        style={{
                          width: "100%",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          placeholder="Roll Number"
                          label="Roll Number"
                          name="roll"
                          value={formik.values.roll}
                          onChange={formik.handleChange}
                          style={{ width: "100%", marginBottom: "3em" }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>

                      <ErrorMessage render={ErrorComponent} name="roll" />
                    </div>
                  )}
                  {formik.errors.phone && formik.touched.phone ? (
                    <div className={"MarginError MarginError2"}>
                      <Grid item xs={8}>
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
                        </div>
                      </Grid>
                      <ErrorMessage render={ErrorComponent} name="phone" />
                    </div>
                  ) : (
                    <div className={"MarginError  MarginError3"}>
                      <div
                        style={{
                          width: "100%",
                        }}
                        className={"textFieldLeft changefont marginRF"}
                      >
                        <TextField
                          placeholder="Mobile"
                          label="Mobile"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          style={{ width: "100%", marginBottom: "3em" }}
                          InputLabelProps={{
                            style: {
                              color: "white",
                              borderColor: "white",
                            },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <ErrorMessage render={ErrorComponent} name="phone" />
                    </div>
                  )}
                  {formik.errors.email && formik.touched.email ? (
                    <div>
                      <div
                        style={{
                          width: "100%",
                        }}
                        // className={"textField shift changefont marginRF"}
                      >
                        <TextField
                          placeholder="Email"
                          label="Email"
                          name="email"
                          type="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          style={{ width: "100%" }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage3"}>
                        <ErrorMessage render={ErrorComponent} name="email" />
                      </div>
                    </div>
                  ) : (
                    <div className={"MarginError  MarginError3"}>
                      <div
                        style={{
                          width: "100%",
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
                          style={{ width: "100%" }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage3"}>
                        <ErrorMessage render={ErrorComponent} name="email" />
                      </div>
                    </div>
                  )}
                </Grid>
                <Grid item xs={4}>
                  {formik.errors.techStack && formik.touched.techStack ? (
                    <div>
                      <div
                        style={{
                          width: "100%",
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
                          style={{
                            width: "100%",
                            marginTop: "-2rem",
                            marginBottom: "-4rem",
                          }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage2"}>
                        <ErrorMessage
                          render={ErrorComponent}
                          name="techStack"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        style={{
                          width: "100%",
                        }}
                        className={"textField shift changefont marginRF"}
                      >
                        <TextField
                          placeholder="Tech Stack"
                          label="Tech Stack"
                          name="techStack"
                          value={formik.values.techStack}
                          onChange={formik.handleChange}
                          style={{
                            width: "100%",
                          }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage2"}>
                        <ErrorMessage
                          render={ErrorComponent}
                          name="techStack"
                        />
                      </div>
                    </div>
                  )}

                  {formik.errors.codingLanguage &&
                  formik.touched.codingLanguage ? (
                    <div>
                      <div
                        style={{
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
                          style={{
                            width: "50%",
                            marginTop: "3rem",
                            marginBottom: "3rem",
                          }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage1"}>
                        <ErrorMessage
                          render={ErrorComponent}
                          name="codingLanguage"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={"MarginError MarginError4"}>
                      <div
                        style={{
                          width: "100%",
                        }}
                        className={"textField shift changefont"}
                      >
                        <TextField
                          placeholder="Coding Language"
                          label="Coding Language"
                          name="codingLanguage"
                          value={formik.values.codingLanguage}
                          onChange={formik.handleChange}
                          style={{
                            width: "100%",
                          }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage1"}>
                        <ErrorMessage
                          render={ErrorComponent}
                          name="codingLanguage"
                        />
                      </div>
                    </div>
                  )}

                  {formik.errors.whyJoin && formik.touched.whyJoin ? (
                    <div>
                      <div
                        style={{
                          paddingTop: "1rem",
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
                          style={{
                            width: "50%",
                            marginTop: "1rem",
                            marginBottom: "2rem",
                          }}
                          InputLabelProps={{
                            style: {
                              color: "white",
                              borderColor: "white",
                              width: "16rem",
                            },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage1"}>
                        <ErrorMessage render={ErrorComponent} name="whyJoin" />
                      </div>
                    </div>
                  ) : (
                    <div className={"MarginError MarginError4"}>
                      <div
                        style={{
                          width: "100%",
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
                            width: "100%",
                          }}
                          InputLabelProps={{
                            style: {
                              color: "white",
                              borderColor: "white",
                              width: "100%",
                            },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage1"}>
                        <ErrorMessage render={ErrorComponent} name="whyJoin" />
                      </div>
                    </div>
                  )}

                  {formik.errors.expect && formik.touched.expect ? (
                    <div>
                      <div
                        style={{
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
                          style={{ width: "50%", marginTop: "2rem" }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage4"}>
                        <ErrorMessage render={ErrorComponent} name="expect" />
                      </div>
                    </div>
                  ) : (
                    <div className={"MarginError MarginError4"}>
                      <div
                        style={{
                          width: "100%",
                        }}
                        className={"textField shift changefont marginRF"}
                      >
                        <TextField
                          placeholder="Expectations from D_CODER"
                          label="Expectations from D_CODER"
                          name="expect"
                          value={formik.values.expect}
                          onChange={formik.handleChange}
                          style={{ width: "100%" }}
                          InputLabelProps={{
                            style: { color: "white", borderColor: "white" },
                          }}
                          InputProps={{ className: "InputLabelStyle" }}
                        />
                      </div>
                      <div className={"ErrorMessage4"}>
                        <ErrorMessage render={ErrorComponent} name="expect" />
                      </div>
                    </div>
                  )}
                </Grid>
              </Grid>

              <Button
                disabled={uploading}
                variant="contained"
                style={{
                  backgroundColor: "white",
                  fontWeight: "bold",
                  marginTop: "3rem",
                  marginBottom: "15rem",
                  fontFamily: "Poppins",
                  marginLeft: "-5vw",
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
