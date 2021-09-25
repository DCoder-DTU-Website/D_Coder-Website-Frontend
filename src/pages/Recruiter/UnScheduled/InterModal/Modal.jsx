import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Button } from "@material-ui/core";
// import DatePicker from '@material-ui/lab/DatePicker';

import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="main-div">
      <div className="head-close">
        <h1 className="inter">Schedule Interview</h1>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => props.close(false)}
        />
      </div>
      <div className="date-time">
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2021-01-01"
          //   sx={{ width: 300 }}
          width={350}
          InputLabelProps={{
            shrink: true,
          }}
          className="dattime"
        />
        <TextField
          id="time"
          label="Alarm clock"
          type="time"
          defaultValue="07:30"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          className="dattime"
        />
      </div>

      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(26,32,44)", color: "white" }}
      >
        <h1 className="sch-btn">Schedule</h1>
      </Button>
    </div>
  );
};

export default Modal;
