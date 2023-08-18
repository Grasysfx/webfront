
import React from "react";
import "../../Styles/HeroLogin.css";
import { useLanguage } from '../../locales/LanguageContext';
import enTranslations from '../../locales/EN/en.json';
import ltTranslations from '../../locales/LT/lt.json';

const LoginHero = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  return (
    <section id="heroLogin">
      <div className="heroLogin container">
        <div>
          <h1>{translations.loginPlease}<span></span></h1>
          <h1>{translations.loginSignIn}<span></span></h1>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
