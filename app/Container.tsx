import React from 'react'
import {AiOutlineTwitter, AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {FiDribbble} from "react-icons/fi"



type Props = {}

const Container = (props: Props) => {
  return (
    <div className="relative w-10/12 pt-4 mx-auto lg:pt-16">
        <div className='flex-row-reverse items-center justify-between md:flex'>
            <div className='flex items-end justify-end max-md:pt-4'>
                <div className='relative'>
                <img className=' w-100% h-auto transform -scale-x-100' width={600} src="man.png" alt="" />
                <div className='w-[60%] overflow-hidden h-[70%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400  absolute'></div>
                </div>
            </div>
            <div className='p-4 pl-0 mt-5 sm:mt-20'>
                <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>Hello</p>
                <h1 className='pt-2 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl lg:pt-6'>I&apos;m Ali<p className='py-4 text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>A Software Engineer </p></h1>
                <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>bringing imagination to live</p>
                {/* <div className='pt-10'>
                    <p className='inline-block px-3 py-1 shadow-md before:bg-white bg-slate-400'>Hire</p>
                    <button className="pushable">
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front">
                            Hire Now!
                        </span>
                    </button>
                </div> */}
                <div className='flex items-center mt-6 md:mt-14'>
                    <ul className='flex items-center my-4 mr-6 space-x-2 sm:space-x-5 '>
                        <li><a href="" className='transition duration-150 ease-in opacity-75 hover:opacity-100'><AiOutlineTwitter size={24}/></a></li>
                        <li><a href="" className='transition duration-150 ease-in opacity-75 hover:opacity-100'><GrInstagram size={24}/></a></li>
                        <li><a href="" className='transition duration-150 ease-in opacity-75 hover:opacity-100'><FiDribbble size={24}/></a></li>
                        <li><a href="" className='transition duration-150 ease-in opacity-75 hover:opacity-100'><AiOutlineGithub size={24}/></a></li>
                    </ul>
                    <a href="mailto:satendermaurya1222@gmail.com" className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-[#363636]'>Email me</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container