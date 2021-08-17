import React from "react";
import AOS from "aos";
import "./Bottom.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
            PERKS
          </h1>
          <br />
          <br />
          <Grid
            container
            alignItems="stretch"
            spacing={5}
            style={{ justifyContent: "center" }}
          >
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
                      fontSize: "1.5rem",
                    }}
                  >
                    Job opportunities from alumni of our college
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
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    Get insight from industry experts and build your path
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
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    Build connection between experience and young mind
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
                    style={{ color: "white", fontSize: "1.5rem" }}
                  >
                    Interact with young mind of your college
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Mission;
