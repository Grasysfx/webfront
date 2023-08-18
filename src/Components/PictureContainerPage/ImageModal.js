import React from "react";
import PropTypes from "prop-types";
import "../../Styles/ImageModal.css";


const ImageModal = ({ images, onClose, selectedImageIndex, onRemoveImage }) => {
  const handleRemoveClick = () => {
    if (typeof onRemoveImage === "function") {
      onRemoveImage(selectedImageIndex);
      onClose();
    }
  };

  const selectedImage = images[selectedImageIndex];

  return (
    <div className="image-modal">
      <div className="modal-content">
        <img
          className="modal-image"
          src={URL.createObjectURL(selectedImage)}
          alt="Pasirinkta nuotrauka"
        />
        <button className="close-button" onClick={onClose}>
          Uždaryti
        </button>
        <button className="remove-button" onClick={handleRemoveClick}>
          ❌ Ištrinti
        </button>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  images: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
};

export default ImageModal;