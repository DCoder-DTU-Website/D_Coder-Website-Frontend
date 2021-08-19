import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinkIcon from "@material-ui/icons/Link";
import Paper from "@material-ui/core/Paper";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchBar from "material-ui-search-bar";
import Modal from "./components/NewFormAddModal";
import AdminNavbarLinks from "../../components/Navbar";
import "../../Styles/page.css";
import api from "../../../../api/apiClient";
import "../../Styles/tablelist.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const [originalForms, setOriginalForms] = useState([]);
  const [forms, setForms] = useState(originalForms);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalForms.filter((form) => {
      const fullName = form.title;
      return fullName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    console.log(filteredRows);
    setForms(filteredRows);
  };

  const compareDate = (date) => {
    var a = new Date();
    var day = a.getDate();
    var month = a.getMonth();
    var year = a.getFullYear();
    var year1 = parseInt(date.slice(0, 4));
    var month1 = parseInt(date.slice(5, 7));
    var day1 = parseInt(date.slice(8, 10));
    if (year1 < year || month1 < month || day1 < day) {
      return true;
    }
    return false;
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const getForm = async () => {
    try {
      const { data } = await api.get("/forms/all");
      const { data: formsData } = data;
      // console.log(formsData[2].deadline.getYear());
      formsData.reverse();
      console.log(formsData);
      setForms(formsData);
      setOriginalForms(formsData);
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
                        {form.deadline && compareDate(form.deadline) ? (
                          <div
                            className="circle"
                            style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor: "red",
                              borderRadius: "50%",
                            }}
                          ></div>
                        ) : (
                          <div
                            className="circle"
                            style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor: "green",
                              borderRadius: "50%",
                            }}
                          ></div>
                        )}
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
                    {form.deadline && compareDate(form.deadline) ? (
                      <a href="https://www.google.com" target="_blank" rel="noreferrer">
                        <LinkIcon></LinkIcon>
                      </a>
                    ) : (
                      <a href={"/forms/" + form._id} target="_blank" rel="noreferrer">
                        <LinkIcon></LinkIcon>
                      </a>
                    )}
                  </TableCell>
                  <TableCell style={{ width: "15%" }} align="center">
                    <a href={form.response_url} target="_blank" rel="noreferrer">
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
          <Table
            className={classes.table}
            aria-label="simple table"
            style={{ minWidth: "100px" }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center" style={{ paddingLeft: "0px" }}>
                  Form Url
                </TableCell>
                <TableCell align="center" style={{ paddingLeft: "0px" }}>
                  Response Sheet
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((form, index) => (
                <TableRow>
                  <TableCell style={{ width: "1%" }}>
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
                  <TableCell
                    style={{ width: "50%", paddingLeft: "0px" }}
                    align="center"
                  >
                    <a href={"/forms/" + form._id} target="_blank" rel="noreferrer">
                      <LinkIcon></LinkIcon>
                    </a>
                  </TableCell>
                  <TableCell style={{ width: "49%" }} align="center">
                    <a href={form.response_url} target="_blank" rel="noreferrer">
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
