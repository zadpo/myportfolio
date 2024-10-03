import React from "react";
import { Tooltip } from "antd";
import { skillsData } from "@/data/skillsData";
import { Button } from "./MovingBorders";

export function Skills() {
  return (
    <div className=" bg-transparent py-40">
      <div className="container mx-auto relative z-10">
        <h1 className="heading py-4 gap-2">
          Tech
          <span className="text-purple">Stack</span>
        </h1>
        <div className="flex justify-center items-center gap-6 flex-wrap px-2 lg:px-20">
          {skillsData.map((skill, index) => (
            <Tooltip key={index} title={skill.code} placement="top">
              <Button
                borderRadius="100%"
                className="bg-white w-[100px] h-[100px] dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 justify-center items-center flex flex-col  transform transition-transform hover:scale-105"
              >
                <img className="w-10 h-10" src={skill.icon} alt={`${skill.name} Icon`} />
                <p className="text-[12px]  mt-1 font-google-sans">{skill.name}</p>
              </Button>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
