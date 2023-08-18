import React, { useState } from "react";
import "../../Styles/ImageUploader.css";
import { useLanguage } from '../../locales/LanguageContext';
import enTranslations from '../../locales/EN/en.json';
import ltTranslations from '../../locales/LT/lt.json';

const ImageUploader = ({ onImageUpload }) => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

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
        {translations.uploadImageButton}
      </button>
    </div>
  );
};

export default ImageUploader;