import React from "react";
import ParentsItem from "./ParentsItem";
import "../../Styles/Parents.css";
import { useLanguage } from '../../locales/LanguageContext';
import enTranslations from '../../locales/EN/en.json';
import ltTranslations from '../../locales/LT/lt.json';

import MotherImage from "../../Images/Parents/Mother.jpg";
import FatherImage from "../../Images/Parents/Father.jpg";
import GmotherImage from "../../Images/Parents/Gmother.jpg";
import GfatherImage from "../../Images/Parents/Gfather.jpg";
import GrandfatherImage from "../../Images/Parents/Gfather.jpg";
import GrandmotherImage from "../../Images/Parents/Gfather.jpg";
import BGrandfatherImage from "../../Images/Parents/Gfather.jpg";
import BGrandmotherImage from "../../Images/Parents/Gfather.jpg";

const Parents = () => {
  const { language } = useLanguage();
  const parentsData = language === 'en' ? enTranslations.parents : ltTranslations.parents;

  return (
    <section id="Parents">
      <div className="Parents container">
        <div className="Parents-top">
          <h1 className="section-title">{parentsData.sectionTitle}</h1>
        </div>
        <div className="Parents-bottom">
          {parentsData.data.map((parent, index) => (
            <ParentsItem
              key={index}
              imgSrc={getCorrectImage(parent.imgSrc)}
              title={parent.titles[language]}
              description={parent.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function getCorrectImage(imageName) {
  switch (imageName) {
    case 'Mother.jpg':
      return MotherImage;
    case 'Father.jpg':
      return FatherImage;
    case 'Gmother.jpg':
      return GmotherImage;
    case 'Gfather.jpg':
      return GfatherImage;
    case 'Gfather.jpg':
      return GrandfatherImage;
    case 'Gfather.jpg':
      return GrandmotherImage;
    case 'Gfather.jpg':
      return BGrandfatherImage;
    case 'Gfather.jpg':
      return BGrandmotherImage;
    default:
      return null;
  }
}

export default Parents;