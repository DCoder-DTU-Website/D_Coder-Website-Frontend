import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Card from "../CollapseCard/Card";
import Modal from "react-awesome-modal";
import ModalCard from "../InterModal/Modal";
import MarksModal from "../InterModal/MarksModal";
import { useMediaQuery } from "react-responsive";
import RContext from "../../Context/RContext";
import "./Table.css";
import useUser from "useUser";

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
        <TableCell component="th" scope="row" className="table-cell">
          <h1 className="table-item">{pos + 1 + "."}</h1>
        </TableCell>
        <TableCell component="th" scope="row" className="table-cell">
          <h1 className="table-item">{!open && applicant.name} </h1>
        </TableCell>
        {isPC && (
          <TableCell align="left">
            <h1 className="table-item">
              {!open && applicant.roll.toUpperCase()}
            </h1>
          </TableCell>
        )}
        <TableCell className="table-cell">
          {!props.scheduled ? (
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(26,32,44)",
                color: "white",
                borderRadius: "999px",
              }}
              size={!isPC ? "small" : "large"}
              startIcon={<ScheduleIcon />}
              onClick={() => setModalOpen(true)}
            >
              <h1 className="sch-btn">Schedule</h1>
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(26,32,44)",
                color: "white",
                borderRadius: "999px",
              }}
              size={!isPC ? "small" : "large"}
              startIcon={<AssessmentIcon />}
              onClick={() => setMarksModalOpen(true)}
            >
              <h1 className="sch-btn">Set Marks</h1>
            </Button>
          )}
          <Modal
            visible={modalOpen}
            width={isPC ? "600" : "300"}
            height="300"
            effect="fadeInUp"
            onClickAway={() => setModalOpen(false)}
          >
            <ModalCard close={setModalOpen} id={applicant._id} />
          </Modal>
          <Modal
            visible={marksModalOpen}
            width={isPC ? "600" : "300"}
            height="450"
            effect="fadeInUp"
            onClickAway={() => setMarksModalOpen(false)}
          >
            <MarksModal close={setMarksModalOpen} id={applicant._id} />
          </Modal>
        </TableCell>
        <TableCell className="table-cell">
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

export default function CollapsibleTable({ scheduled }) {
  console.log(scheduled);
  const context = useContext(RContext);
  let { applicants, data } = context;
  applicants = applicants.filter((a) => {
    if (scheduled) {
      return (
        a.idRecruiter === data._id &&
        a.interviewLink &&
        a.interviewTime &&
        a.interviewerName &&
        !a.totalScore
      );
    }
    return (
      a.idRecruiter === data._id &&
      !a.interviewLink &&
      !a.interviewTime &&
      !a.interviewerName
    );
  });
  const isPC = useMediaQuery({
    query: "(min-device-width: 690px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 690px)",
  });
  return (
    <div className="table-side">
      <TableContainer component={Paper} style={{ padding: "0% 5%" }}>
        <Table aria-label="collapsible table">
          <TableHead>
            {isPC && (
              <TableRow style={{ padding: "5px" }}>
                <TableCell />
                <TableCell>
                  <h1 className="head-title">Name</h1>
                </TableCell>
                {isPC && (
                  <TableCell align="left">
                    <h1 className="head-title">Roll No.</h1>
                  </TableCell>
                )}
                {!scheduled ? (
                  <TableCell align="left">
                    <h1 className="head-title">Schedule Interview</h1>
                  </TableCell>
                ) : (
                  <TableCell align="left">
                    <h1 className="head-title">Set Marks</h1>
                  </TableCell>
                )}
                <TableCell />
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {applicants.map((applicant, index) => (
              <Row
                key={applicant.name}
                applicant={applicant}
                pos={index}
                scheduled={scheduled}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
