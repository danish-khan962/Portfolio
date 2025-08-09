"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import portfolio_logo from "../../public/portfolio_logo.png"
import { Ubuntu } from 'next/font/google'
import { HiMiniBars2 } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { LuDownload } from 'react-icons/lu'

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400"]
})

const Navbar = () => {

    // Toggle state
    const [toggle, setToggle] = useState(false);

    const toggleMenuIcon = () => {
        setToggle(!toggle);
    }

  return (
    <nav className={`relative w-full px-[16px] py-2.5 flex flex-row justify-between items-center ${ubuntu.className}`}>
    
            <Link href={"/"}>
                <Image src={portfolio_logo} height={1000} width={1000} alt={"logo"} className='w-[160px] md:w-[200px]'/>
            </Link>

        <div className='flex flex-row gap-x-10 items-center max-lg:hidden'>
            <Link href={"/"} className='hover:text-white/95 transition-all ease-in-out duration-200 '> Home </Link> 
            <Link href={"/projects"} className='hover:text-white/95 transition-all ease-in-out duration-200 '> Projects </Link>
            <Link href={"/about"} className='hover:text-white/95 transition-all ease-in-out duration-200 '> About </Link>
        </div>

        <div className='flex flex-row gap-x-4 items-center max-lg:hidden'>
            <Link href={"/contact"}> <IoMailOutline className='text-xl' /> </Link>
            <button className='bg-white text-black font-medium py-1.5 px-6 rounded-md hover:bg-white/95 transition-all ease-in-out duration-200 cursor-pointer flex flex-row items-center'> Resume <span className='ml-[15px]'><LuDownload /></span> </button>
        </div>  

        <div className='text-3xl lg:hidden'>
            {
                toggle == false ? (<HiMiniBars2 className='hover:cursor-pointer' onClick={toggleMenuIcon}/>) 
                : 
                (<AiOutlineClose className='hover:cursor-pointer' onClick={toggleMenuIcon}/>)
            }
        </div>

      
    </nav>
  )
}

export default Navbar
