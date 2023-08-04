import React from "react";
import "../Styles/Footer.css";
import "../Styles/Footer.css"
// import "../Styles/All.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1><span>G</span>abijos <span>K</span>azdailytes</h1>
        </div>
        <h2>Asmeninis puslapis</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="Facebook" /></a>
          </div>
          <div className="social-item">
            <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram" /></a>
          </div>
        </div>
        <p>Copyright © 2023 Grazvydas Kazdailis. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;