import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import tw from "twin.macro";
import Upload from "../../../../../components/features/Upload/Upload";

import api from "../../../../../api/apiClient";
import axios from "axios";
import swal from "sweetalert";
import "./NewFormAddCard.css";
import { isMobile } from "react-device-detect";
import { useFormik } from "formik";
import * as Yup from "yup";
import formurlencoded from "form-urlencoded";

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-600 text-white rounded-lg tracking-wide uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-800 hover:text-white hocus:-translate-y-px hocus:shadow-xl`;
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .max(30)
    .matches(/^[a-z0-9 ]+$/i, "Form Title must be alpha-numeric.")
    .label("Title"),
  desc: Yup.string().required().min(20).max(500).label("Description"),
  form_url: Yup.string().required().label("Google Form Embed Url"),
  response_url: Yup.string().required().label("Response Sheet Url"),
});

export default function MultilineTextFields() {
  const classes = useStyles();
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  // const [form_url, setFormUrl] = useState("");
  // const [response_url, setResponseUrl] = useState("");
  const [images, setImages] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleDateChange = (date) => {
  //   setDeadline(date);
  // };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", images[0].file);
      formData.append("upload_preset", "gekvwtzt");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcoderdtu/image/upload",
        formData
      );
      setImages([]);
      console.log(res.data.url);
      return res.data.url;
    } catch (err) {
      console.error(err, "Image Upload Failed!");
    }
  };

  const clickSubmit = async () => {
    try {
      setLoading(true);
      let form = formik.values;
      formik.resetForm();
      const imageUrl = await uploadImage();
      form = { ...form, image: imageUrl };
      await api.post("/forms/add", formurlencoded(form));
      swal({
        title: "Form Uploaded Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      setLoading(false);
    } catch (err) {
      console.log(err, "Upload Failed");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      form_url: "",
      response_url: "",
      deadline: "",
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: clickSubmit,
  });
  return (
    <Grid className="inside-mobile-view">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={formik.handleSubmit} method="POST">
          <div
            className="full-container"
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div
              className="inner-sections mobile-view-form"
              id="inner-sections1"
              style={{
                display: "flex",
                padding: "10px",
                margin: "10px",
                width: "100%",
              }}
            >
              <div
                className="two-column-sections"
                id="section1"
                style={{
                  padding: "10px",
                  margin: "10px",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Grid item xs={12} style={{ margin: "6px 0px" }}>
                  <TextField
                    type="input"
                    id="title"
                    placeholder="E.g. Senior Se Mulaqat"
                    name="title"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                  />
                </Grid>
                <Grid item xs={12} style={{ margin: "6px 0px" }}>
                  <TextField
                    id="outlined-textarea"
                    label="Description"
                    multiline
                    variant="outlined"
                    rows={isMobile ? 2 : 6}
                    placeholder="Eg. ABC"
                    name="desc"
                    fullWidth
                    value={formik.values.desc}
                    onChange={formik.handleChange}
                    error={formik.touched.desc && Boolean(formik.errors.desc)}
                    helperText={formik.touched.desc && formik.errors.desc}
                  />
                </Grid>
                <Grid item xs={12} style={{ margin: "6px 0px" }}>
                  <TextField
                    type="input"
                    id="outlined-textarea"
                    label="Google Form Link"
                    placeholder="E.g. Google Forms Registration Link"
                    multiline
                    name="form_url"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.form_url}
                    error={
                      formik.touched.form_url && Boolean(formik.errors.form_url)
                    }
                    helperText={
                      formik.touched.form_url && formik.errors.form_url
                    }
                  />
                </Grid>
                <Grid item xs={12} style={{ margin: "6px 0px" }}>
                  <TextField
                    type="input"
                    id="outlined-textarea"
                    label="Response Sheet Link"
                    placeholder="E.g. Google Sheets Link"
                    multiline
                    name="response_url"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.response_url}
                    error={
                      formik.touched.response_url &&
                      Boolean(formik.errors.response_url)
                    }
                    helperText={
                      formik.touched.response_url && formik.errors.response_url
                    }
                  />
                </Grid>
              </div>
              <div
                className="two-column-sections"
                id="section2"
                style={{ padding: "10px", margin: "10px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Grid>
                    <TextField
                      id="date"
                      label="Deadline"
                      type="date"
                      name="deadline"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => setDeadline(e.target.value)}
                      value={deadline}
                    />
                  </Grid>
                  <div style={{ display: "flex", marginTop: "35px" }}>
                    <Upload images={images} setImages={setImages} />
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-sections" id="inner-sections2"></div>
          </div>
          <div>
            <Grid
              item
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <SubmitButton
                disabled={loading}
                className="mob-sub-btn"
                type="submit"
              >
                Upload
              </SubmitButton>
            </Grid>
          </div>
        </form>
      </div>
    </Grid>
  );
}
