import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "components/cards/Card.js";
import CardHeader from "components/cards/CardHeader.js";
import CardBody from "components/cards/CardBody.js";
import Forms from "./DashboardCards/LectureCard";
import Forms2 from "./DashboardCards/EventCard";
import Forms3 from "./DashboardCards/GalleryCard";
import NoticeCard from "./DashboardCards/NoticeCard";

import Testimonial from "pages/admin/DashboardCards/ProjectCard";
import "./Styles/styles.css";
import styles from "./Styles/styles";
import AdminNavbarLinks from "./components/Navbar";

import "./App.css";

const useStyles = makeStyles(styles);

export default function Admin() {
  const classes = useStyles();
  return (
    <div className="pageRoot">
      <AdminNavbarLinks />
      <Grid container spacing={3}>
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
              <NoticeCard />
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
        <Grid item lg={4} xs={12} style={{ display: "flex" }}>
          <Card
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          ></Card>
        </Grid>
      </Grid>
    </div>
  );
}
