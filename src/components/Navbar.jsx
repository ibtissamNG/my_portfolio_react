import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home", icon: "home" },
    { name: "ABOUT", link: "#about", icon: "person-circle-outline" },
    { name: "EDUCATION", link: "#education", icon: "school-outline" },
    { name: "SKILLS", link: "#skills", icon: "settings-outline" },
    { name: "PROJECTS", link: "#projects", icon: "code-slash-outline" },
    { name: "CONTACT", link: "#contact", icon: "chatbubbles-outline" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  }, []);


  

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[500] ${
        sticky ? "bg-cyan-700/50" : "bg-cyan-700/40"
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
            sticky
              ? "md:bg-white/0 text-gray-200"
              : "bg-cyan-800/70  text-gray-100"
          } md:block hidden md:px-7 px-3 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center lg:gap-3 py-2 lg:text-lg text-sm">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SIDE MENU */}
        <div
          onClick={() => setOpen(!open)}
          className={` z-[900]  ${
            open ? "text-gray-400" : "text-white"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-100 absolute w-1/2 h-fit
       py-1 font-medium bg-cyan-900/80 rounded-bl top-0 duration-400 ${
         open ? "right-0" : "right-[-100%]"
       }`}
        >
          <ul className="flex flex-col justify-center h-full text-lg [&>*:nth-child(even)]:bg-gray-900/30">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="py-4 px-8 flex align-center"
              >
                <span className="mr-5 text-2xl">
                  <ion-icon name={menu?.icon}></ion-icon>
                </span>
                <a href={menu?.link} className="hover:text-gradient">
                  {menu?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
