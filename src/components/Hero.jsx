import React, { useEffect, useRef } from "react";
import Video from "../assets/videos/hero.mp4";
import { TypeAnimation } from "react-type-animation";
import Bot from "./Bot";

const Hero = () => {
  const social_media = [
    {
      logo: "logo-linkedin",
      url: "https://www.linkedin.com/in/ibtissam-neggaoui-011727223/",
    },
    ,
    { logo: "logo-github", url: "https://github.com/ibtissamNG" },
    { logo: "at", url: "mailto:ibtissamneggaoui11@gmail.com" },
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.75;
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex py-4 px-3 md:flex-row flex-row items-center"
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={Video}
          className="h-full w-full object-cover z-1"
          autoPlay
          loop
          muted
          type="video/mp4"
        ></video>
        
        <div
          className="absolute top-0 right-0 bottom-0 left-0 z-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        ></div>
      </div>
      <div className="flex-1 z-50">
        <div className="md:text-center text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-gradient md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Ibtissam NEGGAOUI</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gradient">
            {`I'm a `}
            <TypeAnimation
              sequence={[
                "Computer Science Engineer",
                7000,
              ]}
              speed={40}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            ></TypeAnimation>
          </h4>

          <div className="mt-9 text-3xl flex items-center justify-center gap-5">
            {social_media?.map((item, i) => (
              <div
                key={i}
                className={`text-gray-400 px-2 pt-1 hover:text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 transition duration-500 ease-in-out
               `}
              >
                <a href={item?.url}>
                  <ion-icon name={item?.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-4 bottom-0">
          <Bot section="about" />
          <br />
        </div>
      </div>
    </section>
  );
};

export default Hero;
