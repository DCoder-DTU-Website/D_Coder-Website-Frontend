import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DatePicker from '@material-ui/lab/DatePicker';
// import SingleFileUploadWithProgress from "./Upload/singleUpload"
import Button from '@material-ui/core/Button';
import tw from "twin.macro";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Upload from "./Upload/Upload"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [value1, setValue1] = React.useState(new Date());

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
       <TextField
          id="outlined-textarea"
          label="Title"
          placeholder="E.g. Senior Se Mulaqat"
          multiline
          variant="outlined"
        />
      </div>
        
        <Upload />

    </form>
  );
}
