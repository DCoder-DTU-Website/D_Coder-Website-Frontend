import React from "react";
import "./Bottom.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
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
      transform: "scale(1.07)",
    },
  },
});

const Mission = () => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  // AOS.init({
  //   duration: 1000,
  // });

  return (
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
         HIGHLIGHTS
        </h1>
        <br />
        <br />
        <Grid container alignItems="stretch" spacing={3}>
          <Grid item lg={4} md={6} xs={12} style={{ display: "flex" }}>
            <Card
              className={classes.myNewCard}
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  The initiative garnered around 1000 students from different
                  schools and we feel proud that we were crazy enough to take
                  forward this initiative on such a large scale.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} xs={12} style={{ display: "flex" }}>
            <Card
              className={classes.myNewCard}
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  The annual event of the initiative brought in students from
                  multiple schools to compete in the BIGGEST IDEATHON CHALLENGE
                  IN INDIA FOR STUDENTS organized on 8th February 2019.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} xs={12} style={{ display: "flex" }}>
            <Card
              className={classes.myNewCard}
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  Some of the participating schools were Ryan International
                  School, Bal Bharati Public School, Ramjas School, Mira Model
                  School, Government Sarvodaya co-ed Vidyalaya, SD Public School
                  and many more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} xs={12} style={{ display: "flex" }}>
            <Card
              className={classes.myNewCard}
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  The event looked at INNOVATION as a process driven by a gamut
                  of disciplines, including MANAGEMENT, ENGINEERING AND DESIGN.
                  The event was a platform to present projects done in various
                  fields and talk about the untapped potential and discuss
                  processes for need-based innovation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} xs={12} style={{ display: "flex" }}>
            <Card
              className={classes.myNewCard}
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  The students got to learn amazing ideas and innovation that
                  was not accessible to them by conventional schooling methods.
                  The support we got from different schools and the amount of
                  enthusiasm shown by students was enthralling.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} md={6} xs={12} style={{ display: "flex" }}>
            <Card
              className={classes.myNewCard}
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  We believe that when an initiative is taken with an aim to
                  change something there will always be some difficulty and lots
                  of effort, but after the completion, all is forgotten with how
                  much we achieved and that is important.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Mission;
