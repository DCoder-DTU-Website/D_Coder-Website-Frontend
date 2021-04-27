import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import tw from "twin.macro";
import api from "../../api/apiClient";
import swal from "sweetalert";

const SubmitButton = tw.button`w-full sm:w-32 mt-6 ml-96 py-3 bg-white text-gray-600 rounded-lg font-bold tracking-wide  uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-gray-700 hocus:-translate-y-px hocus:shadow-xl`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [url, setUrl] = React.useState("");
  const [topic, setTopic] = React.useState("");
  const [subTopic, setSubTopic] = React.useState("");

  const clickSubmit = async () => {
    const videoData = {
      title: "video",
      link: url,
      topic: topic,
      subtopic: subTopic,
    };
    try {
      await api.post("/lecture/add", videoData);
      setTopic("");
      setUrl("");
      setSubTopic("");
      swal({
        title: "Lecture Uploaded Successfully!",
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    } catch (err) {
      console.log(err, "Upload Failed");
    }
  };

  return (
    <form className={classes.root} onSubmit={(e) => e.preventDefault()}>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Title</InputLabel>
        <Select label="Title" onChange={(e) => setTopic(e.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"dsa"}>Data Structures and Algorithms</MenuItem>
          <MenuItem value={"webd"}>Web Development</MenuItem>
          <MenuItem value={"appd"}>Andriod Development</MenuItem>
          <MenuItem value={"ml"}>Machine Learning</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Sub-Title
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Sub-Title"
          onChange={(e) => setSubTopic(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"array"}>Array</MenuItem>
          <MenuItem value={"linkedlist"}>Linked-List</MenuItem>
          <MenuItem value={"binarytrees"}>Binary Trees</MenuItem>
          <MenuItem value={"bst"}>Binary Search Trees</MenuItem>
          <MenuItem value={"heaps"}>Heaps</MenuItem>
          <MenuItem value={"graphs"}>Graphs</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-textarea"
        label="Image Url"
        placeholder="E.g. https://www.youtube.com"
        multiline
        variant="outlined"
        onChange={(e) => setUrl(e.target.value)}
      />
      <SubmitButton
        onClick={clickSubmit}
        style={{ backgroundColor: "rgba(49,130,206)", color: "white", marginLeft: "10px"  }}
      >
        Upload
      </SubmitButton>
    </form>
  );
}
