import React, { useState, useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Button } from "@material-ui/core";
import RContext from "../../Context/RContext";

import "./Modal.css";
const Modal = (props) => {
  const [remarks, setRemarks] = useState("");
  const [taskCompletion, setTaskCompletion] = useState(5);
  const [codingSkills, setCodingSkills] = useState(5);
  const [enthusiasm, setEnthusiasm] = useState(5);
  const context = useContext(RContext);
  const handleSubmit = async () => {
    const { setMarks } = context;
    await setMarks(props.id, taskCompletion, codingSkills, enthusiasm, remarks);
  };
  return (
    <div className="main-div">
      <div className="head-close">
        <h1 className="inter">Marks</h1>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => props.close(false)}
        />
      </div>

      <div className="date-time">
        <TextField
          id="task_completion"
          label="Task Completion"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          value={taskCompletion}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="dattime"
          onChange={(e) => setTaskCompletion(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="coding_skills"
          label="Coding Skills"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          value={codingSkills}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="dattime"
          onChange={(e) => setCodingSkills(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="enthusiasm"
          label="Enthusiasm"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          value={enthusiasm}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="dattime"
          onChange={(e) => setEnthusiasm(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="date"
          label="Remarks"
          defaultValue={remarks}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="dattime"
          onChange={(e) => setRemarks(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(26,32,44)", color: "white" }}
        onClick={handleSubmit}
      >
        <h1 className="sch-btn">Grade Applicant</h1>
      </Button>
    </div>
  );
};

export default Modal;
