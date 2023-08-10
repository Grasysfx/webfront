import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageModal from "./ImageModal";
import "../../Styles/ImageList.css";

const ImageList = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-list-container">
      <h2 className="image-title">Įkeltos nuotraukos:</h2>
      <ul className="image-list">
        {images.map((image, index) => (
          <li
            className="image-item"
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <div className="image-frame">
              <img
                className="uploaded-image"
                src={URL.createObjectURL(image)}
                alt={`Nuotrauka ${index}`}
              />
            </div>
          </li>
        ))}
      </ul>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageList;