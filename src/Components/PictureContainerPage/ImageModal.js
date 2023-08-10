import React from "react";
import PropTypes from "prop-types";
import "../../Styles/ImageModal.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <img className="modal-image" src={URL.createObjectURL(image)} alt="Pasirinkta nuotrauka" />
        <button className="close-button" onClick={onClose}>
          Uždaryti
        </button>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;