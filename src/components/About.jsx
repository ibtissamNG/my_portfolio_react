import React from "react";
import aboutImg from "../assets/images/about.png";
import cv from "../assets/pdf/cv_neggaoui_ibtissam.pdf";
import Bot from "./Bot";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="py-10 px-5 text-white">
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center my-8">
          <h3 className="text-4xl font-semibold ">
            <span className="text-gradient">About</span>
            <span> Me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">Who am I?</p>
        </div>
      </Fade>

      <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-20 gap-10 max-w-6xl mx-auto">
        <div className="px-6">
          <div className="text-gray-300">
            <p className="text-justify leading-7 w-full mb-8">
              I am Ibtissam Neggaoui, a fourth-year student in computer science
              engineering at the National School of Applied Sciences Oujda. I
              have a deep passion for problem-solving and enjoy the constant
              challenge of staying up to date with the latest advancements in
              the field. Throughout my academic career, I have consistently
              demonstrated a strong work ethic, critical thinking skills, and
              dedication to learning. I have participated in various
              extracurricular activities, including{" "}
              <span className="font-semibold text-gradient">hackathons</span>,
              which have further honed my skills and provided me with practical
              experience. They have also helped me to develop my{" "}
              <span className="font-semibold text-gradient">teamwork</span>,{" "}
              <span className="font-semibold text-gradient">
                problem-solving
              </span>
              , and{" "}
              <span className="font-semibold text-gradient">communication</span>{" "}
              skills, which I believe will be valuable assets in my future
              career. I am excited to leverage my knowledge, skills, and passion
              to make meaningful contributions to the industry as I embark on my
              career in computer engineering.
            </p>
          </div>
          <a href={cv} download="cv_neggaoui_ibtissam.pdf">
            <button className="btn-primary w-fit btn flex mx-auto focus:opacity-[0.85]">
              Download CV
            </button>
          </a>
        </div>
        <div className="flex-1 m-0 flex justify-center items-center">
          <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-72 h-72 relative overflow-hidden md:h-96 md:w-96">
            <img
              src={aboutImg}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div></div>
      <br></br>
      <Bot section="education" />
    </section>
  );
};

export default About;
