import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import RTLNavbarLinks from "./RTLNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  function makeBrand() {
    var name;
    props.routes.map((prop) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar
      className={classes.appBar + appBarClasses}
      style={{ color: "white" }}
    >
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div style={{ display: "flex", gap: "200%" }}>
            <div>
              {/* Here we create navbar brand, based on route name */}
              <Button color="transparent" href="#" className={classes.title}>
                {makeBrand()}
              </Button>
            </div>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
          </div>
        </Hidden>
        <Hidden mdUp implementation="css">
          <div
            style={{
              display: "flex",
              gap: "30%",
            }}
          >
            <Route
              render={({ history }) => (
                <Button
                  onClick={() => {
                    history.push("/admin/dashboard");
                  }}
                  style={{ backgroundColor: "rgba(49,130,206)" }}
                >
                  Dashboard
                </Button>
              )}
            />
            <Route
              render={({ history }) => (
                <Button
                  onClick={() => {
                    history.push("/admin/table");
                  }}
                  style={{ backgroundColor: "rgba(49,130,206)" }}
                >
                  Members
                </Button>
              )}
            />
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
