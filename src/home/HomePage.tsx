import ProfileCard from '@/components/ProfileCard'
import React from 'react'
import { Roboto } from 'next/font/google'
import HeroSocialBar from '@/components/HeroSocialBar'
import Image from 'next/image'
import Link from 'next/link'
import profile_icon from "../../public/profile_icon.jpg"
import { BsCircleFill } from 'react-icons/bs'
import { Ubuntu } from 'next/font/google'
import TechStackMarquee from '@/components/TechStackMarquee'
import TechStackCard from '@/components/TechStackCard'
import ProjectCard from '@/components/ProjectCard'
import { HiArrowUturnRight } from "react-icons/hi2";
import ServiceCard from '@/components/ServiceCard'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import customer_icon_1 from "../../public/customer_icon_1.jpg"
import customer_icon_2 from "../../public/customer_icon_2.jpg"
import customer_icon_3 from "../../public/customer_icon_3.jpg"
import { Tilt_Warp } from 'next/font/google'
import { FaLocationArrow } from "react-icons/fa";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
})

const tilt_wrap = Tilt_Warp({
  subsets: ["latin"],
  weight: ["400"]
})


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})

const HomePage = () => {
  return (
    <div className='px-[16px]'>

      {/* Hero section - 1 */}
      <div className='my-[60px] md:my-[120px] flex flex-col md:flex-row items-center'>
        <ProfileCard />

        <div className='flex flex-col mt-[50px] md:mt-0 md:ml-[70px] lg:ml-[100px] max-w-[650px] w-[100%]s'>
          <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px]`}>Merging Smart Machines with - <span className='text-white/70'> Seamless User Interfaces. </span></h1>

          <HeroSocialBar />
        </div>
      </div>


      {/* Hero section - 2 */}
      <div className={`${ubuntu.className} my-[100px] md:my-[140px]`}>

        <h1 className='text-xl text-white/50 font-semibold text-center'>( About )</h1>

        <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%] mt-[60px] md:mt-[80px]`}> Crafting Conversion-Focused <span className='text-white/70'> Designs That Drive Real Results. </span> </h1>

        <div className='mt-[100px] md:mt-[200px] flex flex-col md:flex-row justify-between gap-y-14 md:gap-y-0'>
          <div className='flex flex-row items-center max-w-[400px] w-[100%]'>
            <Image src={profile_icon} height={1000} width={1000} className='h-[70px] w-auto rounded-full' alt={"profile"} />
            <div className='flex flex-col ml-[20px]'>
              <p className='font-semibold text-[20px]'> Danish Khan </p>
              <div className='flex flex-row gap-x-1 items-center'>
                <BsCircleFill className='text-[10px] text-green-400' />
                <p className='text-xs text-gray-300'> <span className='h-[5px] w-[5px] rounded-full bg-green-500'></span> Available Now </p>
              </div>
            </div>
          </div>

          <p className='text-sm text-white/80 max-w-[750px] w-[100%]'>
            I&apos;m an ML engineer and frontend developer specializing in two core areas: building intelligent machine learning solutions and designing modern, high-performing web interfaces. I help businesses and teams bring their ideas to life—whether it&apos;s through data-driven models or sleek, responsive frontends that deliver great user experiences.
          </p>

        </div>

      </div>

      {/*  Tech stack section */}
      <div className='flex flex-col w-full justify-center items-center'>
        <h1 className='text-xl text-white/50 font-semibold text-center'>( Tech Stack )</h1>

        <TechStackMarquee />

        <TechStackCard />
      </div>


      {/* Recent Works - (projects) */}
      <div className='relative'>
        <div className='flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between items-baseline'>
          <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%] mt-[60px] md:mt-[80px]`}> <span className='text-white/70'> Recent </span> Works. </h1>
          <h1 className='text-xl text-white/50 font-semibold'>( Project )</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1'>
          <ProjectCard />
        </div>

        <div className='w-full flex justify-center items-center'>
          <Link href={"/projects"}>
            <button className='mt-[10px] text-lg font-semibold bg-white text-black py-2 px-10 rounded-full hover:cursor-pointer hover:bg-white/90 flex flex-row items-center'> View All Projects <span className='ml-[25px]'><HiArrowUturnRight className='font-semibold' /></span> </button>
          </Link>
        </div>
      </div>


      {/* Services Section */}
      <div className='relative my-[50px] md:my-[100px]'>
        <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%] mt-[60px] md:mt-[80px] mb-[40px] md:mb-[80px]`}> Services. </h1>
        <ServiceCard />
      </div>

      {/* Testimonials */}
      <div className='relative my-[40px] md:mt-[80px]'>
        <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%] mt-[60px] md:mt-[80px] mb-[40px] md:mb-[80px]`}> Testimonals. </h1>
        <AnimatedTestimonials
          testimonials={[
            {
              quote: "This is an amazing product. Highly recommend!",
              name: "Jane Doe",
              designation: "CEO at Example Corp",
              src: customer_icon_1,
            },
            {
              quote: "Great experience from start to finish.",
              name: "John Smith",
              designation: "Product Manager at Tech Co",
              src: customer_icon_2,
            },
            {
              quote: "The best service I've ever used!",
              name: "Alice Johnson",
              designation: "Freelancer",
              src: customer_icon_3,
            },
          ]}
          autoplay={true}
        />
      </div>

      {/* Contact Me section */}
      <div className={`relative flex flex-row justify-center items-center my-[60px] md:my-[120px] ${tilt_wrap.className} text-gray-300 bg-[#121212] border-4 border-white/10 py-[45px] rounded-3xl group`}>
        <span className='text-6xl md:text-7xl md:group-hover:opacity-5 transition-all ease-in-out duration-200'>C</span>
        <span className='text-6xl md:text-7xl skew-3 -translate-y-2 md:group-hover:opacity-5 transition-all ease-in-out duration-200'>O</span>
        <span className='text-6xl md:text-7xl -skew-2 md:group-hover:opacity-5 transition-all ease-in-out duration-200'>N</span>
        <span className='text-6xl md:text-7xl -translate-y-2 md:group-hover:opacity-5 transition-all ease-in-out duration-200'>T</span>
        <span className='text-6xl md:text-7xl md:group-hover:opacity-5 transition-all ease-in-out duration-200'>A</span>
        <span className='text-6xl md:text-7xl -skew-2 md:group-hover:opacity-5 transition-all ease-in-out duration-200'>C</span>
        <span className='text-6xl md:text-7xl md:group-hover:opacity-5 transition-all ease-in-out duration-200'>T</span>

        <Link href={"/contact"}>
          <FaLocationArrow className='text-4xl md:text-6xl text-blue-400/70 ml-[30px] md:ml-0 md:absolute md:left-[50%] md:right-[50%] md:bottom-[30%] md:opacity-0 md:group-hover:opacity-100 transition-all ease-in-out duration-300' />
        </Link>
      </div>

    </div>
  )
}

export default HomePage
