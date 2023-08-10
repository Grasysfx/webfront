import React, { useState } from "react";
import "../../Styles/ImageUploader.css";

const ImageUploader = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  const handleUploadClick = () => {
    if (selectedImage) {
      onImageUpload(selectedImage);
      setSelectedImage(null);
    }
  };

  return (
    <div className="image-uploader">
      <input className="upload-input" type="file" onChange={handleImageChange} />
      <button className="upload-button" onClick={handleUploadClick}>
        Įkelti nuotrauką
      </button>
    </div>
  );
};

export default ImageUploader;