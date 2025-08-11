import React from 'react'
import { Roboto } from 'next/font/google'
import ProjectCard from '@/components/ProjectCard'
import { projectDetails } from '../../../data/project.data'

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
})

const page = () => {
  return (
    <div className='relative w-full mt-[80px] md:mt-[100px] px-[16px]'>
      <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%] mt-[60px] md:mt-[80px]`}> All <span className='text-white/70'> Projects. </span> </h1>

      <div className='grid grid-cols-1 md:grid-cols-2'>
        <ProjectCard projects={projectDetails} />
      </div>
    </div>
  )
}

export default page
