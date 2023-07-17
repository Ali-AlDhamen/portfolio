'use client'
import React, {useState} from 'react'
import {BsArrowUpRight} from "react-icons/bs"
import Link from 'next/link';

type Props = {}

const Projects = (props: Props) => {
    const [selectedId, setSelectedId] = useState<boolean>(false)
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>Projects</h1>
        <p className='pt-6 text-neutral-300'>Over the years, I have gained experience in designing and developing a variety of websites and applications, ranging from simple one-page landing pages to complex multi-page applications.Here are some projects that I would like to present to all of you, showcasing my work and achievements in the field of web development and app development.</p>
        {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}
        <div className='mx-auto mt-20 md:w-9/12 '>
            <img className='rounded-xl opacity-90' src="gforcey.png" alt="" />
            <div className='mx-auto my-10 sm:w-10/12'>
                <h1 className='mb-4 text-2xl font-bold'>GForce-RT</h1>
                <div className='text-neutral-300'>Discover the world of GForce-RT, a cutting-edge website showcasing their exceptional work and top-notch services. Built with Next.js and Tailwind CSS</div>
                <div className='inline-block mt-6'><Link href="https://www.gforce-rt.com/" target="_blank" rel="noreferrer"  className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></Link></div>
            </div>
        </div>
        <div className='mx-auto mt-20 md:w-9/12 '>
            <img className='rounded-xl opacity-90' src="taqyeemi.png" alt="" />
            <div className='mx-auto my-10 sm:w-10/12'>
                <h1 className='mb-4 text-2xl font-bold'>Taqyeemi App</h1>
                <div className='text-neutral-300'>A student-centric app empowering users to rate college courses, evaluate instructors, and provide valuable feedback for future students. Enhance your learning journey With access to a wealth of educational resources. Bulit with Flutter and Firebase</div>
                <div className='inline-block mt-6'><Link href="https://github.com/Ali-AlDhamen/taqyeemi" target="_blank" rel="noreferrer"  className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></Link></div>
            </div>
        </div>
        <div className='mx-auto mt-20 md:w-9/12 '>
            <img className='rounded-xl opacity-90' src="aklne.png" alt="" />
            <div className='mx-auto my-10 sm:w-10/12'>
                <h1 className='mb-4 text-2xl font-bold'>Aklne App</h1>
                <div className='text-neutral-300'>Mobile application that connect individuals and businesses with surplus food to those who are in need. It aims to reduce food waste and help alleviate hunger and poverty. Bulit With Flutter and Firebase</div>
                <div className='inline-block mt-6'><Link href="https://github.com/Radwan-Albahrani/Akalne" target="_blank" rel="noreferrer"  className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></Link></div>
            </div>
        </div>
        <div className='mx-auto mt-20 md:w-9/12 '>
            <img className='rounded-xl opacity-90' src="quizo.png" alt="" />
            <div className='mx-auto my-10 sm:w-10/12'>
                <h1 className='mb-4 text-2xl font-bold'>QuizAI App</h1>
                <div className='text-neutral-300'>Mobile application for personalized quizzes. you can effortlessly generate quizzes from text or files, or dive into exciting quizzes created by others. Built With Flutter and Firebase (Still Cooking)</div>
                <div className='inline-block mt-6'><Link href="" target="_blank"
          rel="noreferrer"  className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>Explore <BsArrowUpRight size={14} className='ml-2'/></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Projects