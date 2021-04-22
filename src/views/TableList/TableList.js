import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import Modal from "./modal";
import UserModal from "./userModal";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const originalRows = [
  {
    firstName: "Aditya",
    lastName: "Teltia",
    email: "teltia.aditya22@gmail.com",
    contact: "9255790854",
    year: 4.0,
    description:"Experienced Campus Ambassador with a demonstrated history of working in the education management industry. Skilled in C++, Front-end Development",
    username: "adityateltia22",
    branch: "COE",
    leetcode: "",
    codeforces: "adityateltia22",
    codechef: "adityateltia22",
    techStack: "WebD",
    linkedin: "AdityaTeltia",
    github: "TeltiaAditya",
    workingWith: "Tech team",
  },
  {
    firstName: "Vibhor",
    lastName: "Jain",
    email: "teltia.aditya22@gmail.com",
    contact: "9255790854",
    year: 4.0,
    description: "",
    username: "adityateltia22",
    branch: "COE",
    leetcode: "adityateltia22",
    codeforces: "adityateltia22",
    codechef: "adityateltia22",
    techStack: "WebD",
    linkedin: "AdityaTeltia",
    github: "TeltiaAditya",
    workingWith: "Tech team",
  },
  {
    firstName: "Satyam",
    lastName: "Gaur",
    email: "teltia.aditya22@gmail.com",
    contact: "9255790854",
    year: 4.0,
    description: "",
    username: "adityateltia22",
    branch: "COE",
    leetcode: "adityateltia22",
    codeforces: "adityateltia22",
    codechef: "adityateltia22",
    techStack: "WebD",
    linkedin: "AdityaTeltia",
    github: "TeltiaAditya",
    workingWith: "Tech team",
  },
  {
    firstName: "Vaibhav",
    lastName: "Surname",
    email: "teltia.aditya22@gmail.com",
    contact: "9255790854",
    year: 4.0,
    description: "",
    username: "adityateltia22",
    branch: "COE",
    leetcode: "adityateltia22",
    codeforces: "adityateltia22",
    codechef: "adityateltia22",
    techStack: "WebD",
    linkedin: "AdityaTeltia",
    github: "TeltiaAditya",
    workingWith: "Tech team",
  },
  {
    firstName: "Naman",
    lastName: "Surname",
    email: "teltia.aditya22@gmail.com",
    contact: "9255790854",
    year: 4.0,
    description: "",
    username: "adityateltia22",
    branch: "COE",
    leetcode: "adityateltia22",
    codeforces: "adityateltia22",
    codechef: "adityateltia22",
    techStack: "WebD",
    linkedin: "AdityaTeltia",
    github: "TeltiaAditya",
    workingWith: "Tech team",
  },
  {
    firstName: "Sachin",
    lastName: "Surname",
    email: "teltia.aditya22@gmail.com",
    contact: "9255790854",
    year: 4.0,
    description: "",
    username: "adityateltia22",
    branch: "COE",
    leetcode: "adityateltia22",
    codeforces: "adityateltia22",
    codechef: "adityateltia22",
    techStack: "WebD",
    linkedin: "AdityaTeltia",
    github: "TeltiaAditya",
    workingWith: "Tech team",
  },
];

export default function BasicTable() {
  const [rows, setRows] = useState(originalRows);
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

  return (
    <>
      <Modal />
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.firstName}>
                  <TableCell>
                    <UserModal
                      firstName={row.firstName}
                      lastName={row.lastName}
                      email={row.email}
                      contact={row.contact}
                      year={row.year}
                      description={row.description}
                      branch={row.branch}
                      leetcode={row.leetcode}
                      codeforces={row.codeforces}
                      codechef={row.codechef}
                      techStack={row.techStack}
                      linkedin={row.linkedin}
                      github={row.github}
                      username={row.username}
                      workingWith={row.workingWith}
                    />
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.contact}</TableCell>
                  <TableCell align="center">{row.year}</TableCell>
                  <TableCell scope="row" style={{ display: "none" }}>
                    <div>
                      {row.firstName}&nbsp;{row.lastName}
                    </div>
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
