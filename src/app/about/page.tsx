import React from 'react'
import { Roboto } from 'next/font/google'
import HeroSocialBar from '@/components/HeroSocialBar'
import Image from 'next/image'
import { BsCircleFill } from 'react-icons/bs'
import profile_icon from "../../../public/profile_icon.jpg"
import { Ubuntu } from 'next/font/google'
import TechStackCard from '@/components/TechStackCard'
import Link from 'next/link'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import customer_icon_1 from "../../../public/customer_icon_1.jpg"
import customer_icon_2 from "../../../public/customer_icon_2.jpg"
import customer_icon_3 from "../../../public/customer_icon_3.jpg"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})

const page = () => {

  // By the Numbers - data
  const ByTheNumbers = [
    { numbers: "10+", info: "Projects completed" },
    { numbers: "1.5+", info: "Years unoffical experience" },
    { numbers: "100%", info: "Client satisfaction" },
  ]

  return (
    <div className={`${ubuntu.className} relative px-[16px]`}>

      {/* Section 1 */}
      <div className='mt-[80px] md:mt-[160px] grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center'>
          <div className='flex flex-row items-center mt-[35px]'>
            <Image src={profile_icon} height={1000} width={1000} className='h-[50px] w-auto rounded-full' alt={"profile"} />
            <div className='flex flex-col ml-[20px]'>
              <p className='font-semibold text-[18px]'> Danish Khan </p>
              <div className='flex flex-row gap-x-1 items-center'>
                <BsCircleFill className='text-[10px] text-green-400' />
                <p className='text-xs text-gray-300'> <span className='h-[5px] w-[5px] rounded-full bg-green-500'></span> Available Now </p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[550px] w-[100%]'>
          <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] mt-[40px] md:mt-0`}> <span className='text-white/80'>Crafting</span> Conversion-Focused <span className='text-white/80'> Designs That Drive Real Results. </span> </h1>

          <p className='text-sm text-white/80 max-w-[550px] w-[100%] mt-[30px] md:mt-[60px]'>
            I&apos;m an ML engineer and frontend developer specializing in two core areas: building intelligent machine   learning solutions and designing modern, high-performing web interfaces. I help businesses and teams bring  their ideas to life—whether it&apos;s through data-driven models or sleek, responsive frontends that deliver   great user experiences.
          </p>

          <HeroSocialBar />
        </div>
      </div>


      {/* Section 2 - By the numbers */}
      <div className='relative mt-[80px] md:mt-[150px]'>
        <h1 className={`text-4xl md:text-5xl ${roboto.className} text-center`}> <span className='text-white/80'>By The</span> Numbers </h1>

        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-[30px] md:mt-[60px]'>
          {ByTheNumbers.map((data, index) => (
            <div className='bg-[#121212] flex flex-col gap-y-5  justify-center items-center py-[35px] rounded-lg border-2 border-white/10 backdrop-blur-md' key={index}>
              <p className='text-2xl md:text-3xl font-semibold'> {data.numbers} </p>
              <p className='text-sm text-white/70'> {data.info} </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 - Skills & tools */}
      <div className='relative w-full mt-[80px] md:mt-[150px]'>
        <h1 className={`text-4xl md:text-5xl ${roboto.className} text-center`}> <span className='text-white/80'> Skills & </span> Tools </h1>

        <div className='w-full flex justify-center items-center mt-[30px] md:mt-[60px]'>
          <TechStackCard />
        </div>
      </div>


      {/* Section 4 - Encouragement */}
      <div className="relative w-full flex flex-col md:flex-row justify-between mt-[80px] md:mt-[150px] md:gap-x-[80px]">
        <div className="max-w-[500px] w-full h-[300px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: 'url("/gold_metal_flow.gif")' }}>
        
        </div>

        <div>
          <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] mt-[40px] md:mt-0 md:w-[70%]`}>
            <span className="text-white/80">Building</span> Intelligent systems with
            <span className="text-white/80"> clean functional designs.</span>
          </h1>

          <p className='text-sm text-white/80 md:w-[70%] mt-[30px] md:mt-[60px]'>I combine intelligent systems with clean frontend execution—helping modern brands build scalable, high-converting digital products without the bloat.</p>

          <Link href={"/contact"}>
            <button className='mt-[20px] md:mt-[40px] py-1.5 px-8 bg-[#121212]/50 border-2 border-white/10 rounded-lg cursor-pointer backdrop-blur-md hover:border-white/20 transition-all ease-in-out duration-300'>Let&apos;s connect</button>
          </Link>
        </div>
      </div>


      {/* Testimonals */}
      <div className='relative my-[80px] md:mt-[150px]'>
        <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%] mt-[60px] md:mt-[80px] mb-[40px] md:mb-[80px]`}> Testimonals. </h1>
        <AnimatedTestimonials
          testimonials={[
            {
              quote: "Thanks to the incredible Hospital Management System built in core Python with integrated MySQL, I scored over 9 in my subject! Truly impressed with the dedication and technical skill.",
              name: "Abhinav Singh",
              designation: "Student at Sharda University",
              src: customer_icon_1,
            },
            {
              quote: "The deep learning model built for analyzing sound behaviors using TensorFlow was top-notch. Very professional and technically sound work – made my data analysis task a breeze!",
              name: "Subhasri Pushpanathan",
              designation: "Data Analyst - TCS",
              src: customer_icon_2,
            },
            {
              quote: "I was amazed by the speed and quality — the entire frontend for my startup 'Admatrica' was built in just 3 days! Super reliable and skilled.",
              name: "Kunal Khandelwal",
              designation: "Founder - Unweb Tech.",
              src: customer_icon_3,
            },
          ]}
          autoplay={true}
        />
      </div>


    </div>
  )
}

export default page
