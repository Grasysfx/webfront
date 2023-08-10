import React from "react";
import IntroItem from "./IntroItems";
import "../../Styles/Intro.css";
import Panda from "../../Images/Pandukas.jpg"
import Training from "../../Images/Manksta.jpeg"; 
import Smile from "../../Images/Sypsena.jpeg"; 
import Sleep from "../../Images/Miegas.jpg"; 
import Cont from "../../Images/Continue.jpg"; 

const Intro = () => {
  return (
    <section id="Intro">
      <div className="Intro container">
        <div className="Intro-header">
          <h1 className="section-title">Mano <span>nuotraukytes</span></h1>
        </div>
        <div className="Intro-bottom">
          <IntroItem imgSrc={Panda} title="As ir mano pandukas" description="Niekad nenuleidziu nuo jo akiu" />
          <IntroItem imgSrc={Training} title="Rytine manksta" description="Mes norime buti stiprus!!!" />
          <IntroItem imgSrc={Smile} title="Negaliu nesisypsoti" description="Vitaminas C dar niekam nepakenke" />
          <IntroItem imgSrc={Sleep} title="ZzzzzZZZZzzz" description="Saldus miegas taip pat reikalingas" />
          <IntroItem imgSrc={Cont} title="Laukite tesinio" description="" />
        </div>
      </div>
    </section>
  );
};
 
export default Intro;