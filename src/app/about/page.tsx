import React from 'react'
import Image from 'next/image'
import { BsCircleFill } from 'react-icons/bs'
import profile_icon from "../../../public/profile_icon.jpg"
import { Roboto } from 'next/font/google'
import HeroSocialBar from '@/components/HeroSocialBar'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})

const page = () => {
  return (
    <div className='relative px-[16px]'>

      <div className='mt-[100px] md:mt-[200px] flex flex-col md:flex-row justify-between gap-y-10 md:gap-y-0'>
        <div className='flex flex-row items-center max-w-[400px] w-[100%] align-baseline'>
          <Image src={profile_icon} height={1000} width={1000} className='h-[50px] w-auto rounded-full' alt={"profile"} />
          <div className='flex flex-col ml-[20px]'>
            <p className='font-semibold text-[20px]'> Danish Khan </p>
            <div className='flex flex-row gap-x-1 items-center'>
              <BsCircleFill className='text-[10px] text-green-400' />
              <p className='text-xs text-gray-300'> <span className='h-[5px] w-[5px] rounded-full bg-green-500'></span> Available Now </p>
            </div>
          </div>
        </div>

        <p className='text-sm text-white/80 max-w-[550px] w-[100%] mt-[30px] md:mt-[60px]'>
        I&apos;m an ML engineer and frontend developer specializing in two core areas: building intelligent machine learning solutions and designing modern, high-performing web interfaces. I help businesses and teams bring their ideas to life—whether it&apos;s through data-driven models or sleek, responsive frontends that deliver great user experiences.
      </p>

      </div>

      <div className='flex flex-row justify-between'>
        <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%]`}> Crafting Conversion-Focused <span className='text-white/70'> Designs That Drive Real Results. </span> </h1>
        <HeroSocialBar />
      </div>

    </div>
  )
}

export default page
