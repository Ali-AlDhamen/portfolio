"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between  flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
      <div className="inline-block text-xl font-bold sm:text-3xl">
        <Link href="/" className="inline-block">
          Dhamen
        </Link>
      </div>
      <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
        {showNav ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
      </div>
      <nav
        className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${
          showNav ? "top-16 visible  z-10" : "max-sm:invisible top-0"
        }`}
      >
        <ul className="flex items-center justify-between max-sm:text-sm max-sm:justify-around">
          <li
            className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 text-md delay-100 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-32"
            }`}
          >
            <a href="#services" className="px-2 ">
              Services
            </a>
          </li>
          <li
            className={`py-1 hover:bg-neutral-700  rounded mx-1 transition ease-in duration-300 delay-200 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-40"
            }`}
          >
            <a href="#projects" className="px-2">
              Projects
            </a>
          </li>
          <li
            className={`py-1 hover:bg-neutral-700  transition ease-in duration-300 rounded mx-1 delay-300 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:-translate-x-52"
            } rounded mx-1`}
          >
            <a href="#tools" className="px-2 whitespace-nowrap">
              Tools
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
