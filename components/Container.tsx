"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { emoji } from "../public/assets/images";

const Container = () => {
  return (
    <div className="relative w-10/12 pt-4 mx-auto lg:pt-16">
      <div className="flex-row-reverse items-center justify-between md:flex">
        <div className="flex items-end justify-end max-md:pt-4 ">
          <div className="relative">
            <Image
              className=" w-100% h-auto transform scale-x-100 "
              src={emoji}
              alt=""
            />
          </div>
        </div>
        <div className="p-4 pl-0 mt-5 sm:mt-20">
          <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
            Hello
          </p>
          <h1 className="pt-2 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl lg:pt-6">
            I&apos;m Ali
            <div className="py-4 text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
              <Typewriter
                options={{
                  loop: true,
                  delay: 50,
                  deleteSpeed: 20,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Web Developer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("App Developer")
                    .pauseFor(1500)
                    .start();
                }}
              />{" "}
            </div>
          </h1>
          <p className="text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6">
            bringing imagination to live
          </p>
          <div className="flex items-center mt-6 md:mt-14">
            <ul className="flex items-center my-4 mr-6 space-x-2 sm:space-x-5 ">
              <li>
                <Link
                  href="https://twitter.com/_AliDhamen"
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-150 ease-in opacity-75 hover:opacity-100"
                >
                  <AiOutlineTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/ali-al-dhamen-323a04144"
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-150 ease-in opacity-75 hover:opacity-100"
                >
                  <AiOutlineLinkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Ali-AlDhamen"
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-150 ease-in opacity-75 hover:opacity-100"
                >
                  <AiOutlineGithub size={24} />
                </Link>
              </li>
            </ul>
            <Link
              href="mailto:ali77dhamen@hotmail.com"
              className="px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]"
            >
              Email me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
