import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Button } from "@material-ui/core";
import Card from "components/cards/CardHeader";
import CardHeader from "components/cards/CardHeader.js";
import CardBody from "components/cards/CardBody.js";
import CreateIcon from "@material-ui/icons/Create";
// import CameraIcon from "@material-ui/icons/Camera";
// import avatar from "./marc.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import {ChipSet,Chip} from "@material/react-chips"
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Chip from "@material-ui/core/Chip";
// import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
// import CardFooter from "components/cards/CardFooter";
// import { RadioGroup } from "@material-ui/core";

import useUser from "../../useUser";
import api from "../../api/apiClient";
import swal from "sweetalert";
import Upload from "components/features/Upload/Upload";
import axios from "axios";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import ResetModal from "../../helpers/ResetModal";

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
    fontSize: "1.3rem",
  },
  formControl: {
    marginBottom: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  FormControlLabel: {
    marginTop: "30px",
  },
}));

const BlueCheckbox = withStyles({
  root: {
    backgroundColor: " #001eff",
    color: "white",
  },
})((props) => (
  <Chip
    color="#001eff"
    style={
      props.isChosen
        ? { backgroundColor: "#3d5afe" }
        : { backgroundColor: "#808080" }
    }
    {...props}
  />
));

const PersonalForm = (props) => {
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
            value={props.data.firstName}
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
            value={props.data.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
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
            type="number"
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
            label="Linked In"
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.linkedin}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="github"
            label="Github"
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.github}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="codeforces"
            label="Code Forces"
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.codeforces}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="codechef"
            label="Code Chef"
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.codechef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="leetcode"
            label="Leet Code"
            disabled={props.editable ? false : true}
            onChange={(e) => props.onChange(e)}
            value={props.data.leetcode}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const MiscForm = (props) => {
  const classes = useStyles();

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
                <BlueCheckbox
                  id="web"
                  label="Web Dev"
                  isChosen={props.data.techStack.includes("Web Dev")}
                  onClick={(e) => props.onTechChange(e)}
                  name="Web Dev"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="android"
                  label="Android Dev"
                  isChosen={props.data.techStack.includes("Android Dev")}
                  onClick={(e) => props.onTechChange(e)}
                  name="checkedB2"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="ml"
                  label="Machine Learning"
                  isChosen={props.data.techStack.includes("Machine Learning")}
                  onClick={(e) => props.onTechChange(e)}
                  name="Machine Learning"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="ai"
                  label="Artificial Intelligence"
                  isChosen={props.data.techStack.includes(
                    "Artificial Intelligence"
                  )}
                  onClick={(e) => props.onTechChange(e)}
                  name="Artificial Intelligence"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="ds"
                  label="Data Structures"
                  isChosen={props.data.techStack.includes("Data Structures")}
                  onClick={(e) => props.onTechChange(e)}
                  name="Data Structures"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="algo"
                  label="Algorithms"
                  isChosen={props.data.techStack.includes("Algorithms")}
                  onClick={(e) => props.onTechChange(e)}
                  name="Algorithms"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
          </FormGroup>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <FormLabel component="legend">Teams</FormLabel>
          <FormGroup row fullWidth aria-label="position">
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="teamA"
                  label="Team A"
                  isChosen={props.data.workingWith.includes("Team A")}
                  onClick={(e) => props.onTeamChange(e)}
                  name="Team A"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="teamB"
                  label="Team B"
                  isChosen={props.data.workingWith.includes("Team B")}
                  onClick={(e) => props.onTeamChange(e)}
                  name="Team B"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
            <FormControlLabel
              control={
                <BlueCheckbox
                  id="teamC"
                  label="Team C"
                  isChosen={props.data.workingWith.includes("Team C")}
                  onClick={(e) => props.onTeamChange(e)}
                  name="Team C"
                  clickable
                  disabled={props.editable ? false : true}
                />
              }
              style={{ marginTop: "20px" }}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default function UserProfile(props) {
  const classes = useStyles();
  const { user } = useUser();
  let userFromAdmin = null;
  if (user.isAdmin) {
    userFromAdmin = props.location.state;
  }
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    desc: "",
    linkedin: "",
    github: "",
    codeforces: "",
    codechef: "",
    leetcode: "",
    branch: "",
    year: "",
    image: "",
    techStack: [],
    workingWith: [],
  });

  const [ogProfile, setOgProfile] = useState();

  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);

  const getProfile = async () => {
    let res;
    if (user.isAdmin) {
      res = await api.post("/userprofile", { userFromAdmin });
    } else {
      res = await api.post("/userprofile", { user });
    }
    const userProfile = res.data;
    setOgProfile(userProfile);
    setData((prevData) => ({ ...prevData, ...userProfile }));
  };

  useEffect(() => {
    getProfile();
  }, [user]);

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (ogProfile.image !== data.image) {
      updateBackend();
    }
  }, [data.image]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id ? e.target.id : e.target.name]: e.target.value,
    });
  };

  const handleTechChange = (e) => {
    const value = e.target.textContent;
    if (data.techStack.includes(value)) {
      setData({
        ...data,
        techStack: data.techStack.filter((elem) => elem !== value),
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        techStack: [...prevData.techStack, value],
      }));
    }
  };
  const handleTeamChange = (e) => {
    const value = e.target.textContent;
    if (data.workingWith.includes(value)) {
      setData({
        ...data,
        workingWith: data.workingWith.filter((elem) => elem !== value),
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        workingWith: [...prevData.workingWith, value],
      }));
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", images[0].file);
      formData.append("upload_preset", "gekvwtzt");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcoderdtu/image/upload",
        formData
      );
      setImages([]);
      return res.data.url;
    } catch (err) {
      console.error(err, "Image Upload Failed!");
    }
  };

  const updateImage = async () => {
    const url = await uploadImage();
    setData((prevData) => ({ ...prevData, image: url }));
  };

  const updateProfile = async () => {
    setLoading(true);
    await updateImage();
  };

  const updateBackend = async () => {
    let res;
    if (user.isAdmin) {
      res = await api.put("/userprofile", { userFromAdmin, data });
    } else {
      res = await api.put("/userprofile", { user, data });
    }
    swal({ title: res.data, icon: "success" });
    setLoading(false);
  };

  const [edit, setEdit] = React.useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div>
      <GridContainer style={{ backgroundColor: "#16253b" }}>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="info">
              <Grid container justify="space-between" alignItems="center">
                <h4 className={classes.cardTitleWhite}>Your Profile</h4>
                <Grid justify="flex-end">
                  <IconButton onClick={toggleEdit} style={{ color: "white" }}>
                    <CreateIcon />
                  </IconButton>
                  <IconButton style={{ color: "white" }}>
                    <Link to="/">
                      <AiFillHome />
                    </Link>
                  </IconButton>
                </Grid>
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
                      src={data.image}
                      alt="..."
                      style={{
                        borderRadius: "50%",
                      }}
                      onClick={() => console.log()}
                    />
                  </Grid>
                  <Upload
                    images={images}
                    setImages={setImages}
                    disabled={!edit}
                  />
                  <ResetModal />
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
                      onTechChange={handleTechChange}
                      onTeamChange={handleTeamChange}
                      data={data}
                      editable={edit}
                    />
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!edit || loading}
                    onClick={updateProfile}
                  >
                    Update Details
                  </Button>
                </Grid>
              </Grid>
            </CardBody>
            {/* <CardFooter></CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
