import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import tw from "twin.macro";
import Upload from "./Upload/Upload";
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-white text-gray-600 rounded-lg font-bold tracking-wide  uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-gray-700 hocus:-translate-y-px hocus:shadow-xl`;
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields({ submitButtonText = "Upload" }) {
  const classes = useStyles();
  // const [value, setValue] = React.useState("Controlled");
  // const [value1, setValue1] = React.useState(new Date());

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <form action="#" method="get" className={classes.root}>
      <div style={{ display: "flex flex-col" }}>
        <FormControl variant="outlined" className={classes.formControl}>
          <TextField
            type="input"
            id="outlined-textarea"
            label="Title"
            name="title"
            placeholder="E.g. Senior Se Mulaqat"
            multiline
            variant="outlined"
          />
        </FormControl>
      </div>
      <div>
        <Upload />
        <SubmitButton type="submit" value="Submit">
          Upload
        </SubmitButton>
      </div>
    </form>
  );
}
