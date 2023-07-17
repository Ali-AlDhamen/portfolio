import React from 'react'
import {MdDesignServices, MdDeveloperMode , MdOutlineWeb} from "react-icons/md"
import {AiOutlineFieldTime} from'react-icons/ai';
import {GiCardDraw} from "react-icons/gi"

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='mb-10 text-3xl font-bold md:text-4xl lg:text-5xl'>Services</h1>
        <div className='flex justify-between max-md:flex-wrap gap-7'>
            <div className='p-5 mt-5 overflow-hidden md:w-1/3 d relativ'>
                <h1 className='mt-5 text-center'>Web Development</h1>
                <div className='flex justify-center mt-4'>
                    <MdOutlineWeb className='text-pink-600' size={28}/>
                </div>
                <p className='mt-10 text-center text-neutral-300'>Skilled in developing web applications using React, Next.js, and Tailwind CSS</p>
                <p className='mt-10 text-center mb-7'><a href="" className='px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-pink-600'>know more</a></p>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-pink-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='p-5 mt-5 overflow-hidden md:w-1/3 d relativ'>
                <h1 className='mt-5 text-center'>Mobile Development</h1>
                <div className='flex justify-center mt-4'>
                    <MdDeveloperMode className='text-blue-600' size={28}/>
                </div>
                <p className='mt-10 text-center text-neutral-300'>Experienced in developing mobile applications using Flutter and Dart
</p>
                <p className='mt-10 text-center mb-7'><a href="" className='px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-blue-600'>know more</a></p>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-blue-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
            <div className='p-5 mt-5 overflow-hidden md:w-1/3 d relativ'>
                <h1 className='mt-5 text-center'>Uno Game</h1>
                <div className='flex justify-center mt-4'>
                    <GiCardDraw className='text-yellow-500' size={28}/>
                </div>
                <p className='mt-10 text-center text-neutral-300'>Professional Uno player with extensive experience and in-depth knowledge of game strategies and rules</p>
                <p className='mt-10 text-center mb-7'><a href="" className='px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-yellow-500'>know more</a></p>
                <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 '></span>
                <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-yellow-600 absolute top-[27%] '></span>
                <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 '></span>
                <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 '></span>
            </div>
        </div>
    </div>
  )
}

export default Services