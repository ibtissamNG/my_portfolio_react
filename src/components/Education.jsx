import React from "react";
import education from "../assets/lottie/education.json";

import { educationData } from "../assets/data/educationData";
import AnimationLottie from "../utils/animation-lottie";
import EducationCard from "../utils/education-card";
import "../index.css";
import Bot from "./Bot";
import { Fade } from "react-awesome-reveal";

function Education() {
  return (
    <section className="py-10 px-4 text-white bg-[#132d3e]" id="education">
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center my-8 ">
          <h3 className="text-4xl font-semibold">
            My <span className="text-gradient">Education</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">
            My educational background
          </p>
        </div>
      </Fade>
      <div className="education-body mx-auto">
        <div className="education-image">
          <AnimationLottie animationPath={education} />
        </div>
        <div className="education-description">
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
      </div>
      <Bot section="skills" />
    </section>
  );
}

export default Education;
