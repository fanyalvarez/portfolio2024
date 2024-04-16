import React from "react";
import { Navbar } from "./Elements/Navbar.jsx";

export const Principal = () => {
  return (
    <section className="bg-[url('/home.avif')] h-screen object-cover flex section-home" >
      <div className="flex flex-wrap h-screen justify-evenly">
      
        <div className="mt-20">
          <h1 className="font-bold leading-none text-right text-[7rem] box-tran-title text-[#2a1d3f]">
            Estefania <br /> Alvarez
          </h1>
          <br />
          <h2 className="text-right font-semibold text-[2rem] italic box-tran-sub  text-[#2a1d3f]">
            FRONTEND DEVELOPER
          </h2>
        </div>
        {/* <div className="w-[28rem] h-56 bg-red-200"> cube</div> */}
      </div>
    </section>
  );
};
