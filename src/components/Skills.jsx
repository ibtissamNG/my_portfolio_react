import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { skillsData } from "../assets/data/skillsData";
import { skillsImage } from "../utils/skillsImage";
import Bot from "./Bot";
import { Fade } from "react-awesome-reveal";

function Skills() {
  return (
    <section id="skills" className="py-10 px-4 text-white">
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center my-8">
          <h3 className="text-4xl font-semibold">
            My <span className="text-gradient">Skills</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Knowledge</p>
        </div>
      </Fade>
      <div className="flex max-w-6xl px-2 mx-auto">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {skillsData.map((skill, id) => (
            <SwiperSlide key={id}>
              <div className="skill--box flex flex-col items-center justify-center p-4 bg-gray-900 rounded-lg">
                <img src={skillsImage(skill)} alt={skill} className="w-16 h-16 mb-2" />
                <h3 className="text-gray-300 text-center">{skill}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Bot section="projects" />
    </section>
  );
}

export default Skills;
