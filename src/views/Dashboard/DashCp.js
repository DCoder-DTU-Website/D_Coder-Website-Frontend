import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DataUsageIcon from '@material-ui/icons/DataUsage';
import InfoIcon from '@material-ui/icons/Info';
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Forms from "./Form"
import Forms2 from "./Form2"
import Forms3 from "./Form3"
import Testimonial from "components/testimonials/AdminProjects"
import "./style.css"


import styles from "../../assets/jss/material-dashboard-react/views/dst.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} >
          <Card style = {{minWidth:"70vw"}}>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Projects</h4>
              <p className={classes.cardCategoryWhite}>
                Verify Projects
              </p>
            </CardHeader>
              <Testimonial />
          </Card>
        </GridItem>
        
        
        <GridItem xs={12} sm={12} md={6} >
          <Card style = {{minWidth:"70vw"}}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Events</h4>
              <p className={classes.cardCategoryWhite}>
                Upload Events
              </p>
            </CardHeader>
            <CardBody>
              <Forms2 />
            </CardBody>
          </Card>
        </GridItem>

        <div className = "adminboxes" >
        <GridItem xs={12} sm={12} md={6}>
          <Card  >
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Lectures</h4>
              <p className={classes.cardCategoryWhite}>
                Upload Lectures
              </p>
            </CardHeader>
            <CardBody style={{maxHeight:"40vw !important"}}>
              <Forms />
            </CardBody>
          </Card>
        </GridItem>


        <GridItem xs={12} sm={12} md={6}>
          <Card >
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Gallery</h4>
              <p className={classes.cardCategoryWhite}>
                Update Gallery
              </p>
            </CardHeader>
            <CardBody style={{maxHeight:"40vw !important"}}>
              <Forms3 />
            </CardBody>
          </Card>
        </GridItem>
        </div>
        
        
        
      </GridContainer>
      
    </div>
  );
}