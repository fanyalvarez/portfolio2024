import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className=" w-auto text-2xl fixed z-50 px-10 mt-3 ">
        <ul className="flex gap-5 bg-slate-400 h-full p-2 backdrop-blur-sm ">
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
