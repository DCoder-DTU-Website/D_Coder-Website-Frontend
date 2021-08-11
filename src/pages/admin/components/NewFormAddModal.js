import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import tw from "twin.macro";
import Upload from "../../../components/features/Upload/Upload";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import api from "../../../api/apiClient";
import axios from "axios";
import swal from "sweetalert";

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-600 text-white rounded-lg tracking-wide uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-800 hover:text-white hocus:-translate-y-px hocus:shadow-xl`;
const UploadImageButton = tw.button`w-full sm:w-32 mt-6 py-3 rounded-lg tracking-wide uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-800 hover:text-white hocus:-translate-y-px hocus:shadow-xl`;
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [form_url, setFormUrl] = useState("");
  const [response_url, setResponseUrl] = useState("");
  const [images, setImages] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDateChange = (date) => {
    setDeadline(date);
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
      setImages([]);
      console.log(res.data.url);
      return res.data.url;
    } catch (err) {
      console.error(err, "Image Upload Failed!");
    }
  };

  const clickSubmit = async () => {
    try {
      setLoading(true);
      const imageUrl = await uploadImage();
      await api.post("/forms/add", {
        title: title,
        desc: desc,
        form_url: form_url,
        deadline: deadline,
        response_url: response_url,
        image: imageUrl,
      });
      swal({
        title: "Form Uploaded Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      setTitle("");
      setDesc("");
      setFormUrl("");
      setResponseUrl("");
      setDeadline("");
      setLoading(false);
    } catch (err) {
      console.log(err, "Upload Failed");
    }
  };
  return (
    <Grid>
      <div
        className="full-container"
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <div
          className="inner-sections"
          id="inner-sections1"
          style={{
            display: "flex",
            padding: "10px",
            margin: "10px",
            width: "100%",
          }}
        >
          <div
            className="two-column-sections"
            id="section1"
            style={{
              padding: "10px",
              margin: "10px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Grid item xs={12} style={{ margin: "6px 0px" }}>
              <TextField
                type="input"
                id="outlined-textarea"
                label="Title"
                placeholder="E.g. Senior Se Mulaqat"
                multiline
                variant="outlined"
                required
                name="title"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: "6px 0px" }}>
              <TextField
                id="outlined-textarea"
                label="Description"
                placeholder="Placeholder"
                multiline
                variant="outlined"
                rows={6}
                placeholder="Eg. ABC"
                required
                name="desc"
                fullWidth
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: "6px 0px" }}>
              <TextField
                type="input"
                id="outlined-textarea"
                label="Google Form Link"
                placeholder="E.g. Google Forms Registration Link"
                multiline
                name="form_url"
                variant="outlined"
                fullWidth
                onChange={(e) => setFormUrl(e.target.value)}
                value={form_url}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: "6px 0px" }}>
              <TextField
                type="input"
                id="outlined-textarea"
                label="Response Sheet Link"
                placeholder="E.g. Google Sheets Link"
                multiline
                name="response_url"
                variant="outlined"
                fullWidth
                onChange={(e) => setResponseUrl(e.target.value)}
                value={response_url}
              />
            </Grid>
          </div>
          <div
            className="two-column-sections"
            id="section2"
            style={{ padding: "10px", margin: "10px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Grid>
                <TextField
                  id="date"
                  label="Deadline"
                  type="date"
                  name="deadline"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setDeadline(e.target.value)}
                  value={deadline}
                />
              </Grid>
              <div style={{ display: "flex", marginTop: "35px" }}>
                <Upload images={images} setImages={setImages} />
              </div>
            </div>
          </div>
        </div>
        <div className="inner-sections" id="inner-sections2"></div>
      </div>

      <Grid
        item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SubmitButton onClick={clickSubmit} disabled={loading}>
          Upload
        </SubmitButton>
      </Grid>
    </Grid>
  );
}
