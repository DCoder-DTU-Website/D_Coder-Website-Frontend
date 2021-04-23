import React from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/cards/Card.js";
import CardHeader from "components/cards/CardHeader.js";
import CardBody from "components/cards/CardBody.js";
import Forms from "./Form";
import Forms2 from "./Form2";
import Forms3 from "./Form3";
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
      <div className="dashboard">
        <GridContainer style={{ alignContent: "center" }}>
          <GridItem className="project" xs={12} sm={12} md={6}>
            <Card style={{ minWidth: "70vw" }}>
              <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
                <h4 className={classes.cardTitleWhite}>Projects</h4>
                <p className={classes.cardCategoryWhite}>Verify Projects</p>
              </CardHeader>
              <Testimonial />
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card style={{ minWidth: "70vw" }}>
              <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
                <h4 className={classes.cardTitleWhite}>Events</h4>
                <p className={classes.cardCategoryWhite}>Upload Events</p>
              </CardHeader>
              <CardBody>
                <Forms2 />
              </CardBody>
            </Card>
          </GridItem>

          <div className="adminboxes">
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
                  <h4 className={classes.cardTitleWhite}>Lectures</h4>
                  <p className={classes.cardCategoryWhite}>Upload Lectures</p>
                </CardHeader>
                <CardBody className="sameheight">
                  <Forms />
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader style={{ backgroundColor: "rgb(49,130,206)" }}>
                  <h4 className={classes.cardTitleWhite}>Gallery</h4>
                  <p className={classes.cardCategoryWhite}>Update Gallery</p>
                </CardHeader>
                <CardBody className="sameheight">
                  <Forms3 />
                </CardBody>
              </Card>
            </GridItem>
          </div>
        </GridContainer>
      </div>
    </>
  );
}
