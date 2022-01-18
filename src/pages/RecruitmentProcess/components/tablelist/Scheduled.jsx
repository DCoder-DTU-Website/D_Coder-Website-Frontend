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
import Modal from "react-awesome-modal";
import ModalCard from "../../../Recruiter/UnScheduled/InterModal/Modal";
import MarksModal from "../../../Recruiter/UnScheduled/InterModal/MarksModal";
import { Box, Collapse, IconButton, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Card from "../../../Recruiter/UnScheduled/CollapseCard/MarksNewCard";
import { useMediaQuery } from "react-responsive";
import Loader from "../../../../helpers/Loader";

function Row(props) {
  const { applicant, pos } = props;
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [marksModalOpen, setMarksModalOpen] = useState(false);
  const isPC = useMediaQuery({
    query: "(min-device-width: 690px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 690px)",
  });
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          component="th"
          scope="row"
          className="table-cell"
          align="left"
        >
          <h1 className="table-item">{applicant.name} </h1>
        </TableCell>
        {isPC && (
          <TableCell align="left">
            <h1 className="table-item">{applicant.totalScore}</h1>
          </TableCell>
        )}
        {isPC && (
          <TableCell align="right">
            <h1 className="table-item">{applicant.email}</h1>
          </TableCell>
        )}
        {isPC && (
          <TableCell
            align="right"
            style={{ cursor: "pointer" }}
            onClick={async () => {
              await props.handleAcceptedHelper(props.applicant);
              props.setRefresh(!props.refresh);
            }}
          >
            <CheckBoxIcon style={{ fill: "green" }} />
          </TableCell>
        )}
        {isPC && (
          <TableCell
            align="right"
            style={{ cursor: "pointer" }}
            onClick={async () => {
              await props.handleRejectionHelper(props.applicant);
              props.setRefresh(!props.refresh);
            }}
          >
            <CancelIcon style={{ fill: "red" }} />
          </TableCell>
        )}

        <TableCell className="table-cell" align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Card applicant={applicant} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

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
  const [loading, setLoading] = useState(true);

  const getScheduled = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/applicants/awaiting");
      //sort data by total score in descending order
      data.sort((a, b) => b.totalScore - a.totalScore);
      setScheduled(data);
      setLoading(false);
    } catch (err) {}
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
      {loading ? (
        <Loader />
      ) : (
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Score (30)</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Accept</StyledTableCell>
              <StyledTableCell align="right">Reject</StyledTableCell>
              <StyledTableCell align="right">Dropdown</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {scheduled.length==0? (<div style={{padding:"10px"}}>Nothing to show here</div>):null}
            {scheduled.map((applicant, index) => (
              <Row
                key={applicant.name}
                applicant={applicant}
                pos={index}
                scheduled={scheduled}
                handleRejectionHelper={handleRejectionHelper}
                handleAcceptedHelper={handleAcceptedHelper}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
