import { useState } from "react";
import { Accordion } from "./Elements/Accordion";
import { SkillSvg } from "./Elements/SkillSvg";
export const Skills = () => {
  const sklills = [
    { svgLink: "/svg/html.svg", name: "HTML" },
    { svgLink: "/svg/css.svg", name: "CSS" },
    { svgLink: "/svg/sass.svg", name: "SASS" },
    { svgLink: "/svg/js.svg", name: "JS" },
    { svgLink: "/svg/react.svg", name: "ReactJS" },
    { svgLink: "/svg/bootstrap.svg", name: "Bootstrap" },
    { svgLink: "/svg/tailwind.svg", name: "Tailwind" },
    { svgLink: "/svg/mui.svg", name: "MUI" },
    { svgLink: "/svg/node.svg", name: "NodeJS" },
    { svgLink: "/svg/mongodb.svg", name: "MongoDB" },
    { svgLink: "/svg/express.svg", name: "ExpresJS" },
    { svgLink: "/svg/git.svg", name: "GIT" },
    { svgLink: "/svg/github.svg", name: "Github" },
    { svgLink: "/svg/ubuntu-.svg", name: "ubuntu" },
    { svgLink: "/svg/figma.svg", name: "Figma" },
    { svgLink: "/svg/ai.svg", name: "AI" },
  ];
  return (
    <section className="my-20 ">
      <h3>SKILLS</h3>
<div className=" flex justify-center">
<div className=" h-auto flex flex-wrap justify-around relative w-3/6 gap-4">
        {sklills.map((skill) => (
          <SkillSvg
            link={skill.svgLink}
            name={skill.name}
            key={skill.name}></SkillSvg>
        ))}
      </div>
</div>
    </section>
  );
};
