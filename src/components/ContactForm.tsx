import React from 'react'
import { Ubuntu, Poppins } from 'next/font/google'
import { Londrina_Shadow } from 'next/font/google'
import Link from 'next/link'
import { IoSend } from "react-icons/io5";


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"]
})

const londrina_shadow = Londrina_Shadow({
  subsets: ["latin"],
  weight: ["400"]
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})
const ContactForm = () => {
  return (
    <div className={`${ubuntu.className}  w-full flex flex-col-reverse md:flex-row gap-x-[120px] gap-y-[40px] my-[80px] md:my-[120px]`}>
      {/* Contact Form */}
      <form className='relative max-w-[750px] w-[100%] bg-transparent flex flex-col gap-y-[30px]'>
        <input type="text" className='w-full border border-white/25 py-1.5 md:py-2 px-8 outline-none text-sm md:text-[16px] placeholder:text-white/50' placeholder='Your name' />
        <input type="text" className='w-full border border-white/25 py-1.5 md:py-2 px-8 outline-none text-sm md:text-[16px] placeholder:text-white/50' placeholder='Email' />
        <textarea name="message" className='w-full border border-white/25 py-1.5 md:py-2 px-8 outline-none text-sm md:text-[16px] placeholder:text-white/50 resize-none' placeholder='Write your message' rows={5}></textarea>
        <div className='w-full'>
          <button className='text-black bg-white hover:bg-white/90 py-2 px-10 rounded transition-all ease-in-out duration-200 cursor-pointer flex flex-row justify-center items-center'> Send <span className='ml-[10px]'><IoSend /></span></button>
        </div>
      </form>

      <div className='max-w-[550px] w-[100%] bg-transparent'>
        <h1 className={`${poppins.className} text-3xl md:text-5xl md:leading-[54px] font-extrabold`}> Let&apos;s <span className={`${londrina_shadow.className}`}>talk</span> for <br /> Something special </h1>

        <p className='text-xs md:text-sm font-medium text-white/60 mt-[20px] md:mt-[40px]'>I’m passionate about combining machine learning and frontend development to build smart, user-focused interfaces that not only work well but feel great to use.</p>

        <p className='text-xl md:text-2xl font-semibold mt-[35px] md:mt-[70px] hover:underline'>
             <Link href={"mailto:dk831675@gmail.com"}> dk831675@gmail.com </Link>
        </p>
    
      </div>
    </div>
  )
}

export default ContactForm
