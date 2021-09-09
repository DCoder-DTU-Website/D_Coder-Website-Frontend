import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchBar from "material-ui-search-bar";
import Modal from "./components/NewUserAddModal";
import UserModal from "./components/ViewUserDetailsModal";
import AdminNavbarLinks from "../../components/Navbar";
import TextField from "@material-ui/core/TextField";
import "../../Styles/page.css";
import api from "../../../../api/apiClient";
import swal from "sweetalert";
import "../../Styles/tablelist.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const techStack = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Web Dev",
    label: "Web Dev",
  },
  {
    value: "Data Structures",
    label: "Data Structures",
  },
  {
    value: "Algorithms",
    label: "Algorithms",
  },
  {
    value: "Android Dev",
    label: "Android Dev",
  },
  {
    value: "Machine Learning",
    label: "Machine Learning",
  },
  {
    value: "Artificial Intelligence",
    label: "Artificial Intelligence",
  },
];

const team = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Development",
    label: "Development",
  },
  {
    value: "Youtube",
    label: "Youtube",
  },
  {
    value: "Social Media",
    label: "Social Media",
  },
  {
    value: "Content Writing",
    label: "Content Writing",
  },
  {
    value: "Video Editing",
    label: "Video Editing",
  },
  {
    value: "Graphic Designing",
    label: "Graphic Designing",
  },
];

export default function BasicTable() {
  const [originalRows, setOriginalRows] = useState([]);
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const [searchTechStack, setSearchTechStack] = useState("");
  const [searchTeam, setSearchTeam] = useState("");

  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      const fullName = row.firstName + " " + row.lastName;
      return fullName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const requestSearchTechStack = (event) => {
    setSearchTechStack(event.target.value);
    setSearchTeam("");
    if (event.target.value == "All") {
      setRows(originalRows);
      return;
    }
    const filteredRows = originalRows.filter((row) => {
      const techStack = row.techStack;
      return techStack.includes(event.target.value);
    });
    setRows(filteredRows);
  };

  // console.log(rows)
  const requestSearchTeam = (event) => {
    setSearchTechStack("");
    setSearchTeam(event.target.value);
    if (event.target.value == "All") {
      setRows(originalRows);
      return;
    }
    const filteredRows = originalRows.filter((row) => {
      const team = row.workingWith;
      return team.includes(event.target.value);
    });
    setRows(filteredRows);
  };

  const getAllUsers = async () => {
    const data = await api.get("/userprofile/all");
    setRows(data.data);
    setOriginalRows(data.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const cancelSearch = () => {
    setSearched("");
    setSearchTechStack("");
    requestSearch(searched);
  };

  const removeUser = async (e, email) => {
    try {
      const userID = e;
      await api.delete(`/user/${email}/remove`);
      await api.delete(`/userprofile/${userID}/remove`);
      await getAllUsers();
      await swal({
        title: "User Removed Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    } catch (err) {
      console.log("Could not remove user", err);
    }
  };

  const remove = async (e, email) => {
    const res = await swal({
      title: "Are you sure you want to remove this user?",
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
      await removeUser(e, email);
    } else {
      return;
    }
  };

  return (
    <>
      <AdminNavbarLinks />
      <Modal />
      <Paper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "20px 10px",
          }}
        >
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            style={{ height: "52px" }}
          />
          <TextField
            id="outlined-select-currency-native"
            select
            value={searchTechStack}
            onChange={requestSearchTechStack}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {techStack.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency-native"
            select
            value={searchTeam}
            onChange={requestSearchTeam}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {team.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <TableContainer className="desktop_list">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Contact</TableCell>
                <TableCell align="center">Year</TableCell>
                <TableCell align="center">Remove User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <UserModal
                      firstName={row.firstName}
                      lastName={row.lastName}
                      email={row.email}
                      contact={row.contact}
                      year={row.year}
                      description={row.desc}
                      branch={row.branch}
                      leetcode={row.leetcode}
                      codeforces={row.codeforces}
                      codechef={row.codechef}
                      techStack={row.techStack}
                      linkedin={row.linkedin}
                      github={row.github}
                      username={row.email}
                      workingWith={row.workingWith}
                      image={row.image}
                    />
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.contact}</TableCell>
                  <TableCell align="center">{row.year}</TableCell>
                  <TableCell
                    align="center"
                    onClick={() => remove(row._id, row.email)}
                    style={{ cursor: "pointer" }}
                  >
                    <DeleteIcon />
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ cursor: "pointer" }}
                  ></TableCell>
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

        {/* MOBILE TABLE LIST*/}

        <TableContainer className="mobile_list" style={{ overflow: "hidden" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center" style={{ paddingLeft: "90px" }}>
                  Remove User
                </TableCell>
                <TableCell align="center" className="mobile_view">
                  Email
                </TableCell>
                <TableCell align="center" className="mobile_view">
                  Contact
                </TableCell>
                <TableCell align="center" className="mobile_view">
                  Year
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <UserModal
                      firstName={row.firstName}
                      lastName={row.lastName}
                      email={row.email}
                      contact={row.contact}
                      year={row.year}
                      description={row.desc}
                      branch={row.branch}
                      leetcode={row.leetcode}
                      codeforces={row.codeforces}
                      codechef={row.codechef}
                      techStack={row.techStack}
                      linkedin={row.linkedin}
                      github={row.github}
                      username={row.email}
                      workingWith={row.workingWith}
                      image={row.image}
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() => remove(row._id, row.email)}
                    style={{ cursor: "pointer", paddingLeft: "90px" }}
                  >
                    <DeleteIcon />
                  </TableCell>
                  <TableCell align="center" className="mobile_view">
                    {row.email}
                  </TableCell>
                  <TableCell align="center" className="mobile_view">
                    {row.contact}
                  </TableCell>
                  <TableCell align="center" className="mobile_view">
                    {row.year}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ cursor: "pointer" }}
                  ></TableCell>
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
