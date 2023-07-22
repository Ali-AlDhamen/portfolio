"use client";

import { useEffect } from "react";
import bayanplus from "bayanplus-js";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import { env } from "process";

export default function Home() {

  useEffect(() => {
    bayanplus.init({
      projectId: env.BAYAN_PROJECT_ID ?? "",
    });
  }, []);
  return (
    <div className="max-w-[1280px]">
      <div className="w-10/12 pt-4 mx-auto">
        <Navbar />
      </div>
      <Container />
      <div
        id="services"
        className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"
      ></div>
      <Services />
      <div
        id="projects"
        className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8"
      ></div>
      <Projects />
      <div
        id="tools"
        className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8"
      ></div>
      <Tools />
    </div>
  );
}
