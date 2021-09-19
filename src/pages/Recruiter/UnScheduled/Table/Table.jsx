import React, { useState } from "react";
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
import Card from "../CollapseCard/Card";
import Modal from "react-awesome-modal";
import ModalCard from "../InterModal/Modal"
import "./Table.css";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row, pos } = props;
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          <h1 className="table-item">{pos + 1 + "."}</h1>
        </TableCell>
        <TableCell component="th" scope="row">
          <h1 className="table-item">{!open && row.name}</h1>
        </TableCell>
        <TableCell align="left">
          <h1 className="table-item">{!open && row.calories}</h1>
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            style={{ backgroundColor: "rgb(26,32,44)", color: "white" }}
            startIcon={<ScheduleIcon />}
            onClick={() => setModalOpen(true)}
          >
            <h1 className="sch-btn">Schedule</h1>
          </Button>
          <Modal
            visible={modalOpen}
            width="600"
            height="300"
            effect="fadeInUp"
            onClickAway={() => setModalOpen(false)}
          >
            <ModalCard close = {setModalOpen}/>
          </Modal>
        </TableCell>
        <TableCell>
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
              <Card />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <div className="table-side">
      <TableContainer component={Paper} style={{ padding: "0% 5%" }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <h1 className="head-title">Name</h1>
              </TableCell>
              <TableCell align="left">
                <h1 className="head-title">Roll No.</h1>
              </TableCell>
              <TableCell align="left">
                <h1 className="head-title">Schedule Interview</h1>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Row key={row.name} row={row} pos={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
