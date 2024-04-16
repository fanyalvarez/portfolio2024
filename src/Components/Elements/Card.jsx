import React from "react";

export const Card = ({ children, title, url, info, img }) => {
  return (
    <>
      {/* <div className="w-[600px] h-[420px`] bg-red-700 rounded-2xl overflow-hidden border-[#80d8d4] border-4 relative m-5" id="card-hover">*/}

      <div className="flip-card">
        <div className="front">
          <img src={img} alt="" className="bg-auto" />
        </div>
        <div className="back bg-[#273339] text-[#d8e1ff] flex flex-col">
          <h2 className=" text-center font-semibold mb-3 sm:text-2xl text-md">
            {title}
          </h2>
          <p className="sm:text-lg text-md">{info}</p>
          <h4 className="italic mt-2 sm:text-lg text-md">Created with:</h4>
          <div className="flex flex-wrap gap-3 justify-items-center mt-3">
            {children}
          </div>
          <button className="bg-[#80a2d8] text-black rounded-xl absolute bottom-5 right-5 py-1.5 px-3 sm:text-lg text-sm">
            <a href={url}>Visit site</a>
          </button>
        </div>
      </div>
    </>
  );
};
