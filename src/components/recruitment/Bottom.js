import React from "react";
import AOS from "aos";
import "./Bottom.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  myNewCard: {
    transition: "all 300ms ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});
const Mission = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  AOS.init({
    duration: 1000,
  });

  return (
    <div style={{ margin: "-30px", marginTop: "10px", textAlign: "center" }}>
      <div className="mission">
        <div data-aos="fade-up">
          <h1
            style={{
              color: "rgba(36, 62, 99)",
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            MISSION
          </h1>
          <br />
          <br />
          <Grid container alignItems="stretch" spacing={3}>
            <Grid item lg={2} md={6} xs={12} style={{ display: "flex" }}>
              <Card
                className={classes.myNewCard}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "rgba(36, 62, 99)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="p"
                    component="p"
                    style={{
                      color: "white",
                    }}
                  >
                    To build a community of differently-abled students from
                    various colleges.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md={6} xs={12} style={{ display: "flex" }}>
              <Card
                className={classes.myNewCard}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "rgba(36, 62, 99)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="p"
                    component="p"
                    style={{ color: "white" }}
                  >
                    To train students for internships and placements
                    preparation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md={6} xs={12} style={{ display: "flex" }}>
              <Card
                className={classes.myNewCard}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "rgba(36, 62, 99)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="p"
                    component="p"
                    style={{ color: "white" }}
                  >
                    To create an environment of collaboration, experimentation,
                    imagination, and creativity
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md={6} xs={12} style={{ display: "flex" }}>
              <Card
                className={classes.myNewCard}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "rgba(36, 62, 99)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="p"
                    component="p"
                    style={{ color: "white" }}
                  >
                    To develop a student's potential with analytical and
                    technical abilities.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md={6} xs={12} style={{ display: "flex" }}>
              <Card
                className={classes.myNewCard}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "rgba(36, 62, 99)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="p"
                    component="p"
                    style={{ color: "white" }}
                  >
                    To provide environment-friendly, reasonable and sustainable
                    solutions for the development of differently-abled students.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={2} md={6} xs={12} style={{ display: "flex" }}>
              <Card
                className={classes.myNewCard}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "rgba(36, 62, 99)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="p"
                    component="p"
                    style={{ color: "white" }}
                  >
                    To enhance the personality of all these students and improve
                    their coding skills.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* <div className="card-flex">
          <div className="card card-mission">
            <p className="card-text p-mission">
              To buid a community of differently-abled students from various
              colleges.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              To train students for internships and placements <br />{" "}
              preparation.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission" style={{ marginTop: "17%" }}>
              To create an environment of collaboration, experimentation,
              imagination, and creativity
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              To develop a <br /> student's potential <br /> with analytical{" "}
              <br /> and technical abilities.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission" style={{ marginTop: "10%" }}>
              To provide <br /> environment-friendly, reasonable and sustainable
              solutions for the development of differently-abled students.
            </p>
          </div>
          <div className="card card-mission">
            <p className="card-text p-mission">
              To enhance the personality of all these students and improve their
              coding skills.
            </p>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Mission;
