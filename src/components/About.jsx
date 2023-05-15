import React from "react";
import aboutImg from "../assets/images/about.png";
import Bot from "./Bot";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="py-10 px-3 text-white">
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center my-8">
          <h3 className="text-4xl font-semibold ">
            <span className="text-gradient">About</span>
            <span> Me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">Who am I?</p>
        </div>
      </Fade>

      <div className="flex md:flex-row flex-col-reverse items-center lg:gap-24 md:gap-0 gap-14 max-w-6xl mx-auto">
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
            <a href="./src/assets/cv.pdf" download>
              <button className="btn-primary btn flex mx-auto active:opacity-[0.85] active:shadow-nonedisabled:pointer-events-none disabled:opacity-50disabled:shadow-none">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div
            className="lg:w-96
     h-70 relative sm:w-10/12 w-11/12 max-w-sm aboutImg "
          >
            <img
              src={aboutImg}
              alt=""
              className="w-full object-cover bg-secondary rounded-xl"
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
