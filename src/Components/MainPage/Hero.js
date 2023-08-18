import React from "react";
import { Link } from 'react-router-dom';
import "../../Styles/Hero.css";
import { useLanguage } from '../../locales/LanguageContext'; 
import enTranslations from '../../locales/EN/en.json'; 
import ltTranslations from '../../locales/LT/lt.json'; 

const Hero = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations; 

  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>{translations.welcome} <span></span></h1>
          <h1>{translations.myNameIs}<span></span> </h1>
          <h1>{translations.name}<span></span></h1>
          <Link to="/LogIn" className="cta">{translations.login}</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;