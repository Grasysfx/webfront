import React from "react";
import PropTypes from "prop-types";
import "../../Styles/ImageItem.css";

const ImageItem = ({ index, image, onImageClick, onRemoveImage }) => {
    const handleImageClick = () => {
      onImageClick(index);
    };
  
    const handleRemoveClick = () => {
      onRemoveImage(index);
    };
  
    return (
      <li className="image-item" onClick={handleImageClick}>
        <img
          className="uploaded-image"
          src={URL.createObjectURL(image)}
          alt={`Nuotrauka ${index}`}
        />
        <button className="remove-button" onClick={handleRemoveClick}>
          ❌
        </button>
      </li>
    );
  };
  
  ImageItem.propTypes = {
    index: PropTypes.number.isRequired,
    image: PropTypes.object.isRequired,
    onImageClick: PropTypes.func.isRequired,
    onRemoveImage: PropTypes.func.isRequired,
  };
  
  export default ImageItem;