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
          <ParentsItem pictureSrc="../Images/Beatrice-img.jpg" title="Mamyte" description="Beatrice" />
          <ParentsItem pictureSrc="./Images/Grazvydas-img.jpg" title="Tevelis" description="Grazvydas" />
          <ParentsItem pictureSrc="./Images/Jolanta-img.jpg" title="Krikstamote" description="Jolanta" />
          <ParentsItem pictureSrc="./Images/Deivydas-img.jpg" title="Krikstatevis" description="Deivydas" />
        </div>
      </div>
    </section>
  );
};

export default Parents;