import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import projectItems from "../data/projectItems";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Projects</h1>
      <p className="pt-6 text-neutral-300">
        Over the years, I have gained experience in designing and developing a
        variety of websites and applications, ranging from simple one-page
        landing pages to complex multi-page applications.Here are some projects
        that I would like to present to all of you, showcasing my work and
        achievements in the field of web development and app development.
      </p>
      {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
      {projectItems.map((item, index) => (
        <ProjectItem
          key={`${item.title}-{index}`}
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Projects;
