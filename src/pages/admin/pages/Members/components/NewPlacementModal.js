import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import api from "../../../../../api/apiClient";
import Fade from "@material-ui/core/Fade";
import swal from "sweetalert";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
    border: "0",
    outline: "0",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [entry, setEntry] = React.useState({
    name: '',
    linkedin: '',
    imageSrc: '',
    post: '',
    content: '',
    logo: '',
    isInternship: false
  })
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-around",
      }}
    >
      <Button
        type="button"
        variant="contained"
        onClick={handleOpen}
        style={{
          color: "white",
          backgroundColor: "rgba(49,130,206,var(--text-opacity))",
          outline: "0",
          margin: "20px 0",
        }}
      >
        Add Placement
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <Grid container>
              <Grid item xs={12}>
          <TextField label="Name" value={entry.name} fullWidth onChange={e=>{
            setEntry({...entry, name: e.target.value})
          }}/></Grid><Grid item xs={12}>
          <TextField label="Image URL" value={entry.imageSrc} fullWidth onChange={e=>{
            setEntry({...entry, imageSrc: e.target.value})
          }} /></Grid><Grid item xs={12}>
          <TextField label="Company" value={entry.post} fullWidth onChange={e=>{
            setEntry({...entry, post: e.target.value})
          }} /></Grid><Grid item xs={12}>
          <TextField label="Logo URL" value={entry.logo} fullWidth onChange={e=>{
            setEntry({...entry, logo: e.target.value})
          }} /></Grid><Grid item xs={12}>
          <TextField label="Message" value={entry.content} fullWidth onChange={e=>{
            setEntry({...entry, content: e.target.value})
          }} /></Grid><Grid item xs={12}>
          <TextField label="Linkedin" value={entry.linkedin} fullWidth onChange={e=>{
            setEntry({...entry, linkedin: e.target.value})
          }} /></Grid>
          <Grid item xs={12} style={{marginTop: 8, textAlign: 'center'}}>
            <Button variant="contained" color="primary" onClick={async (e)=>{
              const resp = await api.post("placements/add",entry);
              await swal({
                title: "Placement added successfully!",
                icon: "success",
                buttons: true,
                closeOnClickOutside: true,
                closeOnEsc: true,
              });
              props.getData();
            }}>Add Placement</Button>
          </Grid>
          </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
