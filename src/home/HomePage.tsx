import ProfileCard from '@/components/ProfileCard'
import React from 'react'
import { Roboto } from 'next/font/google'
import HeroSocialBar from '@/components/HeroSocialBar'


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

    </div>
  )
}

export default HomePage
