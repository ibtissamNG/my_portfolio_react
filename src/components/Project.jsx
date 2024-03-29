import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project0 from "../assets/images/project0.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project5.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Bot from "./Bot";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  const projects = [
    {
      img: project0,
      name: "Extracting Linkedin profiles",
      tech: "Blue Prism - Spring Boot - Next JS - SQL Server",
      github_link: "https://github.com/ibtissamNG/cinemaAppFrontend",
    },
    {
      img: project1,
      name: "Book my Show",
      tech: "Spring Boot - Angular - MySQL",
      github_link: "https://github.com/ibtissamNG/cinemaAppFrontend",
    },
    {
      img: project2,
      name: "Books App",
      tech: "Java - Android - SQLite",
      github_link: "https://github.com/ibtissamNG/BooksApp_Android",
    },
    {
      img: project5,
      name: "Discover Morocco",
      tech: "Ionic - Angular - Firebase",
      github_link: "https://github.com/ibtissamNG/ionicTravelApp",
    },
    {
      img: project3,
      name: "Grades Management",
      tech: "JavaFX - SceneBuilder - MySQL",
      github_link:
        "https://github.com/ibtissamNG/Application-bureau-de-gestion-des-notes",
    },
    {
      img: project4,
      name: "Tainee Management",
      tech: "PHP - Bootstrap - MySQL",
      github_link: "https://github.com/ibtissamNG/Gestion-Stagiaire",
    },
  ];
  return (
    <section id="projects" className="py-10 px-4 text-white bg-[#132d3e]">
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center my-8">
          <h3 className="text-4xl font-semibold">
            My <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My humble works</p>
        </div>
      </Fade>
      <br />
      <div className="flex max-w-6xl gap-6 px-2 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              720: {
                slidesPerView: 2,
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
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-5 bg-gray-900/50 rounded-xl">
                  <img
                    src={project_info.img}
                    alt="project_img"
                    className="rounded-lg md:h-64 h-48 w-full relative mx-auto"
                  />
                  <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-2 md:items-center mt-4 ">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-500  ">
                        {project_info.name}
                      </h3>
                      <h6 className="text-sm  text-gray-300/70 font-light">
                        {project_info.tech}
                      </h6>
                    </div>

                    <button className="flex  text-white px-2 rounded-lg none self-end md:self-center">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="flex items-center shadow"
                      >
                        <span className="text-gradient md:text-md text-sm">
                          Github
                        </span>
                        <span className="md:text-xl  text-sm ml-1">
                          <ion-icon name="logo-github"></ion-icon>
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Bot section="contact" />
    </section>
  );
};

export default Project;
