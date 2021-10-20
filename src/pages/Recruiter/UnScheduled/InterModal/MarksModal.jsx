import React, { useState, useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Button } from "@material-ui/core";
import RContext from "../../Context/RContext";

import "./Modal.css";
const Modal = (props) => {
  const [gMeet, setGMeet] = useState("");
  const [date, setDate] = useState("01-01-2000");
  const [time, setTime] = useState("00:00");
  const interTime = `${date + " " + time}`;
  const context = useContext(RContext);
  const { setInterview } = context;
  const setInterviews = async () => {
    await setInterview(props.id, interTime, gMeet);
    setGMeet("");
  };
  return (
    <div className="main-div">
      <div className="head-close">
        <h1 className="inter">Set Marks</h1>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => props.close(false)}
        />
      </div>

      <div className="date-time">
        <TextField
          id="date"
          label="Date of Interview"
          type="date"
          value={date}
          width={350}
          InputLabelProps={{
            shrink: true,
          }}
          className="dattime"
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          id="time"
          label="Time of Interview"
          type="time"
          defaultValue={time}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          className="dattime"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="date"
          label="Google Meet Link"
          defaultValue={gMeet}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="dattime"
          onChange={(e) => setGMeet(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(26,32,44)", color: "white" }}
        onClick={setInterviews}
      >
        <h1 className="sch-btn">Schedule</h1>
      </Button>
    </div>
  );
};

export default Modal;
