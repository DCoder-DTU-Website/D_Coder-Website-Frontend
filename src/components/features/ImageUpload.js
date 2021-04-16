import React, { useState } from "react";
import ImageUploader from "react-images-upload";


const ImageUpload = () => {
  const [picture, setPicture] = useState([]);
  const [data, setdata] = useState(false);
  const onDrop = (pic) => {
    setPicture([...picture,pic]);
    setdata(true);
    console.log(pic);
  };
  return (
    <div>
      {data && <div>Image Uploaded</div>}
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    </div>
  );
};

export default ImageUpload;
