import React, { useState, useContext,useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Button } from "@material-ui/core";
import RContext from "../../Context/RContext";

import "./Modal.css";
const Modal = (props) => {
  const [isAlreadyMarked,setIsAlreadyMarked]=useState(props.applicant.remarksByRecruiter);
  const [isEdit,setIsEdit]=useState(false);
  const [remarks, setRemarks] = useState("");
  const [taskCompletion, setTaskCompletion] = useState(5);
  const [codingSkills, setCodingSkills] = useState(5);
  const [enthusiasm, setEnthusiasm] = useState(5);
  const context = useContext(RContext);
// isEdit: if recruiter actually changes data in input fields
// isAlreadyMarked: To check if recruiter already graded the applicant
  const handleSubmit = async () => {
    const { setMarks } = context;
    await setMarks(props.id, taskCompletion, codingSkills, enthusiasm, remarks);
    if(props.applicant.remarksByRecruiter){
      setIsAlreadyMarked(true);
      setIsEdit(false);
    }
    props.setAnyChange(!props.anyChange);

  };
  const handleAlreadyMarked=()=>{
    setIsAlreadyMarked(false);
  } 
  const handleEdit=()=>{
    setIsEdit(true);
  }

  useEffect(()=>{
    if(props.applicant.remarksByRecruiter){
      setTaskCompletion(props.applicant.taskCompletionScore);
      setCodingSkills(props.applicant.codingSkillsScore);
      setEnthusiasm(props.applicant.enthusiasmScore);
      setRemarks(props.applicant.remarksByRecruiter);
    }
  },[])
  return (
    <div className="main-div">
      <div className="head-close">
        <h1 className="inter">Marks</h1>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
              if(props.applicant.remarksByRecruiter){
                if( !isAlreadyMarked && !isEdit){
                  setIsAlreadyMarked(true);
                }
                else if( !isAlreadyMarked && isEdit){
                  setTaskCompletion(props.applicant.taskCompletionScore);
                  setCodingSkills(props.applicant.codingSkillsScore);
                  setEnthusiasm(props.applicant.enthusiasmScore);
                  setRemarks(props.applicant.remarksByRecruiter);
                  setIsAlreadyMarked(true);
                  setIsEdit(false);
                }
              }
              props.close(false)
            }
          }
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
          onChange={(e) => { handleEdit(); setTaskCompletion(e.target.value)}}
          disabled={isAlreadyMarked}
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
          onChange={(e) =>{ handleEdit(); setCodingSkills(e.target.value)}}
          disabled={isAlreadyMarked}
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
          onChange={(e) => { handleEdit(); setEnthusiasm(e.target.value)}}
          disabled={isAlreadyMarked}
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
          value={remarks}
          className="dattime"
          onChange={(e) => { handleEdit(); setRemarks(e.target.value)}}
          disabled={isAlreadyMarked}
          />
      </div>
      <Button
        variant="contained"
        style={{ backgroundColor: "rgb(26,32,44)", color: "white" }}
        onClick={ isAlreadyMarked ?  handleAlreadyMarked : handleSubmit}
        >
        <h1 className="sch-btn">{ isAlreadyMarked ? "Edit":"Grade Applicant"}</h1>
      </Button>
    </div>
  );
};

export default Modal;
