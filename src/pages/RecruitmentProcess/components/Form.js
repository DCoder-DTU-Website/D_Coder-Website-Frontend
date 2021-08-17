import React from "react";
import { FormControl, TextField, Button } from "@material-ui/core";

export default function Form() {
  return (
    <div
      style={{
        width: "50vw",
        height: "100vh",
        backgroundColor: "white",
        borderRadius: "20px",
      }}
    >
      <FormControl
        style={{
          height: "90%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField placeholder="Name" label="Name" style={{ width: "50%" }} />
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
          <TextField placeholder="DOB" label="DOB" style={{ width: "50%" }} />
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
            style={{ width: "50%" }}
          />
        </div>
        <Button variant="contained" color="primary">
          Apply Now! 🍻
        </Button>
      </FormControl>
    </div>
  );
}
