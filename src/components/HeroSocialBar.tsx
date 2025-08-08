import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const HeroSocialBar = () => {
  return (
    <div className='flex gap-x-6 mt-[40px] md:mt-[40px] bg-[rgba(40,39,39,0.4)] backdrop-blur-md border border-white/10 shadow-md py-5 px-8 rounded-lg'>
      <div> <Link href={"/"}> <FaLinkedin  className='text-2xl hover:scale-150 hover:rotate-[-15deg] transition-all ease-in-out duration-200 cursor-pointer'/> </Link> </div>
      <div> <Link href={"/"}> <FaGithub  className='text-2xl hover:scale-150 hover:translate-y-[-8px] transition-all ease-in-out duration-200 cursor-pointer'/> </Link> </div>
      <div> <Link href={"/"}> <FaInstagram className='text-2xl hover:scale-150 hover:rotate-[15deg] transition-all ease-in-out duration-200 cursor-pointer' /> </Link> </div>
    </div>
  )
}

export default HeroSocialBar
