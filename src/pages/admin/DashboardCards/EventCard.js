import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Upload from "../../../components/features/Upload/Upload";
import tw from "twin.macro";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import api from "../../../api/apiClient";
import axios from "axios";
import swal from "sweetalert";
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-blue-600 text-white rounded-lg tracking-wide uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-blue-800 hover:text-white hocus:-translate-y-px hocus:shadow-xl`;
const TwoColumn = tw.div`flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-12 md:order-first`
    : tw`md:ml-12 lg:ml-12 md:order-last`,
]);

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form2 = ({
  submitButtonText = "Upload",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const classes = useStyles();
  // const [value, setValue] = React.useState("Controlled");
  // const [value1, setValue1] = React.useState(new Date());

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [desc, setDesc] = useState("");
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
      await api.post("/event/add", {
        title: title,
        desc: desc,
        startDate: startDate,
        endDate: endDate,
        image: imageUrl,
      });
      setTitle("");
      setStartDate("");
      setEndDate("");
      setDesc("");
      swal({
        title: "Event Uploaded Successfully!",
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
      <TwoColumn>
        <TextColumn>
          <Upload images={images} setImages={setImages} />
        </TextColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextField
            id="outlined-textarea"
            label="Name of The Event"
            placeholder="E.g. Senior Se Mulaqat"
            multiline
            name="name"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <div className="eventstyle">
            <TextField
              id="date"
              label="Starting Date"
              type="date"
              name="stdate"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
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
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
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
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </FormControl>
        </TextColumn>
      </TwoColumn>
      <div
        sytle={{
          padding: "10px",
          margin: "auto",
          backgroundColor: "rgb(49,130,206)",
        }}
      >
        <SubmitButton
          onClick={clickSubmit}
          disabled={loading}
          style={{ backgroundColor: "rgba(49,130,206)", color: "white" }}
        >
          Upload
        </SubmitButton>
      </div>
    </form>
  );
};

export default Form2;
