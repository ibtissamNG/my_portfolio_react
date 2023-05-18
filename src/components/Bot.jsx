import React from "react";
import { Link } from "react-scroll";

const Bot = (props) => {
  const getNextSectionId = () => {
    const sectionIds = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "contact",
    ];
    const nextSectionIndex = sectionIds.indexOf(props.section);
    return sectionIds[nextSectionIndex];
  };

  return (
    <div className="relative sm:right-1 right-5 z-[700] mt-8 text-white text-5xl flex w-full justify-end">
      <Link to={getNextSectionId()} smooth={true} duration={200} offset={-60}>
        <div className={`animate-bounce`}>
          <ion-icon name="arrow-down"></ion-icon>
        </div>
      </Link>
    </div>
  );
};

export default Bot;
