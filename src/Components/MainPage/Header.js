import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Header.css";
import { useLanguage } from '../../locales/LanguageContext'; 
import enTranslations from '../../locales/EN/en.json'; 
import ltTranslations from '../../locales/LT/lt.json'; 

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const translations = language === 'en' ? enTranslations : ltTranslations;

  useEffect(() => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    if (hamburger && mobile_menu && menu_item && header) {
      const handleHamburgerClick = () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      };
  
      const handleScroll = () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
          header.style.backgroundColor = '#29323c';
        } else {
          header.style.backgroundColor = 'transparent';
        }
      };
  
      hamburger.addEventListener('click', handleHamburgerClick);
      document.addEventListener('scroll', handleScroll);
  
      return () => {
        hamburger.removeEventListener('click', handleHamburgerClick);
        document.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  const handleToggleLanguage = () => {
    if (language === 'en') {
      setLanguage('lt');
    } else {
      setLanguage('en');
    }
  };

  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>G</span>{translations.brandPart1} <span>K</span>{translations.brandPart2}</h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
            
              <li><a href="#hero" data-after={translations.home}>{translations.home}</a></li>
              <li><Link to="/ImageLibrary" data-after={translations.myPhotos}>{translations.myPhotos}</Link></li>
              <li><a href="#about" >{translations.aboutMe}</a></li>
              <li><a href="#contact" data-after={translations.contact}>{translations.contact}</a></li>
              <li><button className="language-toggle rounded"onClick={handleToggleLanguage}title={translations.toggleLanguageTitle}>{translations.language}</button></li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;