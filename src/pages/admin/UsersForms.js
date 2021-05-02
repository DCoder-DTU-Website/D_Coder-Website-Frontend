import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  Chip,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import Edit from "@material-ui/icons/Edit";
import api from "../../api/apiClient";
import swal from "sweetalert";

const Container = tw.div`text-gray-600 bg-gray-900`;
const InnerContainer = tw.div`container px-5 py-24 mx-auto`;
const ContainerWrap = tw.div`flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 items-center`;

const LeftSideDetails = tw.div`p-4 md:w-1/4 sm:mb-0 mb-6`;
const Image = tw.img`object-cover object-center h-full w-full`;
const ImageContainer = tw.div`h-64 md:px-4 overflow-hidden`;
const UserName = tw.div`text-center md:my-8`;
const SocialMedia = tw.div`md:my-8 text-center`;
const NameLinks = tw.div`grid md:grid-cols-3`;
const TextCard = tw.div`md:mx-8 md:w-2/3 w-full -mt-8`;
const InnerTextCard = tw.div`h-auto bg-gray-100 p-8 rounded md:mb-8`;

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
        ? { backgroundColor: "#3182ce" }
        : { backgroundColor: "#808080", display: "none" }
    }
    {...props}
  />
));

const EditCheckbox = withStyles({
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

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  image: {
    borderRadius: "50%",
    padding: 0,
    height: "auto",
  },
  username: {
    fontSize: "1.2em",
  },
  icon: {
    "&:hover": {
      color: "#3182ce",
    },
  },
  name: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#3182ce",
  },
  nameCard: {
    //   background: "rgb(222,128,34)",
    //   background:
    //     "linear-gradient(90deg, rgba(222,128,34,1) 0%, rgba(221,108,10,1) 26%, rgba(250,197,3,1) 100%)",
    boxShadow: "10px 10px 5px 0px rgba(10,87,163,0.75)",
    WebkitBoxShadow: "10px 10px 5px 0px rgba(10,87,163,0.75)",
  },
  desc: {
    marginBottom: "15px",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#3182ce",
  },
  subheading: {
    fontSize: "1.4rem",
    marginLeft: "10px",
    fontWeight: "500",
  },
  skillsGrid: {
    marginLeft: "10px",
  },
  links: {
    "&:hover": {
      color: "#3182ce",
      cursor: "pointer",
    },
  },
  secondBox: {
    boxShadow: "10px 10px 5px 0px rgba(10,87,163,0.75)",
    WebkitBoxShadow: "10px 10px 5px 0px rgba(10,87,163,0.75)",
    "&:hover": {
      "& $editIcon": {
        display: "inline",
        position: "absolute",
        left: "96%",
        top: "4%",
        cursor: "pointer",
      },
    },
  },
  editIcon: {
    display: "none",
  },
  submitButton: {
    backgroundColor: "#3182ce",
    "&:hover": {
      backgroundColor: "#2c5282",
    },
  },
});

const UserProfile = (props) => {
  const classes = useStyles();

  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(props);
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const onTechChange = (e) => {
    const value = e.target.innerText;
    if (user.techStack.includes(value)) {
      setUser((prevUser) => ({
        ...prevUser,
        techStack: prevUser.techStack.filter((skill) => skill !== value),
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        techStack: [...prevUser.techStack, value],
      }));
    }
  };

  const onTeamChange = (e) => {
    const value = e.target.innerText;
    if (user.workingWith.includes(value)) {
      setUser((prevUser) => ({
        ...prevUser,
        workingWith: prevUser.workingWith.filter((team) => team !== value),
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        workingWith: [...prevUser.workingWith, value],
      }));
    }
  };

  const updateDetails = async () => {
    try {
      setLoading(true);
      const data = user;
      const res = await api.put("/userprofile", { data });
      swal({
        title: res.data,
        closeOnClickOutside: true,
        closeOnEsc: true,
        icon: "success",
      });
      setLoading(false);
    } catch (err) {
      swal({
        title: "Error updaing profile!",
        closeOnClickOutside: true,
        closeOnEsc: true,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Container className={classes.root}>
        <InnerContainer>
          <ContainerWrap>
            <LeftSideDetails>
              <ImageContainer className={classes.image}>
                <Image alt="content" src={props.image} />
              </ImageContainer>
              <UserName className={classes.username}>{props.username}</UserName>
              <SocialMedia>
                <a
                  href={props.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "4%" }}
                >
                  <LinkedInIcon className={classes.icon} />
                </a>
                <a href={props.github} target="_blank" rel="noreferrer">
                  <GitHubIcon className={classes.icon} />
                </a>
              </SocialMedia>
            </LeftSideDetails>
            <TextCard>
              <InnerTextCard className={classes.nameCard}>
                <div className={classes.name}>
                  {props.firstName} {props.lastName}
                </div>
                <NameLinks className={classes.desc}>
                  <div>
                    <span className={classes.heading}>Year:</span>
                    <span className={classes.subheading}>{props.year}</span>
                  </div>
                  <div>
                    <span className={classes.heading}>Branch:</span>
                    <span className={classes.subheading}>{props.branch}</span>
                  </div>
                  <div>
                    <span className={classes.heading}>Contact:</span>
                    <span className={classes.subheading}>{props.contact}</span>
                  </div>
                </NameLinks>
                <div className={classes.desc}>
                  <span className={classes.heading}>Description:</span>
                  <span className={classes.subheading}>
                    {props.description}
                  </span>
                </div>
                <NameLinks>
                  <div>
                    <a href={props.codechef} target="_blank" rel="noreferrer">
                      <span className={classes.links}>Code Chef</span>
                    </a>
                  </div>
                  <div>
                    <a href={props.codeforces} target="_blank" rel="noreferrer">
                      <span className={classes.links}>Code Forces</span>
                    </a>
                  </div>
                  <div>
                    <a href={props.leetcode} target="_blank" rel="noreferrer">
                      <span className={classes.links}>Leet Code</span>
                    </a>
                  </div>
                </NameLinks>
              </InnerTextCard>

              <InnerTextCard className={classes.secondBox}>
                <div className={classes.editIcon}>
                  <Edit onClick={handleEdit} />
                </div>
                <div className={classes.desc}>
                  <div className={classes.heading}>Skills:</div>
                  <Grid item xs={12} sm={12} className={classes.skillsGrid}>
                    <FormGroup row fullWidth>
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="web"
                              label="Web Dev"
                              name="Web Dev"
                              clickable
                              onClick={(e) => onTechChange(e)}
                              isChosen={user.techStack.includes("Web Dev")}
                            />
                          ) : (
                            <BlueCheckbox
                              id="web"
                              label="Web Dev"
                              name="Web Dev"
                              isChosen={props.techStack.includes("Web Dev")}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="android"
                              label="Android Dev"
                              name="checkedB2"
                              clickable
                              onClick={(e) => onTechChange(e)}
                              isChosen={user.techStack.includes("Android Dev")}
                            />
                          ) : (
                            <BlueCheckbox
                              id="android"
                              label="Android Dev"
                              name="checkedB2"
                              isChosen={props.techStack.includes("Android Dev")}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="ml"
                              label="Machine Learning"
                              name="Machine Learning"
                              clickable
                              onClick={(e) => onTechChange(e)}
                              isChosen={user.techStack.includes(
                                "Machine Learning"
                              )}
                            />
                          ) : (
                            <BlueCheckbox
                              id="ml"
                              label="Machine Learning"
                              name="Machine Learning"
                              isChosen={props.techStack.includes(
                                "Machine Learning"
                              )}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="ai"
                              label="Artificial Intelligence"
                              name="Artificial Intelligence"
                              clickable
                              onClick={(e) => onTechChange(e)}
                              isChosen={user.techStack.includes(
                                "Artificial Intelligence"
                              )}
                            />
                          ) : (
                            <BlueCheckbox
                              id="ai"
                              label="Artificial Intelligence"
                              name="Artificial Intelligence"
                              isChosen={props.techStack.includes(
                                "Artificial Intelligence"
                              )}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="ds"
                              label="Data Structures"
                              name="Data Structures"
                              clickable
                              onClick={(e) => onTechChange(e)}
                              isChosen={user.techStack.includes(
                                "Data Structures"
                              )}
                            />
                          ) : (
                            <BlueCheckbox
                              id="ds"
                              label="Data Structures"
                              name="Data Structures"
                              isChosen={props.techStack.includes(
                                "Data Structures"
                              )}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="algo"
                              label="Algorithms"
                              name="Algorithms"
                              onClick={(e) => onTechChange(e)}
                              isChosen={user.techStack.includes("Algorithms")}
                              clickable
                            />
                          ) : (
                            <BlueCheckbox
                              id="algo"
                              label="Algorithms"
                              name="Algorithms"
                              isChosen={props.techStack.includes("Algorithms")}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                    </FormGroup>
                  </Grid>
                </div>
                <div className={classes.desc}>
                  <div className={classes.heading}>Teams:</div>
                  <Grid item xs={12} sm={12} className={classes.skillsGrid}>
                    <FormGroup row fullWidth>
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="teama"
                              label="Team A"
                              name="Team A"
                              clickable
                              onClick={(e) => onTeamChange(e)}
                              isChosen={user.workingWith.includes("Team A")}
                            />
                          ) : (
                            <BlueCheckbox
                              id="teama"
                              label="Team A"
                              name="Team A"
                              isChosen={props.workingWith.includes("Team A")}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="teamb"
                              label="Team B"
                              name="Team B"
                              clickable
                              onClick={(e) => onTeamChange(e)}
                              isChosen={user.workingWith.includes("Team B")}
                            />
                          ) : (
                            <BlueCheckbox
                              id="teamb"
                              label="Team B"
                              name="Team B"
                              isChosen={props.workingWith.includes("Team B")}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={
                          edit ? (
                            <EditCheckbox
                              id="teamc"
                              label="Team C"
                              name="Team C"
                              clickable
                              onClick={(e) => onTeamChange(e)}
                              isChosen={user.workingWith.includes("Team C")}
                            />
                          ) : (
                            <BlueCheckbox
                              id="teamc"
                              label="Team C"
                              name="Team C"
                              isChosen={props.workingWith.includes("Team C")}
                            />
                          )
                        }
                        style={{ marginTop: "20px" }}
                      />
                    </FormGroup>
                  </Grid>
                </div>
                {edit && (
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.submitButton}
                      onClick={updateDetails}
                      disabled={loading}
                    >
                      Update Details
                    </Button>
                  </div>
                )}
              </InnerTextCard>
            </TextCard>
          </ContainerWrap>
        </InnerContainer>
      </Container>
    </>
  );
};

export default UserProfile;
