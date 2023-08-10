import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageList from "./ImageList";
import "../../Styles/ImageUploadPage.css"

const ImageUploadPage = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (image) => {
    setUploadedImages([...uploadedImages, image]);
  };

  return (
    <div className="image-upload-page">
      <h1 className="page-title">Įkelkite nuotraukas</h1>
      <ImageUploader onImageUpload={handleImageUpload} />
      <ImageList images={uploadedImages} />
    </div>
  );
};

export default ImageUploadPage;