import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import api from "../../../../api/apiClient";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import swal from "sweetalert";
import { useMediaQuery } from "react-responsive";
import { Box, Collapse, IconButton, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Card from "../../../Recruiter/UnScheduled/CollapseCard/MarksNewCard";

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
  const [rejected, setRejected] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // const [members, setMembers] = useState(rows);

  const getRejected = async () => {
    try {
      const { data } = await api.get("/applicants/rejected");
      setRejected(data);
    } catch (err) {}
  };
  useEffect(() => {
    getRejected();
  }, []);

  const handleAccepted = (applicant) => {
    //Change status to accept
    applicant.isAccepted = true;
    applicant.interviewCompleted = true;
    updateAcceptedBackend(applicant);
  };

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
              <h1 className="table-item">{applicant.phone}</h1>
            </TableCell>
          )}
          {isPC && (
            <TableCell align="right">
              <h1 className="table-item">{applicant.email}</h1>
            </TableCell>
          )}
          
          <TableCell
            align="right"
            style={{ cursor: "pointer" }}
            onClick={async () => {
              await handleAcceptedHelper(applicant);
              setRefresh(!refresh);
            }}
          >
            <CheckBoxIcon style={{ fill: "green" }} />
          </TableCell>
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

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Contact</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Accept</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rejected.map((row) => (
            <StyledTableRow key={row.email}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
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
            </StyledTableRow>
          ))} */}
          {rejected.map((applicant, index) => (
            <Row
              key={applicant.name}
              applicant={applicant}
              pos={index}
              // setRefresh={setRefresh}
              // refresh={refresh}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
