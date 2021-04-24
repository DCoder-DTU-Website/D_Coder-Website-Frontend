import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import api from "../../api/apiClient";
import Car from "../Gallery/coverFlow";
import Carousel, { Modal, ModalGateway } from "react-images";
import CoverFlow from "../Gallery/coverFlow";

export default function PhotoIndex() {
  const [Photos, ImageData] = useState([]);
  const getGallery = async () => {
    try {
      const { data } = await api.get("/gallery/all");
      const { data: photodata} = data;
      ImageData(photodata);
      console.log();
    } catch (err) {
      console.log("Could not retrieve Gallery!", err);
    }
  };

  useEffect(() => {
    getGallery();
  }, []);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
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
      <Gallery photos={Photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <CoverFlow slideIndex={currentImage} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
