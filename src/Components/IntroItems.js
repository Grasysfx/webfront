import React from "react";

const IntroItem = ({ imgSrc, title, description }) => {
  return (
    <div className="Intro-item">
      <div className="Intro-info">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className="Intro-img">
        <img src={imgSrc} alt="img" />
      </div>
    </div>
  );
};

export default IntroItem;