import React from "react";
import ImageUploading from "react-images-uploading";
import "./style.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Upload = ({ images, setImages, disabled }) => {
  const classes = useStyles();
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <Button
              className={classes.button}
              style={
                disabled
                  ? {
                      color: "gray",
                      backgroundColor: "#ddd",
                      width: "100%",
                      marginBottom: "-10px",
                    }
                  : { color: "white", width: "100%", marginBottom: "-10px" }
              }
              onClick={onImageUpload}
              {...dragProps}
              disabled={disabled}
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
            </Button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <div>
                  <img src={image["data_url"]} alt="upload" width="200" />
                </div>
                <div className="image-item__btn-wrapper">
                  <Button
                    className={classes.button}
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </Button>
                  <Button
                    className={classes.button}
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

const useStyles = makeStyles({
  button: {
    backgroundColor: "#3182ce",
    color: "white",
    "&:hover": {
      backgroundColor: "#2c5282",
    },
    marginBottom: "10px",
  },
});

export default Upload;
