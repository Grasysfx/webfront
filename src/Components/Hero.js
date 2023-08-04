import React from "react";
import "../Styles/Hero.css";
// import "../Styles/All.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>Sveiki, <span></span></h1>
          <h1>Mano vardas yra <span></span></h1>
          <h1>Gabija <span></span></h1>
          <a href="#Intro" type="button" className="cta">Nuotraukos</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;