import React from "react";
import { useLanguage } from '../../locales/LanguageContext'; 
import enTranslations from '../../locales/EN/en.json'; 
import ltTranslations from '../../locales/LT/lt.json'; 
import ContactItem from "./ContactItem";
import "../../Styles/Contact.css";

const Contact = () => {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">{translations.contactTitle}</h1>
        </div>
        <div className="contact-items">
          <ContactItem pictureSrc="https://img.icons8.com/bubbles/100/000000/phone.png" title={translations.phoneTitle} contactInfo={translations.phoneInfo} />
          <ContactItem pictureSrc="https://img.icons8.com/bubbles/100/000000/new-post.png" title={translations.emailTitle} contactInfo={translations.emailInfo} />
          <ContactItem pictureSrc="https://img.icons8.com/bubbles/100/000000/map-marker.png" title={translations.addressTitle} contactInfo={translations.addressInfo} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

