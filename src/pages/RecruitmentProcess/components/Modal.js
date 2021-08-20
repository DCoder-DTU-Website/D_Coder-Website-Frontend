import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import LinkIcon from '@material-ui/icons/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import swal from "sweetalert";
import api from "../../../api/apiClient";



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border:0,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline:"none",
    borderRadius:"20px",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [interview_DateTime,setDateTime] =React.useState("");
  const [interviewer_Name, setName] = React.useState("");
  const [interview_Link, setLink] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  const handleSubmit = () => {
    //On form submission
    setDateTime("");
    setName("");
    setLink("");
    props.applicant.interviewerName=interviewer_Name
    props.applicant.inteviewLink = interview_Link;
    props.applicant.interviewTime=interview_DateTime
    console.log(props.applicant);
    updateBackend(props.applicant)
    // console.log(interviewer_Name);
    // console.log(interview_Link);
    // console.log(interview_DateTime);
    handleClose();
  }
  const updateBackend = async (data) => {
    console.log(data)
    const res = await api.post("/applicants/setInterview", { data });
    swal({ title: res.data, icon: "success" });
  };
  // const updateBackend = async (data) => {
  //   console.log(data);
  //   const res = await api.put(`/applicants/${data._id}`, { data });
  //   swal({ title: res.data, icon: "success" });
  // };
  
  const handleSubmitHelper = async () => {
    const res = await swal({
      title: "Are you sure you want to Schedule?",
      icon: "warning",
      buttons: {
        Yes: {
          text: "Yes",
          value: "Yes",
        },
        No: {
          text: "No",
          value: "No",
        },
      },
    });
    if (res === "Yes") {
      await handleSubmit();
    } else {
      return;
    }
  };

  return (
    <div>
      <div type="button" onClick={handleOpen}>
        <LinkIcon style={{ fill: "green" }} />
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <TextField
                label="Interviewer Name"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Meet Link"
                onChange={(e) => setLink(e.target.value)}
              />
              <TextField
                id="datetime-local"
                label="Date and Time"
                type="datetime-local"
                defaultValue="2020-09-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={(e) => setDateTime(e.target.value)}
              />
              <Button
                onClick={() => handleSubmitHelper()}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
