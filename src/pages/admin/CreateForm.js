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
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const clickSubmit = async () => {
    try {
      alert(`http://dcoderfrontend.herokuapp.com/form/${title}`);
      setLoading(true);
      await api.post(`/form/${title}`, {
        title: title,
        link: link,
      });
      swal({
        title: "Notice Uploaded Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      setTitle("");
      setLink("");
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
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="input"
          id="outlined-textarea"
          label="Links"
          placeholder="E.g. Google Forms Registration Link"
          multiline
          variant="outlined"
          fullWidth
          onChange={(e) => setLink(e.target.value)}
          value={link}
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
