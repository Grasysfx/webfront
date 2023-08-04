import React from "react";
import IntroItem from "./IntroItems";
import "../Styles/Intro.css";
// import "../Styles/All.css";

const Intro = () => {
  return (
    <section id="Intro">
      <div className="Intro container">
        <div className="Intro-header">
          <h1 className="section-title">Mano <span>nuotraukytes</span></h1>
        </div>
        <div className="Intro-bottom">
          <IntroItem imgSrc="./src/Images/1.jpg" title="As ir mano pandukas" description="Niekad nenuleidziu nuo jo akiu" />
          <IntroItem imgSrc="https://i.ibb.co/SXf7nrN/continue.jpg" title="Rytine manksta" description="Mes norime buti stiprus!!!" />
          <IntroItem imgSrc="https://i.ibb.co/SXf7nrN/continue.jpg" title="Negaliu nesisypsoti" description="Vitaminas C dar niekam nepakenke" />
          <IntroItem imgSrc="https://i.ibb.co/SXf7nrN/continue.jpg" title="ZzzzzZZZZzzz" description="Saldus miegas taip pat reikalingas" />
          <IntroItem imgSrc="https://i.ibb.co/SXf7nrN/continue.jpg" title="Laukite tesinio" description="" />
        </div>
      </div>
    </section>
  );
};

export default Intro;