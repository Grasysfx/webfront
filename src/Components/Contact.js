import React from "react";
import ContactItem from "./ContactItem";
import "../Styles/Contact.css";
// import "../Styles/All.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">Kontaktine <span>informacija</span></h1>
        </div>
        <div className="contact-items">
          <ContactItem pictureSrc="https://img.icons8.com/bubbles/100/000000/phone.png" title="Phone" contactInfo="Dar telefono neisigijau" />
          <ContactItem pictureSrc="https://img.icons8.com/bubbles/100/000000/new-post.png" title="Email" contactInfo="GabijaKazdailyte@gmail.com" />
          <ContactItem pictureSrc="https://img.icons8.com/bubbles/100/000000/map-marker.png" title="Adresas" contactInfo="Telsiai, Lietuva" />
        </div>
      </div>
    </section>
  );
};

export default Contact;