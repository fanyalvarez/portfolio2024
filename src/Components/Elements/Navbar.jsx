import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className=" w-auto text-2xl fixed z-50 px-10 mt-3 ">
        <ul className="flex gap-5 bg-slate-400 h-full p-2 backdrop-blur-sm ">
          <li> <a href="#about"><li>About</li></a></li>
          <li> <a href="#projects"><li>Projects</li></a></li>
          <li> <a href="#skills">Skills</a></li>
          <li> <a href="#experience"><li>Experience</li></a></li>
          <li> <a href="#contact"><li>Contact</li></a></li>
        </ul>
      </div>
    </nav>
  );
};
