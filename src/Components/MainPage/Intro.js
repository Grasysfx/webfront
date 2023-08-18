import React from "react";
import IntroItem from "./IntroItems";
import "../../Styles/Intro.css";
import Panda from "../../Images/Pandukas.jpg"
import Training from "../../Images/Manksta.jpeg"; 
import Smile from "../../Images/Sypsena.jpeg"; 
import Sleep from "../../Images/Miegas.jpg"; 
import Cont from "../../Images/Continue.jpg"; 
import { useLanguage } from '../../locales/LanguageContext'; 
import enTranslations from '../../locales/EN/en.json'; 
import ltTranslations from '../../locales/LT/lt.json'; 


const Intro = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  return (
    <section id="Intro">
      <div className="Intro container">
        <div className="Intro-header">
          <h1 className="section-title">{translations.introTitle1}<span>{translations.introTitle2}</span></h1>
        </div>
        <div className="Intro-bottom">
          <IntroItem imgSrc={Panda} title={translations.pandaTitle} description={translations.pandaDescription} />
          <IntroItem imgSrc={Training} title={translations.trainingTitle} description={translations.trainingDescription} />
          <IntroItem imgSrc={Smile} title={translations.smileTitle} description={translations.smileDescription} />
          <IntroItem imgSrc={Sleep} title={translations.sleepTitle} description={translations.sleepDescription} />
          <IntroItem imgSrc={Cont} title={translations.continueTitle} description={translations.continueDescription} />
        </div>
      </div>
    </section>
  );
};
 
export default Intro;