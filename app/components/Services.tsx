import React from "react";
import {
  MdDesignServices,
  MdDeveloperMode,
  MdOutlineWeb,
} from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiCardDraw } from "react-icons/gi";

import serviceItems from "../data/serviceItems";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl">
        Services
      </h1>
      <div className="flex justify-between max-md:flex-wrap gap-7">
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={`${item.title}-${index}`}
            title={item.title}
            description={item.description}
            Icon={item.Icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
