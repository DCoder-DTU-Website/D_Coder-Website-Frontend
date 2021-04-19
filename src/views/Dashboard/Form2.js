import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import tw from "twin.macro";
import Select from '@material-ui/core/Select';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DatePicker from '@material-ui/lab/DatePicker';
// import SingleFileUploadWithProgress from "./Upload/singleUpload"
import Button from '@material-ui/core/Button';
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
       <TextField
          id="outlined-textarea"
          label="Name of The Event"
          placeholder="E.g. Senior Se Mulaqat"
          multiline
          variant="outlined"
        />
        {/* <div>
           <LocalizationProvider dateAdapter={AdapterDateFns}>
             <div style={{ width: 300 }}>
                <DatePicker
                  disableFuture
                  label="Responsive"
                  openTo="year"
                  views={['year', 'month', 'date']}
                  value={value1}
                  onChange={(newValue) => {
                    setValue1(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} margin="normal" />}
                />
              </div>
           </LocalizationProvider>
        </div> */}
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          placeholder="E.g. ABC"
          multiline
          rows={4}
          col={10}
          variant="outlined"
        />
        </FormControl>
        <Upload />

    </form>
  );
}
