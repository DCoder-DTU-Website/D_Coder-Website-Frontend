import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import tw from "twin.macro";
// import SingleFileUploadWithProgress from "./Upload/singleUpload"
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-white text-gray-700 rounded-lg font-bold tracking-wide  uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-gray-700 hocus:-translate-y-px hocus:shadow-xl`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
    //  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* Title Dropdown */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Title</InputLabel>
        <Select
        //   labelId="demo-simple-select-outlined-label"
        //   id="demo-simple-select-outlined"
        //   value={age}
        //   onChange={handleChange}
          label="Title"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Data Structures and Algorithms</MenuItem>
          <MenuItem value={20}>Web Development</MenuItem>
          <MenuItem value={30}>Andriod Development</MenuItem>
          <MenuItem value={40}>Machine Learning</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sub-Title</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Sub-Title"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Array</MenuItem>
          <MenuItem value={2}>Linked-List</MenuItem>
          <MenuItem value={3}>Binary Trees</MenuItem>
          <MenuItem value={4}>Binary Search Trees</MenuItem>
          <MenuItem value={5}>Heaps</MenuItem>
          <MenuItem value={6}>Graphs</MenuItem>
        </Select>
      </FormControl>
      <TextField
          id="outlined-textarea"
          label="Image Url"
          placeholder="E.g. https://www.youtube.com"
          multiline
          variant="outlined"
        />
      {/* <SingleFileUploadWithProgress /> */}
      <SubmitButton type="submit" value="Submit">Upload</SubmitButton>
    </form>
  );
}
