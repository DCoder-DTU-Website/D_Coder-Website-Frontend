import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import api from "../api/apiClient";
import swal from "sweetalert";
import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUserAlt, FaLock } from "react-icons/fa";
import ForgotModal from "./ForgotModal";
import "./loginForm.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Username").email(),
  password: Yup.string().required().label("Password"),
});

const AddForm = ({ handleClose, setIsLoggedIn }) => {
  const [loading, setLoading] = useState(false);
  const login = async () => {
    try {
      setLoading(true);
      const info = formik.values;
      formik.resetForm();
      const { data } = await api.post("/login", {
        email: info.email,
        username: info.email,
        password: info.password,
      });
      localStorage.setItem("token", data);
      const res = await api.get("/user");
      setIsLoggedIn({ login: res.data });
      if (res.data.isAdmin) {
        swal({ title: "Welcome Admin!", icon: "success" });
      } else {
        swal({ title: "Successfully Logged In!", icon: "success" });
      }
      setLoading(false);
    } catch (err) {
      swal({ title: "Incorrect Username or Password!", icon: "warning" });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: login,
  });

  return (
    <div style={{ margin: "1em" }}>
      <form onSubmit={formik.handleSubmit} method="POST">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              margin: "1em",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <FaUserAlt
              style={{ position: "absolute", bottom: 10 }}
              color={formik.errors.email ? "red" : "black"}
            />
            <TextField
              label="Username"
              id="username"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              style={{ marginLeft: "25px" }}
            />
          </div>
          <div
            style={{
              margin: "1em",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <FaLock
              style={{ position: "absolute", bottom: 10 }}
              color={formik.errors.password ? "red" : "black"}
            />
            <TextField
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              style={{ marginLeft: "25px" }}
            />
          </div>
          <ForgotModal/>

          <Button
            variant="contained"
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
