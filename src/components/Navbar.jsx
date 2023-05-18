import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "home", icon: "home" },
    { name: "ABOUT", link: "about", icon: "person-circle-outline" },
    { name: "EDUCATION", link: "education", icon: "school-outline" },
    { name: "SKILLS", link: "skills", icon: "settings-outline" },
    { name: "PROJECTS", link: "projects", icon: "code-slash-outline" },
    { name: "CONTACT", link: "contact", icon: "chatbubbles-outline" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[800] ${
        sticky ? "bg-cyan-700/50" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            I<span className="text-cyan-600">N</span>
          </h4>
        </div>
        {/* NAV LIST */}
        <div
          className={` ${
            sticky ? " text-gray-100" : "bg-cyan-600/30 text-gray-200"
          } md:block hidden md:px-7 px-3  py-2 rounded-bl-full`}
        >
          <ul className="flex items-center lg:gap-3 py-2 lg:text-lg text-sm">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-500">
                <Link
                  to={menu?.link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-45}
                >
                  {menu?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SIDE MENU */}
        <div
          onClick={() => setOpen(!open)}
          className={` z-[900]  ${
            open ? "text-gray-400" : "text-white"
          } text-3xl md:hidden p-6`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-100 absolute w-2/3  h-screen
        bg-cyan-900/80 rounded-bl top-0 ${open ? "right-0" : "right-[-100%]"}`}
        >
          <ul className="flex flex-col justify-center h-full text-lg [&>*:nth-child(even)]:bg-gray-900/30 odd:bg-gray-900/30">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="py-4 px-8 flex items-center"
              >
                <span className="text-2xl py-4 px-1 items-center active:text-black">
                  <ion-icon name={menu?.icon}></ion-icon>
                </span>

                <Link
                  to={menu?.link}
                  smooth={true}
                  duration={600}
                  spy={true}
                  exact="true"
                  offset={-86}
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-6"
                >
                  {menu?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
