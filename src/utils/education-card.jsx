
import React from "react";
import {Slide} from "react-awesome-reveal"; 
import eduImgWhite from "../assets/images/svg/eduImgWhite.svg";
import "../index.css";

function EducationCard({ id, institution, course, startYear, endYear }) {

  return (
    <Slide duration={2000}  triggerOnce={true}>
    <div key={id} className={`education-card bg-[#0617225e] `}>
        <div className="educard-img bg-[#0891b21a] border border-[#ffffff5e]">
          <img src={eduImgWhite} alt="educationImg" />
        </div>
        <div className="education-details">
          <h6 className="text-yellow-600">
            {startYear}-{endYear}
          </h6>
          <h4 className="text-cyan-600">{course}</h4>
          <h5 className="text-gray-200">{institution}</h5>
        </div>
      </div>
  </Slide> 
  );
}

export default EducationCard;
