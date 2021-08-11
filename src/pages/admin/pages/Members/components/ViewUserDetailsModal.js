import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Form from "./ViewUserDetails";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "rgb(26,32,44)",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleClickOpen}
        style={{
          color: "rgba(49,130,206,var(--text-opacity))",
          //   backgroundColor: "rgba(49,130,206,var(--text-opacity))",
          outline: "0",
          width: "100px",
          cursor: "pointer",
        }}
      >
        {props.firstName} {props.lastName}
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <Form
          firstName={props.firstName}
          lastName={props.lastName}
          email={props.email}
          contact={props.contact}
          year={props.year}
          description={props.description}
          branch={props.branch}
          leetcode={props.leetcode}
          codeforces={props.codeforces}
          codechef={props.codechef}
          techStack={props.techStack}
          linkedin={props.linkedin}
          username={props.username}
          github={props.github}
          workingWith={props.workingWith}
          image={props.image}
        />
      </Dialog>
    </div>
  );
}
