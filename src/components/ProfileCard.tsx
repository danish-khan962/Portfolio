import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import Image from 'next/image';
import profile_icon from "../../public/profile_icon.jpg"
import Link from 'next/link';
import { Ubuntu } from 'next/font/google';
import { BsCircleFill } from "react-icons/bs";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400"]
})

const ProfileCard = () => {
  return (
    <div className={`${ubuntu.className} relative max-w-[400px] w-full bg-white rounded-lg`}>

      {/* Overlayer card */}
      <div className='bg-black p-[20px] w-full border-2 rounded-lg'>
        <div className='flex justify-between'>
            <div className='flex gap-x-1 items-center'>
                <IoLocationSharp className='text-[14px]'/>
                <p className='text-[14px] text-gray-300'>Delhi, India</p>
            </div>
            <p className='text-[14px] text-gray-300'>ML Engineer</p>
        </div>

        <div className='flex flex-row items-center mt-[35px]'>
            <Image src={profile_icon} height={1000} width={1000} className='h-[50px] w-auto rounded-full' alt={"profile"}/>
            <div className='flex flex-col ml-[20px]'>
                <p className='font-semibold text-[18px]'> Danish Khan </p>
                <div className='flex flex-row gap-x-1 items-center'>
                  <BsCircleFill className='text-[10px] text-green-400'/>
                  <p className='text-xs text-gray-300'> <span className='h-[5px] w-[5px] rounded-full bg-green-500'></span> Available Now </p>
                </div>
            </div>
        </div>

        <div className='mt-[35px] grid grid-cols-2  gap-x-4'>
            <Link href={"/contact"} > <button className='bg-white text-black font-medium py-1.5 px-6 rounded-md hover:bg-white/90 transition-all ease-in-out duration-200 cursor-pointer'> Get in touch </button></Link>
            <Link href={"/about"} > <button className='bg-[#141414] text-white font-medium py-1.5 px-6 rounded-md transition-all ease-in-out duration-200 cursor-pointer shadow-[inset_0_0_6px_rgba(255,255,255,0.08)] border border-white/15 hover:border-white/20'> About me </button> </Link>
        </div>
      </div>

      {/* Work status */}
      <p className='text-black font-medium text-center py-[8px]'> Available for work </p>
    </div>
  )
}

export default ProfileCard
