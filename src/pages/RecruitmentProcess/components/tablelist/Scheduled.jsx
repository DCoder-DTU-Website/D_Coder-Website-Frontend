import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CancelIcon from "@material-ui/icons/Cancel";
import api from "../../../../api/apiClient";
import swal from "sweetalert";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [scheduled, setScheduled] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getScheduled = async () => {
    try {
      const { data } = await api.get("/applicants/awaiting");
      setScheduled(data);
    } catch (err) {
      console.log("Could not retrieve Applicants List!", err);
    }
  };
  useEffect(() => {
    getScheduled();
  }, [refresh]);

  const handleAccepted = (applicant) => {
    //Change status to accept
    applicant.isAccepted = true;
    applicant.interviewCompleted = true;
    updateAcceptedBackend(applicant);
  };

  const updateAcceptedBackend = async (data) => {
    try {
      const res = await api.post(`/applicants/accept/${data._id}`, { data });
      swal({
        title: "Successfully Accepted User!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    } catch (e) {
      swal({
        title: "An Error Occurred!",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    }
  };

  const handleRejection = (applicant) => {
    //Change status to rejection
    applicant.isAccepted = false;
    applicant.interviewCompleted = true;
    console.log(applicant);
    updateRejectedBackend(applicant);
  };

  const updateRejectedBackend = async (data) => {
    try {
      const res = await api.post(`/applicants/reject/${data._id}`, { data });
      swal({
        title: "Successfully Rejected User!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    } catch (e) {
      swal({
        title: "An Error Occurred!",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    }
  };

  const handleAcceptedHelper = async (applicant) => {
    console.log(applicant);
    const res = await swal({
      title: "Are you sure you want to accept this user?",
      icon: "warning",
      buttons: {
        Yes: {
          text: "Yes",
          value: "Yes",
        },
        No: {
          text: "No",
          value: "No",
        },
      },
    });
    if (res === "Yes") {
      await handleAccepted(applicant);
    } else {
      return;
    }
  };

  const handleRejectionHelper = async (applicant) => {
    const res = await swal({
      title: "Are you sure you want to reject this user?",
      icon: "warning",
      buttons: {
        Yes: {
          text: "Yes",
          value: "Yes",
        },
        No: {
          text: "No",
          value: "No",
        },
      },
    });
    if (res === "Yes") {
      await handleRejection(applicant);
    } else {
      return;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Coding Skills (10)</StyledTableCell>
            <StyledTableCell>Enthusiasm (10)</StyledTableCell>
            <StyledTableCell>Task Completion (10)</StyledTableCell>
            <StyledTableCell>Score (30)</StyledTableCell>
            <StyledTableCell>Remarks</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Accepted</StyledTableCell>
            <StyledTableCell align="right">Rejected</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scheduled.map((row) => (
            <StyledTableRow key={row.email}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.codingSkillsScore}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.enthusiasmScore}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.taskCompletionScore}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.totalScore}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.remarksByRecruiter}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell
                align="right"
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  await handleAcceptedHelper(row);
                  setRefresh(!refresh);
                }}
              >
                <CheckBoxIcon style={{ fill: "green" }} />
              </StyledTableCell>
              <StyledTableCell
                align="right"
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  await handleRejectionHelper(row);
                  setRefresh(!refresh);
                }}
              >
                <CancelIcon style={{ fill: "red" }} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
