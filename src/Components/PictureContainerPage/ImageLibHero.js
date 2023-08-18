
import React from "react";
import "../../Styles/ImgLibHero.css";
import { useLanguage } from '../../locales/LanguageContext';
import enTranslations from '../../locales/EN/en.json';
import ltTranslations from '../../locales/LT/lt.json';

const ImgLibHero = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  return (
    <section id="heroUpload">
      <div className="heroUpload container">
        <div>
          <h1>{translations.imgLibWelcome}<span></span> </h1>
          <h1>{translations.my} <span></span></h1>
          <h1>{translations.photoalbum} <span></span></h1>

        </div>
      </div>
    </section>
  );
};

export default ImgLibHero;