import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageModal from "./ImageModal";
import "../../Styles/ImageList.css";
import ImageItem from "./ImageItem";
import { useLanguage } from '../../locales/LanguageContext';
import enTranslations from '../../locales/EN/en.json';
import ltTranslations from '../../locales/LT/lt.json';

const ImageList = ({ images, onRemoveImage }) => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="image-list-container">
      <h2 className="image-title">{translations.uploadedPhotos}:</h2>
      <ul className="image-list">
        {images.map((image, index) => (
          <ImageItem
            key={index}
            index={index}
            image={image}
            onImageClick={handleImageClick}
            onRemoveImage={onRemoveImage}
          />
        ))}
      </ul>
      {selectedImageIndex !== null && (
        <ImageModal
          images={images}
          onClose={handleCloseModal}
          selectedImageIndex={selectedImageIndex}
          onRemoveImage={onRemoveImage}
        />
      )}
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
};

export default ImageList;