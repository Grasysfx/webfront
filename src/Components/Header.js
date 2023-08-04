
import React, { useEffect } from "react";
import "../Styles/Header.css";
// import "../Styles/All.css";

const Header = () => {
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
  
  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>G</span>abija <span>K</span>azdailyte</h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
            <li><a href="#hero" data-after="Pradzia">Pradzia</a></li>
              <li><a href="#services" data-after="Mano teveliai">Mano teveliai</a></li>
              <li><a href="#projects" data-after="PMano nuotraukytes">Mano nuotraukytes</a></li>
              <li><a href="#about" data-after="Apie mane">Apie mane</a></li>
              <li><a href="#contact" data-after="Kontaktine informacija">Kontaktine informacija</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;