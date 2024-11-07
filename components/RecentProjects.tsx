"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
        {projects.map((item) => (
          <div
            className="flex flex-col items-center justify-center w-full max-w-[350px] h-[32.5rem] mx-auto" // Standardized width and height
            key={item.id}
          >
            <PinContainer title={item.link} href="/">
              <div className="relative flex items-center justify-center overflow-hidden w-full h-[18rem] lg:h-[20rem] mb-6">
                <div className="relative w-full h-full rounded-3xl" style={{ backgroundColor: "#13162D" }}>
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center mt-2"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5 w-full">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link href={item.link}>
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
