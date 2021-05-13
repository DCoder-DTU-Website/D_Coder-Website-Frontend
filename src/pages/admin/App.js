import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Grid from "@material-ui/core/Grid";
import Card from "components/cards/Card.js";
import CardHeader from "components/cards/CardHeader.js";
import CardBody from "components/cards/CardBody.js";
import Forms from "./Form";
import Forms2 from "./Form2";
import Forms3 from "./Form3";
import NoticesForm from "./NoticesForm";

import Testimonial from "components/testimonials/AdminProjects";
import "./styles.css";
import styles from "./styles";
import AdminNavbarLinks from "./Navbar";

const useStyles = makeStyles(styles);

export default function Admin() {
  const classes = useStyles();
  return (
    <>
      <AdminNavbarLinks />
      <Grid container spacing={3} style={{ padding: 20 }}>
        <Grid item lg={6} xs={12} style={{ display: "flex" }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
              <h4 className={classes.cardTitleWhite}>Projects</h4>
              <p className={classes.cardCategoryWhite}>Verify Projects</p>
            </CardHeader>
            <Testimonial />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6} style={{ display: "flex" }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
              <h4 className={classes.cardTitleWhite}>Events</h4>
              <p className={classes.cardCategoryWhite}>Upload Events</p>
            </CardHeader>
            <CardBody>
              <Forms2 />
            </CardBody>
          </Card>
        </Grid>

        <Grid item lg={4} xs={12} style={{ display: "flex" }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
              <h4 className={classes.cardTitleWhite}>Notices</h4>
              <p className={classes.cardCategoryWhite}>Update Notices</p>
            </CardHeader>
            <CardBody>
              <NoticesForm />
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} style={{ display: "flex" }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
              <h4 className={classes.cardTitleWhite}>Gallery</h4>
              <p className={classes.cardCategoryWhite}>Update Gallery</p>
            </CardHeader>
            <CardBody>
              <Forms3 />
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} style={{ display: "flex" }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
              <h4 className={classes.cardTitleWhite}>Lectures</h4>
              <p className={classes.cardCategoryWhite}>Upload Lectures</p>
            </CardHeader>
            <CardBody>
              <Forms />
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
