import { MdDeveloperMode, MdOutlineWeb } from "react-icons/md";
import { ServiceItemProps } from "../types/types";
import { GiCardDraw } from "react-icons/gi";

const serviceItems: ServiceItemProps[] = [
  {
    title: "Web Development",
    description:
      "Skilled in developing web applications using React, Next.js, and Tailwind CSS",
    Icon: MdOutlineWeb,
    color: "pink-600",
  },
  {
    title: "Mobile Development",
    description:
      "Experienced in developing mobile applications using Flutter and Dart",
    Icon: MdDeveloperMode,
    color: "blue-600",
  },
  {
    title: "Uno Game",
    description:
      "Professional Uno player with extensive experience and in-depth knowledge of game strategies and rules",
    Icon: GiCardDraw,
    color: "yellow-600",
  },
];

export default serviceItems;