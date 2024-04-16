import React from "react";

export const StackLeft = ({title, description, year}) => {
  return (
    <>
      <div className="max-w-[50rem] grid grid-cols-9 ">
        <div className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-transparent  rounded-md p-2 md:pl-4 backdrop-blur-xl border-violet-300 border-4 border-dotted">
            <h1 className="text-violet-400 text-2xl font-medium py-2">{title}</h1>

            <p className="text-violet-400 md:text-lg xs:text-md text-sm h-auto">
             {description}
            </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-violet-300"></div>
          <div className="absolute w-20 h-20 rounded-full bg-violet-400">
          <p className="absolute bottom-[15px] left-4 font-bold  text-violet-950 text-xl "> {year}</p>
          </div>
        </div>

        <div className="col-span-4 w-full h-full "></div>
      </div>
    </>
  );
};
