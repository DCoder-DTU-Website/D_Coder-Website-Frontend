import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import api from "../../api/apiClient";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const ResetPassForm = () => {
  const [old, setOld] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cnfrm, setCnfrm] = useState("");
  const params = useParams();
  const changePass = async (req, res) => {
    if (cnfrm !== newPass) {
      swal({
        title: "Password do not match",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    } else {
      const token = params.token;
      const data = {
        token: token,
        oldPassword: old,
        newPassword: newPass,
        cnfrmPass: cnfrm,
      };
      const msg = await api.post("/reset", data);
      console.log(msg);
      const message = msg.data.message;
      if (message === "Invalid Password") {
        swal({
          title: message,
          icon: "error",
          buttons: true,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
      } else {
        const res = await swal({
          title: "Password Changed Succesfully",
          icon: "success",
          buttons: true,
          closeOnClickOutside: true,
          closeOnEsc: true,
        });
        if (res) {
          window.location.href ="http://localhost:3000/";
        }
      }
      // const message = await msg.json();
      // console.log(message);
    }
  };
  const myStyle = {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={myStyle}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "-4px 2px 48px 5px rgba(49,130,206,0.75)",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <label>Old Password</label>
        <TextField
          value={old}
          onChange={(e) => setOld(e.target.value)}
          style={{ marginBottom: "10px" }}
          required
          type="password"
        />
        
        <label>New Password</label>
        <TextField
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          style={{ marginBottom: "10px" }}
          type="password"
          required
        />
        <label>Confirm New Password</label>
        <TextField
          value={cnfrm}
          onChange={(e) => setCnfrm(e.target.value)}
          style={{ marginBottom: "10px" }}
          required
          type="password"
        />
        <button type="submit" onClick={changePass}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassForm;
