import React from "react";
import ParentsItem from "./ParentsItem";
import "../../Styles/Parents.css";
import "../../Styles/Header.css";
import Mother from "../../Images/Parents/Mother.jpg"
import Father from "../../Images/Parents/Father.jpg";
import Gmother from "../../Images/Parents/Gmother.jpg";
import Gfather from "../../Images/Parents/Gfather.jpg";

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
          <ParentsItem imgSrc={Gfather} title="Senelis" description="" />
          <ParentsItem imgSrc={Gfather} title="Senele" description="" />
          <ParentsItem imgSrc={Gfather} title="BSenelis" description="" />
          <ParentsItem imgSrc={Gfather} title="BSenele" description="" />
        </div>
      </div>
    </section>
  );
};

export default Parents;