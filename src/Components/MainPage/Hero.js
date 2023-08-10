import React from "react";
import { Link } from 'react-router-dom';
import "../../Styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>Sveiki, <span></span></h1>
          <h1>Mano vardas yra <span></span></h1>
          <h1>Gabija <span></span></h1>
          <Link to="/LogIn" className="cta">Prisijungti</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;