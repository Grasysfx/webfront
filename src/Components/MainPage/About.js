import React from "react";
import { useLanguage } from '../../locales/LanguageContext'; 
import "../../Styles/About.css";
import AboutImg from "../../Images/About-me.jpeg";


const About = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? require('../../locales/EN/en.json') : require('../../locales/LT/lt.json'); 

  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={AboutImg} alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">{translations.aboutTitle}</h1>
          <h2>{translations.aboutDescription}</h2>
          {/* <a href="#" className="cta">{translations.downloadPhotos}</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;