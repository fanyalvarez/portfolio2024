import { useState } from "react";

export const Accordion = ({ datas }) => {
  const [data, setData] = useState(datas);

  const handleToggleActive = () => {
    let activeNew = data.active === 1 ? 0 : 1;
    setData({ ...data, active: activeNew });
  };
  return (
    <div
      className={`w-[95%] p-5 bg-[#ddcafc] border border-[#c9c6c655] rounded-md mb-5 duration-500 group ${
        data.active === 1 ? "is-active bg-[#d8b3fd]" : ""
      }`}>
      <div className="flex items-center" onClick={handleToggleActive}>
      <div
          className="text-2xl w-10 cursor-pointer duration-500 group-[.is-active]:rotate-[90deg] text-center font-medium"
          >
          &gt;
        </div>
        <div className="w-full text-2xl p-2 md:text-4xl">
          {data.title}
        </div>
       
      </div>
      <div className="overflow-hidden duration-300  max-h-0 group-[.is-active]:max-h-[100px] text-2xl">
       <hr /> 
       <div className="mt-4 px-2" > {data.skills}</div>
      </div>
    </div>
  );
};
{
  /* <img src="./svg/html.svg" alt="" id="iconSkill" />
        <img src="./svg/js.svg" alt="" id="iconSkill" />
        <img src="./svg/react.svg" alt="" id="iconSkill" />
        <img src="./svg/css.svg" alt="" id="iconSkill" /> */
}
