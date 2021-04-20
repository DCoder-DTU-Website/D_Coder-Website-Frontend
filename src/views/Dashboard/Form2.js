import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import tw from "twin.macro";
import Select from '@material-ui/core/Select';
import styled from "styled-components";

// import SingleFileUploadWithProgress from "./Upload/singleUpload"
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Upload from "./Upload/Upload"
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-white text-gray-600 rounded-lg font-bold tracking-wide  uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-gray-700 hocus:-translate-y-px hocus:shadow-xl`;
const Container = tw.div`relative px-10`;
const TwoColumn = tw.div`flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default ({
  submitButtonText = "Upload",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [value1, setValue1] = React.useState(new Date());

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TwoColumn>
        <TextColumn>
        <Upload />
        
        </TextColumn>
        <TextColumn textOnLeft={textOnLeft}>
       <TextField
          id="outlined-textarea"
          label="Name of The Event"
          placeholder="E.g. Senior Se Mulaqat"
          multiline
          name="name"
          variant="outlined"
        />
        <div style = {{display:"flex"}}>
        <TextField
          id="date"
          label="Starting Date"
          type="date"
          name="stdate"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Ending Date"
          type="date"
          name="enddate"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          placeholder="E.g. ABC"
          multiline
          name="desc"
          rows={4}
          col={10}
          variant="outlined"
        />
        </FormControl>
        </TextColumn>
        
      </TwoColumn>
      <div sytle = {{padding:"10px",margin:"auto"}}>
        <SubmitButton type="submit" value="Submit">Upload</SubmitButton></div>
    </form>
  );
}
