import React from 'react'
import { Roboto } from 'next/font/google'
import HeroSocialBar from '@/components/HeroSocialBar'
import ProfileCard from '@/components/ProfileCard'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})

const page = () => {
  return (
    <div className='relative px-[16px]'>

      <div className='mt-[80px] md:mt-[160px] grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center'>
          <ProfileCard />
        </div>

        <div className='max-w-[550px] w-[100%]'>
          <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] mt-[40px] md:mt-0`}> <span className='text-white/80'>Crafting</span> Conversion-Focused <span className='text-white/80'> Designs That Drive Real Results. </span> </h1>

          <p className='text-sm text-white/80 max-w-[550px] w-[100%] mt-[30px] md:mt-[60px]'>
            I&apos;m an ML engineer and frontend developer specializing in two core areas: building intelligent machine   learning solutions and designing modern, high-performing web interfaces. I help businesses and teams bring  their ideas to life—whether it&apos;s through data-driven models or sleek, responsive frontends that deliver   great user experiences.
          </p>

          <HeroSocialBar />
        </div>
      </div>

    </div>
  )
}

export default page
