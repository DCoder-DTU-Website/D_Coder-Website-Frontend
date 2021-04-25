import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Button } from "@material-ui/core";
import Card from "components/cards/CardHeader";
import CardHeader from "components/cards/CardHeader.js";
import CardBody from "components/cards/CardBody.js";
import CreateIcon from "@material-ui/icons/Create";
import CameraIcon from "@material-ui/icons/Camera";
import avatar from "./marc.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
import CardFooter from "components/cards/CardFooter";

import useUser from "../../useUser";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PersonalForm = (props) => {
  const { user, logout } = useUser();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            disabled={props.editable ? false : true}
            fullWidth
            onChange={(e) => props.onChange(e)}
            value={user.username}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            disabled={props.editable ? false : true}
            fullWidth
            autoComplete="family-name"
            onChange={(e) => props.onChange(e)}
            value={user.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="desc"
            name="address1"
            label="Description"
            fullWidth
            multiline
            rows={4}
            disabled={props.editable ? false : true}
            autoComplete="shipping address-line1"
            onChange={(e) => props.onChange(e)}
            value={props.data.desc}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="city"
            label="Email"
            fullWidth
            disabled={props.editable ? false : true}
            autoComplete="shipping address-level2"
            onChange={(e) => props.onChange(e)}
            value={props.data.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="contact"
            name="state"
            label="Contact No."
            fullWidth
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.contact}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const ProfilesForm = (props) => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profiles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="linkedin"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  linkedin.com/in/
                </InputAdornment>
              ),
            }}
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.profiles.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="github"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">github.com/</InputAdornment>
              ),
            }}
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.profiles.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="codeforces"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  codeforces.com/profile/
                </InputAdornment>
              ),
            }}
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.profiles.codeforces}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="codechef"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  codechef.com/users/
                </InputAdornment>
              ),
            }}
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.profiles.codechef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="leetcode"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">leetcode.com/</InputAdornment>
              ),
            }}
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.profiles.leetcode}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const MiscForm = (props) => {
  const classes = useStyles();
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Educational / D_CODER Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="branch"
              value={props.data.branch}
              onChange={(e) => props.onChange(e)}
              fullWidth
              disabled={props.editable ? false : true}
            >
              <MenuItem value={"COE"}>Computer Engineering</MenuItem>
              <MenuItem value={"EE"}>Electrical Engineering</MenuItem>
              <MenuItem value={"ME"}>Mechanical</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="year"
              value={props.data.year}
              onChange={(e) => props.onChange(e)}
              fullWidth
              disabled={props.editable ? false : true}
            >
              <MenuItem value={1}>First</MenuItem>
              <MenuItem value={2}>Second</MenuItem>
              <MenuItem value={3}>Third</MenuItem>
              <MenuItem value={4}>Fourth</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormLabel component="legend">Learning/Proficient in</FormLabel>
          <FormGroup row fullWidth>
            <FormControlLabel
              control={
                <Checkbox
                  id="web"
                  checked={props.data.abils.web}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Web Dev"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="android"
                  checked={props.data.abils.android}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Android Dev"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="ml"
                  checked={props.data.abils.ml}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Machine Learning"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="ai"
                  checked={props.data.abils.ai}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Artificial Intelligence"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="ds"
                  checked={props.data.abils.ds}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Data Structures"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="algo"
                  checked={props.data.abils.algo}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Algorithms"
            />
          </FormGroup>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <FormLabel component="legend">Teams</FormLabel>
          <FormGroup row fullWidth>
            <FormControlLabel
              control={
                <Checkbox
                  id="teamA"
                  checked={props.data.teams.teamA}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Team A"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="teamB"
                  checked={props.data.teams.teamB}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Team B"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="teamC"
                  checked={props.data.teams.teamC}
                  onChange={(e) => props.onChange(e)}
                  name="checkedB"
                  color="primary"
                  disabled={props.editable ? false : true}
                />
              }
              label="Team C"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default function UserProfile() {
  const classes = useStyles();
  const [data, setData] = React.useState({
    firstName: "yeah",
    lastName: "",
    email: "",
    contact: "",
    desc: "",
    profiles: [
      {
        linkedin: "",
        github: "",
        codeforces: "",
        codechef: "",
        leetcode: "",
      },
    ],
    branch: "COE",
    year: 1,
    abils: [
      {
        web: 0,
        android: 0,
        ml: 0,
        ai: 0,
        ds: 0,
        algo: 0,
      },
    ],
    teams: [
      {
        teamA: 0,
        teamB: 0,
        teamC: 0,
      },
    ],
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id ? e.target.id : e.target.name]: e.target.value,
    });
  };
  const [edit, setEdit] = React.useState(false);
  const toggleEdit = () => {
    if (edit) {
      //Save data here
    }
    setEdit(!edit);
  };
  return (
    <div>
      <GridContainer style={{ backgroundColor: "#16253b" }}>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary">
              <Grid container justify="space-between">
                <h4 className={classes.cardTitleWhite}>Your Profile</h4>
                <IconButton onClick={toggleEdit} style={{ color: "white" }}>
                  <CreateIcon />
                </IconButton>
              </Grid>
            </CardHeader>
            <CardBody style={{ backgroundColor: "#fff", margin: "0 20px" }}>
              <Grid container spacing={3} alignItems="stretch">
                <Grid
                  container
                  xs={12}
                  md={2}
                  alignItems="center"
                  justify="center"
                  style={{ borderRight: "1px #ccc solid", padding: "30px" }}
                >
                  <Grid item>
                    <img
                      src={avatar}
                      alt="..."
                      style={{ maxHeight: "200px", borderRadius: "50%" }}
                      onClick={() => console.log(1)}
                    />
                  </Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={edit ? false : true}
                    className={classes.button}
                    startIcon={<CameraIcon />}
                  >
                    Upload
                  </Button>
                </Grid>
                <Grid
                  container
                  xs={12}
                  md={5}
                  style={{ borderRight: "1px #ccc solid", padding: "30px" }}
                >
                  <Grid>
                    <PersonalForm
                      onChange={handleChange}
                      data={data}
                      editable={edit}
                    />
                    <br />
                    <br />
                    <ProfilesForm
                      onChange={handleChange}
                      data={data}
                      editable={edit}
                    />
                  </Grid>
                </Grid>
                <Grid container xs={12} md={5} style={{ padding: "30px" }}>
                  <Grid>
                    <MiscForm
                      onChange={handleChange}
                      data={data}
                      editable={edit}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
