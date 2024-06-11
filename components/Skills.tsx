"use client";

import React, { useEffect, useState } from "react";
import { InfiniteCardSkills } from "./ui/InfiniteCardSkills";

export function SkillsCard() {
  return (
    <div 
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteCardSkills
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "CSS",
    imgUrl: "/Skills/css.svg",
  },
  {
    name: "Elixir",
    imgUrl: "/Skills/elixir.svg",
  },
  {
    name: "Figma",
    imgUrl: "/Skills/figma.svg",
  },
  {
    name: "Github",
    imgUrl: "/Skills/github.svg",
  },
  {
    name: "NextJS",
    imgUrl: "/Skills/nextjs.svg",
  },
  
];
