import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Ubuntu } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProjectDetail, projectDetails } from '../../data/project.data'


interface ProjectCardProps {
  projects: ProjectDetail[]
}

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})

const ProjectCard: React.FC<ProjectCardProps> = ({projects}) => {
  return (
    <>
      {projects.map((project) => (
        <div className={`max-w-[700px] w-[100%] mt-[40px] md:mt-[80px] ${ubuntu.className} group`} key={project.id}>
          <div className="relative h-[350px] w-full rounded-lg overflow-hidden bg-black/10">
            <Link href={`/projects/project/${project.id}`}>
              <Image
              src={project.background_banner}
              alt="bg"
              height={1000}
              width={1000}
              className="h-full w-full object-cover rounded-lg"
              loading="lazy"
            />

            <div className="absolute top-6 left-1/2 w-[85%] md:w-[70%] translate-x-[-50%] overflow-hidden rounded-lg shadow-xl group-hover:scale-95 transition-all duration-200 ease-in-out">
              <Image
                src={project.img}
                alt="overlay"
                height={1000}
                width={1000}
                className="w-full h-auto object-cover rounded-lg transition-all ease-in-out duration-200"
                loading="lazy"
              />
            </div>
            </Link>
          </div>

          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col'>
              <p className='font-semibold text-sm mt-4 text-gray-300/75 group-hover:translate-x-7 transition-all ease-in-out duration-300'> {project.date} </p>
              <p className={`text-3xl md:text-4xl font-semibold mt-[20px] md:mt-[30px] ${roboto.className} group-hover:translate-x-7 transition-all ease-in-out duration-300 group-hover:text-blue-400`}>{project.name}</p>
            </div>
            <Link href={`/projects/project/${project.id}`}><FaArrowUpRightFromSquare className='block md:hidden md:group-hover:block text-2xl text-gray-300/70 hover:text-blue-100 transition-all ease-in-out duration-200 cursor-pointer' /></Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectCard