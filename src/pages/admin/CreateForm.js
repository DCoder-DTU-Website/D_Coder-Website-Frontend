import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import tw from "twin.macro";
import Upload from "../../components/features/Upload/Upload";
import api from "../../api/apiClient";
import axios from "axios";
import swal from "sweetalert";

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-600 text-white rounded-lg tracking-wide uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-800 hover:text-white hocus:-translate-y-px hocus:shadow-xl`;
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
  const [loading, setLoading] = useState(false);

  const clickSubmit = async () => {
    try {
      setLoading(true);
      await api.post("/forms/add", {
        title: title,
        desc: desc,
        form_url: form_url,
        response_url: response_url,
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
      setLoading(false);
    } catch (err) {
      console.log(err, "Upload Failed");
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
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
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="input"
          id="outlined-textarea"
          label="Description"
          placeholder="E.g. ABC"
          multiline
          variant="outlined"
          required
          name="desc"
          fullWidth
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </Grid>
      <Grid item xs={12}>
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
      <Grid item xs={12}>
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
      <Grid item>
        <SubmitButton onClick={clickSubmit} disabled={loading}>
          Upload
        </SubmitButton>
      </Grid>
    </Grid>
  );
}
