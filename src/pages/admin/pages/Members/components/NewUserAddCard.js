import React, { useState } from "react";
import api from "../../../../../api/apiClient";
import swal from "sweetalert";
import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUserAlt, FaLock } from "react-icons/fa";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Username").email(),
  password: Yup.string().required().label("Password"),
});

const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const register = async () => {
    try {
      setLoading(true);
      const info = formik.values;
      formik.resetForm();
      await api.post("/register", {
        email: info.email,
        username: info.email,
        password: info.password,
      });
      swal({
        title: "Member added Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      setLoading(false);
    } catch (err) {
      console.log("Could not register user!", err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: register,
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

          <Button
            variant="contained"
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
