import React from "react";
import api from "../../api/apiClient";
import formurlencoded from "form-urlencoded";

import { makeStyles } from "@material-ui/styles";

import { TextField, Button } from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";
import Upload from "./Upload/Upload";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .max(30)
    .matches(/^[a-z0-9 ]+$/i, "Project Title must be alpha-numeric.")
    .label("Title"),
  desc: Yup.string().required().min(20).max(500).label("Description"),
  dev: Yup.string().required().max(20).label("Owner Name"),
  techStack: Yup.string().required().label("Tech Stack"),
  linkedin: Yup.string()
    .required()
    .label("LinkedIn")
    .matches(
      new RegExp("^https://www.linkedin\\.com/in/"),
      "The URL must be a valid Linked In URL."
    ),
  github: Yup.string()
    .required()
    .label("Github")
    .matches(
      new RegExp("^https://github\\.com/"),
      "The URL must be a valid Github URL."
    ),
});

export default function () {
  const classes = useStyles();

  const clickSubmit = async () => {
    try {
      let project = formik.values;
      project = { ...project, confirmed: true };
      console.log(project);
      await api.post("/project/add", formurlencoded(project));
    } catch (err) {
      console.log(err, "Upload Failed");
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      dev: "",
      desc: "",
      techStack: "",
      linkedIn: "",
      github: "",
    },
    validationSchema: validationSchema,
    onSubmit: clickSubmit,
  });

  return (
    <div className={classes.container}>
      <form
        className={classes.twoColumn}
        onSubmit={formik.handleSubmit}
        method="POST"
      >
        <div className={classes.column}>
          <TextField
            className={classes.textField}
            label="Project Title"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            className={classes.textField}
            label="Owner Name"
            id="dev"
            name="dev"
            value={formik.values.dev}
            onChange={formik.handleChange}
            error={formik.touched.dev && Boolean(formik.errors.dev)}
            helperText={formik.touched.dev && formik.errors.dev}
          />
          <TextField
            className={classes.textField}
            label="Tech Stack"
            id="techStack"
            name="techStack"
            value={formik.values.techStack}
            onChange={formik.handleChange}
            error={formik.touched.techStack && Boolean(formik.errors.techStack)}
            helperText={formik.touched.techStack && formik.errors.techStack}
          />
          <TextField
            className={classes.textField}
            label="LinkedIn"
            id="linkedin"
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
            helperText={formik.touched.linkedin && formik.errors.linkedin}
          />
          <TextField
            className={classes.textField}
            label="Github"
            id="github"
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            error={formik.touched.github && Boolean(formik.errors.github)}
            helperText={formik.touched.github && formik.errors.github}
          />
        </div>
        <div className={classes.column}>
          <TextField
            className={classes.textField}
            label="Description"
            id="desc"
            name="desc"
            value={formik.values.desc}
            onChange={formik.handleChange}
            error={formik.touched.desc && Boolean(formik.errors.desc)}
            helperText={formik.touched.desc && formik.errors.desc}
            multiline
            rows={8}
          />
          <Upload />
          <Button
            className={classes.textField && classes.button}
            variant="contained"
            type="submit"
          >
            Upload
          </Button>
        </div>
      </form>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    position: "relative",
    padding: "0 2.5rem",
    width: "100%",
    height: "100%",
  },
  twoColumn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    width: "100%",
    height: "100%",
  },
  column: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    margin: "2rem",
    width: "75%",
  },
  button: {
    margin: "2rem",
    width: "75%",
    backgroundColor: "#3182ce",
    color: "white ",
    "&:hover": {
      backgroundColor: "#2c5282",
    },
  },
});
