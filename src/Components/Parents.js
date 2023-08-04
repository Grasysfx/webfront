import React from "react";
import ParentsItem from "./ParentsItem";
import"../Styles/Parents.css";
import "../Styles/Header.css";
import Mother from "../Images/Parents-img/Mother.jpg";
import Father from "../Images/Parents-img/Father.jpg";
import Gmother from "../Images/Parents-img/Gmother.jpg";
import Gfather from "../Images/Parents-img/Gfather.jpg";
// import "../Styles/All.css";

const Parents = () => {
  return (
    <section id="Parents">
      <div className="Parents container">
        <div className="Parents-top">
          <h1 className="section-title">Mano<span> t</span>eveliai</h1>
        </div>
        <div className="Parents-bottom">
          <ParentsItem imgSrc={Mother} title="Mamyte" description="Beatrice" />
          <ParentsItem imgSrc={Father} title="Tevelis" description="Grazvydas" />
          <ParentsItem imgSrc={Gmother} title="Kriksto mama" description="Jolanta" />
          <ParentsItem imgSrc={Gfather} title="Krikstatevis" description="Deivydas" />
        </div>
      </div>
    </section>
  );
};

export default Parents;