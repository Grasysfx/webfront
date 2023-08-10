import React from "react";

const ContactItem = ({ pictureSrc, title, contactInfo }) => {
  return (
    <div className="contact-item">
      <div className="picture">
        <img src={pictureSrc} alt="picture" />
      </div>
      <div className="contact-info">
        <h1>{title}</h1>
        <h2>{contactInfo}</h2>
      </div>
    </div>
  );
};

export default ContactItem;