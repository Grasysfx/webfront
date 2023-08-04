import React from "react";

const ParentsItem = ({ pictureSrc, title, description }) => {
  return (
    <div className="Parents-item">
      <div className="picture">
        <img src={pictureSrc} alt="picture" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ParentsItem;