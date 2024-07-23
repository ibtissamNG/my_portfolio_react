import React from "react";
import aboutImg from "../assets/images/about1.png";
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
              I am Ibtissam Neg, a Full Stack Engineer with a degree in Computer
              Science Engineering from the National School of Applied Sciences
              Oujda. My journey in computer science has been an exciting
              exploration, and I am now eager to apply my knowledge and skills
              to new and significant opportunities.
              <br />
              Throughout my career, I have developed a strong passion for
              problem-solving and have consistently demonstrated a robust work
              ethic, critical thinking skills, and dedication to learning. My
              practical experiences, including participation in a hackathon,
              have been instrumental in honing my technical skills.
              Additionally, my roles as President of the Solidarity Club at ENSA
              and Media Coordinator at the IT Club have significantly enhanced
              my{" "}
              <span className="font-semibold text-gradient">leadership, </span>
              <span className="font-semibold text-gradient">teamwork, </span>
              and{" "}
              <span className="font-semibold text-gradient">
                communication skills,{" "}
              </span>
              which I consider invaluable assets for my career.
              <br />
              As I seek new opportunities, I am excited to bring my expertise
              and enthusiasm to impactful projects. I am confident that my
              background, experience, and passion will enable me to make
              meaningful contributions and thrive in a dynamic work environment.
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
              style={{ objectFit: "cover", width: "100%", height: "100%", marginLeft:"35px"}}
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
