import React from "react";
import "../../Styles/Footer.css";
import { useLanguage } from '../../locales/LanguageContext'; 
import enTranslations from '../../locales/EN/en.json'; 
import ltTranslations from '../../locales/LT/lt.json'; 

const Footer = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1><span>G</span>{translations.brandPart1} <span>K</span>{translations.brandPart2}</h1>
        </div>
        <h2>{translations.personalPage}</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="Facebook" /></a>
          </div>
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram" /></a>
          </div>
        </div>
        <p>{translations.copyright}</p>
      </div>
    </section>
  );
};

export default Footer;