import React , {useState , useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from "../../../../api/apiClient";
import Modal from "../Modal"



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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const rows = [
  {name:'Aditya', email:159 , status:"Applied"},
  {name:'Vaibhav', email:237, status:"Applied"},
  {name:'Naman', email:262, status:"Applied"},
  {name:'Aarya', email:305, status:"Applied"},
  {name:'Shivansh', email:356, status:"Applied"},
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [applied , setApplied] = useState([])
  const [members , setMembers] = useState(rows)

    const getApplied = async () => {
    try {
      const { data } = await api.get("/applicants/all");
      // const { data: appliedData } = data;
      console.log(data);
      let val = data.filter((e) => e.inteviewLink=="");
      console.log(val)
      setApplied(val);
      setMembers(val);
      // setApplied(data);
    } catch (err) {
      console.log("Could not retrieve Applicants List!", err);
    }
  };
  useEffect(() => {
    getApplied();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Schedule Interview</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((row) => (
            <StyledTableRow key={row.email}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right" style = {{cursor:"pointer"}}><Modal applicant = {row} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}