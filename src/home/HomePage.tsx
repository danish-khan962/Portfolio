import ProfileCard from '@/components/ProfileCard'
import React from 'react'
import { Roboto } from 'next/font/google'
import HeroSocialBar from '@/components/HeroSocialBar'
import Image from 'next/image'
import profile_icon from "../../public/profile_icon.jpg"
import { BsCircleFill } from 'react-icons/bs'
import { Ubuntu } from 'next/font/google'
import TechStackMarquee from '@/components/TechStackMarquee'

const ubuntu = Ubuntu({
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
      <div className='flex flex-col w-full'>
        <h1 className='text-xl text-white/50 font-semibold text-center'>( Tech Stack )</h1>

        <TechStackMarquee />
      </div>

    </div>
  )
}

export default HomePage
