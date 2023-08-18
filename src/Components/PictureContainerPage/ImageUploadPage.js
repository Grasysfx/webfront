import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageList from "./ImageList";
import "../../Styles/ImageUploadPage.css";
import { useLanguage } from '../../locales/LanguageContext';
import enTranslations from '../../locales/EN/en.json';
import ltTranslations from '../../locales/LT/lt.json';

const ImageUploadPage = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (image) => {
    setUploadedImages([...uploadedImages, image]);
  };

  return (
    <div className="image-upload-page">
      <h1 className="page-title">{translations.uploadPhotos}</h1>
      <ImageUploader onImageUpload={handleImageUpload} />
      <ImageList images={uploadedImages} />
    </div>
  );
};

export default ImageUploadPage;