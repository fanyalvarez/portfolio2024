import React from "react";

export const SkillSvg = ({link, name}) => {
  return (
    <>
<div className="m-4">
<div class="icon-skill relative p-2 text-center w-28 h-28 grid">
        <img src={link} alt="" className="w-full h-full rounded-full"/>
        <p className="text-xl font-medium">{name}</p>
      </div>
</div>
    </>
  );
};
