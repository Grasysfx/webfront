import React from "react";

const ParentsItem = ({ imgSrc, title, description }) => {
  return (
    <div className="Parents-item">
      <div className="picture">
        <img src={imgSrc} alt="img" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ParentsItem;