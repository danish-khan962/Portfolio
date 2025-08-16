import { projectDetails } from '../../../../../data/project.data'
import Link from 'next/link'
import { Ubuntu, Roboto } from 'next/font/google'
import { GrHomeRounded, GrProjects } from "react-icons/gr"
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Fonts
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})


export default async function Page({params,}: {params: Promise<{ id: string }>}) {

  const { id } = await params
  const project = projectDetails.find((p) => p.id === id)


  if (!project) {
    return (
      <div className={`${ubuntu.className} relative px-[16px] w-full flex justify-center items-center`}>
        <div className='max-w-[600px] w-[100%] bg-blue-400/5 border-4 border-white/15 rounded-xl p-[30px] mt-[100px] md:mt-[150px]'>
          <div className=' text-center text-3xl md:text-4xl'>Project <span className='text-white/80'>NOT</span> found :/</div>
          <div className='w-full flex flex-col md:flex-row justify-center items-center gap-x-5 gap-y-4 mt-[50px] md:mt-[60px]'>
            <Link href={"/projects"}>
              <button className='bg-[#121212]/10 border-2 border-white/15 cursor-pointer py-2 px-10 rounded-lg hover:border-white/20 transition-all ease-in-out duration-200 flex flex-row items-center group'>
                View other projects <span className='ml-[20px] text-white/70 text-sm'><GrProjects /></span>
              </button>
            </Link>
            <Link href={"/"}>
              <button className='bg-[#121212]/10 border-2 border-white/15 cursor-pointer py-2 px-10 rounded-lg hover:border-white/20 transition-all ease-in-out duration-200 flex flex-row items-center group'>
                Go back to Home <span className='ml-[20px] text-white/70 text-sm'><GrHomeRounded /></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${ubuntu.className} relative px-4`}>
      <div className='w-full flex justify-center items-center'>
        <div className='max-w-[700px] w-[100%] flex flex-row justify-between items-center mt-[100px]'>
          <h1 className={`${roboto.className} text-4xl md:text-5xl text-center text-white/60 uppercase`}>{project.name}</h1>
          <div className='flex flex-col gap-y-1'>
            <p className='text-sm text-white/60'>{project.date}</p>
            <p className='text-sm text-white/60'>- {project.author}</p>
          </div>
        </div>
      </div>

      {/* Project image */}
      <div className="flex justify-center items-center">
        <div className={`${ubuntu.className} relative max-w-[700px] w-full mt-[30px] md:mt-[60px] group overflow-hidden`}>
          <Image
            src={project.background_banner}
            alt="Background"
            height={1000}
            width={1000}
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute top-6 left-1/2 w-[85%] md:w-[70%] -translate-x-1/2 rounded-lg shadow-xl transition-all duration-200 ease-in-out group-hover:scale-95">
            <Image
              src={project.img}
              alt="Overlay"
              height={1000}
              width={1000}
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className='relative w-full flex justify-center items-center mt-[20px] md:mt-[40px]'>
        <div className='max-w-[700px] w-[100%] flex flex-row justify-between items-center gap-x-3'>
          <div className='w-[50%]'>
            <Link href={project.github_link} target='_blank'>
              <button className='bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white py-2 px-8 rounded-lg w-full backdrop-blur-md transition-all ease-in-out duration-200 cursor-pointer hover:from-blue-700 hover:via-sky-700 hover:to-cyan-600'>
                Repository
              </button>
            </Link>
          </div>
          <div className='w-[50%]'>
            <Link href={project.live_link} target='_blank'>
              <button className='bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 py-2 px-8 rounded-lg w-[100%] backdrop-blur-md transition-all ease-in-out duration-200 cursor-pointer hover:from-teal-500 hover:via-blue-600 hover:to-indigo-600'>
                Watch Live
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='relative w-full flex justify-center items-center mt-[50px] md:mt-[80px]'>
        <div className='max-w-[700px] w-[100%] text-white/70 font-medium text-sm md:text-[16px]'>
          {project.description}
        </div>
      </div>

      {/* Tags */}
      <div className='relative w-full flex justify-center items-center'>
        <div className='max-w-[700px] w-[100%] flex flex-row flex-wrap gap-5 mt-[50px] md:mt-[80px]'>
          {project.tags.map((tag, index) => (
            <span className='py-2 px-10 bg-[#121212] border-2 border-white/10 backdrop-blur-md rounded-full text-xs md:text-sm' key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}



export async function generateStaticParams() {
  return projectDetails.map((project) => ({
    id: project.id,
  }))
}