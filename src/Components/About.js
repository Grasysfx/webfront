import React from "react";
import "../Styles/About.css";
// import "../Styles/All.css";

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src="./img/2.jpeg" alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">Apie <span>mane</span></h1>
          <h2>Esu pats graziausias beibis pasaulyje</h2>
          <a href="#" className="cta">Parsisiusti nuotraukas</a>
        </div>
      </div>
    </section>
  );
};

export default About;