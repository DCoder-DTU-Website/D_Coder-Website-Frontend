import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import tw from "twin.macro";
import Upload from "./Upload/Upload";
import api from "../../api/apiClient";
import axios from "axios";
import swal from "sweetalert";

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-white text-gray-600 rounded-lg font-bold tracking-wide  uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-gray-700 hocus:-translate-y-px hocus:shadow-xl`;
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
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

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
      await api.post("/gallery/add", { title: title, image: imageUrl });
      setTitle("");
      swal({
        title: "Image Uploaded Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
      setLoading(false);
    } catch (err) {
      console.log(err, "Upload Failed");
    }
  };
  return (
    <form action="#" method="get" className={classes.root}>
      <div style={{ display: "flex flex-col" }}>
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
          />
        </FormControl>
      </div>
      <div>
        <Upload images={images} setImages={setImages} />
        <SubmitButton onClick={clickSubmit} disabled={loading}>
          Upload
        </SubmitButton>
      </div>
    </form>
  );
}
