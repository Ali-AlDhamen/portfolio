import React from "react";
import toolItems from "../data/tooltems";
import ToolItem from "./ToolItem";

const Tools = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Tools</h1>
      <p className="pt-6 text-neutral-300">
        The products, apps and services I use on a daily basis for work and
        life.
      </p>
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 sm:grid-cols-2 sm:gap-10">
        {toolItems.map((item, index) => (
          <ToolItem
            key={`${item.title}-${index}`}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
