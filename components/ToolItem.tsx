import { FC } from "react";
import { ToolItemProps } from "../types/types";
import Link from "next/link";
import Image from "next/image";

const ToolItem: FC<ToolItemProps> = ({title, description , image , link}) => {
  return (
    <>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
      >
        <div className="w-full py-8 text-center bg-neutral-800 rounded-t-2xl">
          <Image
            className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
            src={image}
            alt=""
          />
        </div>
        <div className="p-8 py-10">
          <h1 className="mb-1 font-bold">{title}</h1>
          <p className="text-neutral-400">{description}</p>
        </div>
      </Link>
    </>
  );
};

export default ToolItem;
