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
import Modal from "../Modal";
import { Button } from "@material-ui/core";

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

const rows = [
  { name: "Aditya", email: 159, status: "Applied" },
  { name: "Vaibhav", email: 237, status: "Applied" },
  { name: "Naman", email: 262, status: "Applied" },
  { name: "Aarya", email: 305, status: "Applied" },
  { name: "Shivansh", email: 356, status: "Applied" },
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  // eslint-disable-next-line
  const [applied, setApplied] = useState([]);
  const [recruiters, setRecruiters] = useState(rows);

  const getRecruiters = async () => {
    try {
      const { data } = await api.get("/userprofile/all");
      let val = data.filter((e) => e.isRecruiter === true);
      setRecruiters(val);
    } catch (err) {
      console.log("Could not retrieve Applicants List!", err);
    }
  };
  const getApplied = async () => {
    try {
      const { data } = await api.get("/applicants/all");
      let val = data.filter((e) => e.interviewLink === "");
      setApplied(val);
    } catch (err) {
      console.log("Could not retrieve Applicants List!", err);
    }
  };
  useEffect(() => {
    getRecruiters();
    getApplied();
  }, []);

  const handleClick = async () => {
    const idApplicants = applied.map((applicant) => applicant._id);
    const idRecruiters = recruiters.map((recruiter) => recruiter._id);
    try {
      const res = await api.post("/applicants/assignToRecruitersBulk", {
        idRecruiters,
        idApplicants,
      });
      console.log(res);
    } catch (err) {
      console.log("Could not retrieve Applicants List!", err);
    }
  };

  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recruiters.map((row) => (
                <StyledTableRow key={row.email}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={handleClick}
        disabled={true}
      >
        Assign Applicants to Recruiters
      </Button>
    </div>
  );
}
