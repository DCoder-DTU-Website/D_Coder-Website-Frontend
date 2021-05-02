import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const clickSubmit = async () => {
    try {
      setLoading(true);
      await api.post("/notices/add", {
        title: title,
        description: desc,
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
      setDesc("");
      setLink("");
      setLoading(false);
    } catch (err) {
      console.log(err, "Upload Failed");
    }
  };
  return (
    <form className={classes.root}>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex flex-col", marginRight: "60px" }}>
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                type="input"
                id="outlined-textarea"
                label="Title"
                placeholder="E.g. Senior Se Mulaqat"
                multiline
                variant="outlined"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <TextField
                type="input"
                id="outlined-textarea"
                label="Description"
                placeholder="E.g. Do join !"
                multiline
                variant="outlined"
                required
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
              <TextField
                type="input"
                id="outlined-textarea"
                label="Links"
                placeholder="E.g. Google Forms Registration Link"
                multiline
                variant="outlined"
                onChange={(e) => setLink(e.target.value)}
                value={link}
              />
            </FormControl>
          </div>
          <div>
            <SubmitButton onClick={clickSubmit} disabled={loading}>
              Upload
            </SubmitButton>
          </div>
        </div>
      </div>
    </form>
  );
}
