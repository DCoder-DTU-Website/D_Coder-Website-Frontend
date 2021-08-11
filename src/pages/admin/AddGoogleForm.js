import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SearchBar from "material-ui-search-bar";
import Modal from "./FormModal";
import UserModal from "./userModal";
import AdminNavbarLinks from "./Navbar";
import "./page.css";
import api from "../../api/apiClient";
import swal from "sweetalert";
import "./tablelist.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const [originalRows, setOriginalRows] = useState([]);
  const [rows, setRows] = useState(originalRows);
  const [forms, setForms] = useState([]);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      const fullName = row.firstName + " " + row.lastName;
      return fullName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const getForm = async () => {
    try {
      const { data } = await api.get("/forms/all");
      const { data: formsData } = data;
      formsData.reverse();
      setForms(formsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForm();
  }, []);
  return (
    <>
      <AdminNavbarLinks />
      <Modal />
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer className="desktop_list">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Form Name</TableCell>
                <TableCell style={{ width: "15%" }} align="center">
                  Form Link
                </TableCell>
                <TableCell style={{ width: "15%" }} align="center">
                  Response Sheet
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((form, index) => (
                <TableRow>
                  <TableCell>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "1%",
                        }}
                      >
                        <div
                          className="circle"
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "1%",
                        }}
                      >
                        {form.title}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell style={{ width: "15%" }} align="center">
                    <a href = {"/forms/"+form._id}>View</a>
                    {/* <FileCopyIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        
                        copy(`${form.form_url}`);
                        alert("Form Link Copied");
                      }}
                    ></FileCopyIcon> */}
                  </TableCell>
                  <TableCell style={{ width: "15%" }} align="center">
                    <a href={form.response_url} target="_blank">
                      <PeopleAltIcon></PeopleAltIcon>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* MOBILE TABLE LIST*/}

        <TableContainer className="mobile_list" style={{ overflow: "hidden" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right" style={{ paddingLeft: "90px" }}>
                  Form Url
                </TableCell>
                <TableCell align="right" style={{ paddingLeft: "90px" }}>
                  Response Sheet
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((form, index) => (
                <TableRow>
                  <TableCell>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "1%",
                        }}
                      >
                        <div
                          className="circle"
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "1%",
                        }}
                      >
                        {form.title}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell style={{ width: "15%" }} align="center">
                    <FileCopyIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        copy(`${form.form_url}`);
                        alert("Form Link Copied");
                      }}
                    ></FileCopyIcon>
                  </TableCell>
                  <TableCell style={{ width: "15%" }} align="center">
                    <a href={form.response_url} target="_blank">
                      <PeopleAltIcon></PeopleAltIcon>
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br />
    </>
  );
}
