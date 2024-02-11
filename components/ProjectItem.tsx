import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { ProjectItemProps } from "../types/types";



const ProjectItem: FC<ProjectItemProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="mx-auto mt-20 md:w-9/12 ">
      <Image className="rounded-xl opacity-90" src={image} alt="" />
      <div className="mx-auto my-10 sm:w-10/12">
        <h1 className="mb-4 text-2xl font-bold">{title}</h1>
        <div className="text-neutral-300">
          {description}
        </div>
        <div className="inline-block mt-6">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700"
          >
            Explore <BsArrowUpRight size={14} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
