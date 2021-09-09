import React from "react";
import ImageUploading from "react-images-uploading";
import "./style.css";

const Upload = ({ images, setImages }) => {
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
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
            <button
              style={
                isDragging
                  ? { backgroundColor: "#1A202C" }
                  : { backgroundColor: "rgba(49,130,206)", color: "white" }
              }
              onClick={onImageUpload}
              {...dragProps}
            >
              DROP IMAGE
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>UPDATE</button>
                  <button onClick={() => onImageRemove(index)}>REMOVE</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default Upload;
