import { FC } from "react";
import { ServiceItemProps } from "../types/types";


const ServiceItem: FC<ServiceItemProps> = ({title, description , Icon, color}) => {
    const bgColor = `bg-${color}`;
    return (  
        <div className="p-5 mt-5 overflow-hidden md:w-1/3 d relativ">
        <h1 className="mt-5 text-center">{title}</h1>
        <div className="flex justify-center mt-4">
          <Icon className={`text-${color}`} size={28} />
        </div>
        <p className="mt-10 text-center text-neutral-300">
          {description}
        </p>
        <p className="mt-10 text-center mb-7">
          <a
            href="#projects"
            className={`px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 ` + `hover:text-${color}`}
          >
            know more
          </a>
        </p>
        <span className="w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 "></span>
        <span className={`w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%]  absolute top-[27%] ${bgColor}`}></span>
        <span className="w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 "></span>
        <span className="w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 "></span>
      </div>
    );
}
 
export default ServiceItem;