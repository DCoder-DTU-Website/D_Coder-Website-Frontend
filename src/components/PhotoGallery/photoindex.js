import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
// import { photos } from "./photos";
import { Modal, ModalGateway } from "react-images";
import CoverFlow from "../Gallery/coverFlow";
import api from "../../api/apiClient";  
import { useMediaQuery } from 'react-responsive'

export default function PhotoIndex() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 850px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-device-width: 850px)'
  })

  
  const getPhotos = async () => {
    try {
      const images = await api.get("/gallery/all");
      const { data: gallery } = images.data;
      const galleryImgs = gallery.map((image) => ({
        src: image.image,
        width: 5,
        height: 5,
        title: image.title,
      }));
      setPhotos(galleryImgs);
    } catch (err) {
      console.error(err, "Couldn't retrieve photos.");
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    alert("Press Esc To Exit");
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
   
  return (
    <div
      style={{
        padding: "10%",
        // backgroundColor:"rgb(26,32,44)",
        marginLeft: "-35px",
        marginRight: "-35px",
        marginBottom: "-35px",
      }}
    >
      {/* {isDesktopOrLaptop && <Gallery 
        photos={photos}
        onClick={openLightbox}
         />}
      {isMobile && <Gallery photos={photos} />} */}
      <Gallery photos={photos}  onClick={openLightbox} />
      <ModalGateway >
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <CoverFlow slideIndex={currentImage} slides={photos} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
