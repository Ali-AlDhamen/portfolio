import { StaticImageData } from "next/image";

export interface ProjectItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
}


