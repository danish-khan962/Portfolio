import React from 'react'
import background_image_1 from "../../public/bg-image1.jpg"
import background_image_2 from "../../public/bg-image2.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { Ubuntu } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})

const ProjectCard = () => {
  return (
    <div className={`max-w-[700px] w-[100%] my-[40px] md:my-[80px] ${ubuntu.className} group`}>
      <div>
        <Link href={`/project`}>
          <Image src={background_image_2} alt={"bg"} height={1000} width={1000} className='h-[350px] w-full bg-center rounded-lg'/>
        </Link>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <p className='font-semibold text-sm mt-4 text-gray-300 group-hover:translate-x-7 transition-all ease-in-out duration-300'> June 17, 2025 </p>
          <p className={`text-4xl font-semibold mt-[20px] md:mt-[30px] ${roboto.className} group-hover:translate-x-7 transition-all ease-in-out duration-300 group-hover:text-blue-400`}>GenPod AI</p>
        </div>
        <Link href={"/project"}><FaArrowUpRightFromSquare className='block md:hidden md:group-hover:block text-2xl text-gray-300/70 hover:text-blue-100 transition-all ease-in-out duration-200 cursor-pointer' /></Link>
      </div>
    </div>
  )
}

export default ProjectCard
