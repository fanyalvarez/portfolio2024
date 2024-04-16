import React from "react";

export const FooterButon = ({ bgimg, link, children }) => {
  return (
    <a href={link}>
      <button className=" px-20 py-5 grid gap-3 rounded-xl hover:bg-transparent border-4 border-dotted border-violet-300 backdrop-blur-sm bg-violet-300/90 hover:text-[#b385fd]">
        {/* <img src={bgimg} alt="" className="w-11 mx-auto" /> */}
        {/* <div className="">{bgimg}</div> */}
        <div className="flex justify-center"> {children}</div>
        <p className="text-2xl  font-bold ">Contact me</p>
      </button>
    </a>
  );
};
