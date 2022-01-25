import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Backdrop from "@material-ui/core/Backdrop";
import api from "../../../../../api/apiClient";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import swal from "sweetalert";
import Button from "@material-ui/core/Button";
import Upload from "../../../../../components/features/Upload/Upload";
import axios from "axios";

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
  const [images, setImages] = React.useState();
  const [imagesLogo, setImagesLogo] = React.useState();
  const [uploading, setUploading] = React.useState(false);
  const [entry, setEntry] = React.useState({
    name: "",
    linkedin: "",
    imageSrc: "",
    post: "",
    content: "",
    logo: "",
    isInternship: false,
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", images[0].file);
      formData.append("upload_preset", "gekvwtzt");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcoderdtu/image/upload",
        formData
      );
      return res.data.url;
    } catch (err) {
      console.error(err, "Image Upload Failed!");
    }
  };

  const uploadImageLogo = async () => {
    try {
      const formData = new FormData();
      formData.append("file", imagesLogo[0].file);
      formData.append("upload_preset", "gekvwtzt");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcoderdtu/image/upload",
        formData
      );
      return res.data.url;
    } catch (err) {
      console.error(err, "Image Upload Failed!");
    }
  };

  const clickSubmit = async () => {
    try {
      setUploading(true);
      const imageUrl = await uploadImage();
      console.log("IMAGE URL!!", imageUrl);
      swal({
        title: "Project Uploaded Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      setUploading(false);
    } catch (err) {
      swal({
        title: "Not Authorized!",
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    }
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
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Add Placement</DialogTitle>
        <DialogContent>
          <Fade in={open}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Name"
                  value={entry.name}
                  fullWidth
                  onChange={(e) => {
                    setEntry({ ...entry, name: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Upload
                  images={images}
                  setImages={setImages}
                  title="Upload Profile Picture"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Company"
                  value={entry.post}
                  fullWidth
                  onChange={(e) => {
                    setEntry({ ...entry, post: e.target.value });
                  }}
                />
              </Grid>
              {/* <Grid item xs={6}>
                <Upload
                  images={imagesLogo}
                  setImages={setImagesLogo}
                  title="Upload Company Logo"
                />
              </Grid> */}
              <Grid item xs={6}>
                <TextField
                  label="Company Logo URL"
                  value={entry.logo}
                  fullWidth
                  onChange={(e) => {
                    setEntry({ ...entry, logo: e.target.value });
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Linkedin"
                  value={entry.linkedin}
                  fullWidth
                  onChange={(e) => {
                    setEntry({ ...entry, linkedin: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  value={entry.content}
                  fullWidth
                  multiline
                  rows={4}
                  onChange={(e) => {
                    setEntry({ ...entry, content: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: 8, textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={async (e) => {
                    const imageUrl = await uploadImage();
                    // const imageLogoUrl = await uploadImageLogo();
                    console.log("IMAGE URL!", imageUrl);
                    let obj = { ...entry };
                    obj.imageSrc = imageUrl;
                    // obj.logo = imageLogoUrl;
                    const resp = await api.post("placements/add", obj);
                    await swal({
                      title: "Placement added successfully!",
                      icon: "success",
                      buttons: true,
                      closeOnClickOutside: true,
                      closeOnEsc: true,
                    });
                    props.getData();
                  }}
                >
                  Add Placement
                </Button>
              </Grid>
            </Grid>
          </Fade>
        </DialogContent>
      </Dialog>
    </div>
  );
}
