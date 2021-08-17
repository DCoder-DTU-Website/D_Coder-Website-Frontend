import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import api from "../api/apiClient";
import { BrowserRouter, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [notices, setNotices] = useState([]);
  const [forms, setForms] = useState();
  function compare(a, b) {
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    return 0;
  }

  const getNotices = async () => {
    try {
      const { data } = await api.get("/notices/all");
      const { data: noticesData } = data;
      noticesData.sort(compare);
      setNotices(noticesData);
    } catch (err) {
      console.log("Could not retrieve Notices!", err);
    }
  };

  const getForm = async () => {
    try {
      const { data } = await api.get("/forms/all");
      const { data: formsData } = data;
      formsData.reverse();
      setForms(formsData);
      console.log(forms);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getForm();
    getNotices();
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  }

  const list = (anchor) => (
    <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        {notices.map((notice) => (
          <div>
            <List>
              <ListItem style={{ display: "flex", flexDirection: "column" }}>
                <h1
                  style={{
                    fontWeight: "bolder",
                    fontSize: "22px",
                    color: "#3182ce",
                  }}
                >
                  {notice.title}
                </h1>
                <ListItemText primary={notice.description} />
                {notice.link && (
                  <a
                    href={notice.link}
                    target="_blank"
                    style={{ color: "#3182ce" }}
                  >
                    Check it out here !
                  </a>
                )}
                <small style={{ color: "grey" }}>
                  {formatDate(notice.createdAt.substring(0, 10))}
                </small>
              </ListItem>
            </List>
            <Divider />
          </div>
        ))}
        {forms &&
          forms.map((form) => (
            <div>
              <List>
                <ListItem style={{ display: "flex", flexDirection: "column" }}>
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontSize: "22px",
                      color: "#3182ce",
                    }}
                  >
                    {form.title}
                  </h1>
                  <ListItemText primary={form.desc} />
                  {form.form_url && (
                    <a
                      href={"/forms/" + form._id}
                      target="_blank"
                      style={{ color: "#3182ce" }}
                    >
                      Check it out here !
                    </a>
                  )}
                </ListItem>
              </List>
              <Divider />
            </div>
          ))}
      </div>
    </>
  );

  return (
    <div style={{ width: "1200px" }}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{
              position: "fixed",
              backgroundColor: "rgba(49,130,206)",
              zIndex: "100",
              top: "50%",
              right: "0",
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%",
              outline: 0,
              width: "30px",
              height: "50px",
              color: "white",
            }}
          >
            <ArrowBackIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
