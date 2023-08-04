import React from "react";
import ParentsItem from "./ParentsItem";
import"../Styles/Parents.css";
// import "../Styles/All.css";

const Parents = () => {
  return (
    <section id="Parents">
      <div className="Parents container">
        <div className="Parents-top">
          <h1 className="section-title">Mano<span> t</span>eveliai</h1>
        </div>
        <div className="Parents-bottom">
          <ParentsItem imgSrc="../Images/Beatrice-img.jpg" title="Mamyte" description="Beatrice" />
          <ParentsItem imgSrc="./Images/Grazvydas-img.jpg" title="Tevelis" description="Grazvydas" />
          <ParentsItem imgSrc="./Images/Jolanta-img.jpg" title="Krikstamote" description="Jolanta" />
          <ParentsItem imgSrc="./Images/Deivydas-img.jpg" title="Krikstatevis" description="Deivydas" />
        </div>
      </div>
    </section>
  );
};

export default Parents;