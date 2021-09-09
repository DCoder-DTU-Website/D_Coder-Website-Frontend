import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import tw from "twin.macro";
import api from "../../../api/apiClient";
import swal from "sweetalert";

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-600 text-white rounded-lg tracking-wide uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-800 hover:text-white hocus:-translate-y-px hocus:shadow-xl`;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

export default function BasicTextFields() {
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
      setTopic("");
      setUrl("");
      setSubTopic("");
      await api.post("/lecture/add", videoData);
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InputLabel id="demo-simple-select-outlined-label">Title</InputLabel>
        <Select
          label="Title"
          onChange={(e) => setTopic(e.target.value)}
          fullWidth
        >
          <MenuItem value="" selected={topic.length === 0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"dsa"}>Data Structures and Algorithms</MenuItem>
          <MenuItem value={"webd"}>Web Development</MenuItem>
          <MenuItem value={"interview"}>Interview</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <InputLabel id="demo-simple-select-outlined-label">
          Sub-Title
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Sub-Title"
          fullWidth
          onChange={(e) => setSubTopic(e.target.value)}
        >
          <MenuItem value="" selected={subTopic.length === 0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"arrays"}>Array</MenuItem>
          <MenuItem value={"linkedlist"}>Linked List</MenuItem>
          <MenuItem value={"stacks"}>Stacks</MenuItem>
          <MenuItem value={"ques"}>Queues</MenuItem>
          <MenuItem value={"dp"}>Dynamic Programming</MenuItem>
          <MenuItem value={"graphs"}>Graphs</MenuItem>
          <MenuItem value={"nodejs"}>Node JS</MenuItem>
          <MenuItem value={"reactjs"}>React JS</MenuItem>
          <MenuItem value={"angularjs"}>Angular JS</MenuItem>
          <MenuItem value={"vuejs"}>Vue JS</MenuItem>
          <MenuItem value={"djandpy"}>Django and Python</MenuItem>
          <MenuItem value={"leetcode"}>LeetCode</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <TextField
          id="outlined-textarea"
          label="Image Url"
          placeholder="E.g. https://www.youtube.com"
          multiline
          variant="outlined"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          fullWidth
        />
      </Grid>
      <Grid item>
        <SubmitButton
          onClick={clickSubmit}
          style={{
            backgroundColor: "rgba(49,130,206)",
            color: "white",
            marginLeft: "10px",
          }}
        >
          Upload
        </SubmitButton>
      </Grid>
    </Grid>
  );
}
