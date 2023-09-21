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
              I am Ibtissam Neggaoui, a final-year student pursuing a degree in
              Computer Science Engineering at the National School of Applied
              Sciences Oujda. My academic journey has been an exciting
              exploration of the world of computer science, and I'm eager to
              apply my knowledge and skills to a significant final-year project. <br/>
              Throughout my academic career, I've developed a strong passion for
              problem-solving. I have
              consistently demonstrated a strong work ethic, critical thinking
              skills, and dedication to learning. During my educational journey,
              I actively participated in a variety of extracurricular
              activities, including a hackathon, which provided me with valuable
              practical experience. These experiences have played a crucial role
              in shaping my skills and abilities, particularly in my roles as a
              club president and media coordinator. Through these positions, I
              had the opportunity to further refine my{" "}
              <span className="font-semibold text-gradient">leadership, </span>
              <span className="font-semibold text-gradient">
                teamwork,{" "}
              </span>
              and{" "}
              <span className="font-semibold text-gradient">
                communication skills,{" "}
              </span>
              which I consider invaluable assets for my future career.<br/>
               As I
              approach the final stage of my academic career, I am eager to
              channel my accumulated knowledge and enthusiasm into a compelling
              PFE project. I am confident that my education, experiences, and
              passion will empower me to make meaningful contributions to the
              field of computer engineering and embark on a promising career.
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
