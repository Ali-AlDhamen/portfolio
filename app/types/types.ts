import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ProjectItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
}

export interface ServiceItemProps {
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}
