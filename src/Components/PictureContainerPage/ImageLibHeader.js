
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Styles/ImgLibHeader.css";

const ImageLibHeader = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.HeaderLogin .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.HeaderLogin .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.HeaderLogin .nav-bar .nav-list ul li a');
    const HeaderLogin = document.querySelector('.HeaderLogin.container');

    if (hamburger && mobile_menu && menu_item && HeaderLogin) {
      const handleHamburgerClick = () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      };
  
      const handleScroll = () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
          HeaderLogin.style.backgroundColor = '#29323c';
        } else {
          HeaderLogin.style.backgroundColor = 'transparent';
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
    <section id="HeaderLogin">
      <div className="HeaderLogin container">
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
              <li><Link to="/" data-after="Pradzia">Gryzti i pradzia</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLibHeader;