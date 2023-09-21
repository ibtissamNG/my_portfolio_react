import Marquee from "react-fast-marquee";
import "../index.css";
import { skillsData } from "../assets/data/skillsData";
import { skillsImage } from "../utils/skillsImage";
import Bot from "./Bot";
import { Fade } from "react-awesome-reveal";

function Skills() {
  return (
    <section id="skills" className="py-10 px-4 text-white">
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center my-8 ">
          <h3 className="text-4xl font-semibold">
            My <span className="text-gradient">Skills</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        </div>
      </Fade>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id}>
                <img src={skillsImage(skill)} alt={skill} />
                {<h3 className="text-gray-300">{skill}</h3>}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <Bot section="projects" />
    </section>
  );
}

export default Skills;
