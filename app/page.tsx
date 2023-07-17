import Image from 'next/image'
import Navbar from './Navbar'
import Container from './Container'
import Services from './Services'
import Projects from './Projects'
import Tools from './Tools'

export default function Home() {
  return (
    <div className='max-w-[1280px]'>
      <div className='w-10/12 pt-4 mx-auto'>
        <Navbar/>
      </div>
      <Container/>
      <div id='services' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]'></div>
      <Services/>
      <div id='projects' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
      <Projects/>
      <div id='tools' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
      <Tools/>
    </div>
  )
}
