import React from 'react'
import { projectDetails } from '../../../../../data/project.data'
import Link from 'next/link'
import { Ubuntu } from 'next/font/google'
import { GrHomeRounded, GrProjects } from "react-icons/gr";

interface Props {
  params: {
    id: string
  }
}

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400"]
})

const page = ({ params }: Props) => {
  const { id } = params

  const projects = projectDetails.find((proj) => proj.id === id)

  if (!projects) {
    return (
    <div className={`${ubuntu.className} relative px-[16px] w-full flex justify-center items-center`}>
        <div className='max-w-[600px] w-[100%] bg-blue-400/5 border-4 border-white/15 rounded-xl p-[30px] mt-[100px] md:mt-[150px]'>
            <div className=' text-center text-3xl md:text-4xl'>Project <span className='text-white/80'>NOT</span> found :/</div>

        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-4 mt-[50px] md:mt-[60px]'>
            <Link href={"/projects"}> <button className='bg-[#121212]/10 border-2 border-white/15 cursor-pointer py-2 px-10 rounded-lg hover:border-white/20 transition-all ease-in-out duration-200 flex flex-row items-center group'> View other projects <span className='ml-[20px] text-white/70 text-sm'> <GrProjects /></span> </button> </Link>
            <Link href={"/"}> <button className='bg-[#121212]/10 border-2 border-white/15 cursor-pointer py-2 px-10 rounded-lg hover:border-white/20 transition-all ease-in-out duration-200 flex flex-row items-center group'> Go back to Home <span className='ml-[20px] text-white/70 text-sm'><GrHomeRounded /></span> </button> </Link>
        </div>
        </div>
    </div>
    )
  }

  return (
    <div className='relative px-[16px]'>
      <div>
        
      </div>
    </div>
  )
}

export default page
