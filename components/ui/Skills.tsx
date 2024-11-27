import React from "react";
import { Tooltip } from "antd";
import { skillsData } from "@/data/skillsData";
import { Button } from "./MovingBorders";

export function Skills() {
  return (
    <section className="skills-section py-40 bg-transparent">
      <div className="container mx-auto relative z-10">
        <h1 className="heading text-center py-4 gap-2">
          Tech <span className="text-purple">Stack</span>
        </h1>
        <div className="skills-grid flex justify-center items-center gap-6 flex-wrap px-4 lg:px-20">
          {skillsData.map(({ code, icon, name }, index) => (
            <Tooltip key={index} title={code} placement="top" overlayClassName="tooltip">
              <Button
                borderRadius="50%"
                aria-label={`${name} skill`}
                className="skill-button bg-white w-[100px] h-[100px] dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 flex justify-center items-center flex-col transform transition-transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <img className="skill-icon w-10 h-10" src={icon} alt={`${name} Icon`} />
                <p className="skill-name text-[12px] mt-1 font-google-sans">{name}</p>
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}
