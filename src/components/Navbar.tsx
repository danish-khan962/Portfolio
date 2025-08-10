"use client"

import React, { useState, useEffect } from 'react'
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
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [toggle]);

    const toggleMenuIcon = () => {
        setToggle(!toggle);
    }

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-[16px] py-2.5 flex flex-row justify-between items-center transition-all duration-300 ease-in-out ${scrolled
            ? 'bg-white/10 backdrop-blur-md'
            : 'bg-black'
            } ${ubuntu.className}`}>

            <Link href={"/"}>
                <Image src={portfolio_logo} height={1000} width={1000} alt={"logo"} className='w-[160px] md:w-[200px]' />
            </Link>

            {/* Desktop */}
            <div className='flex flex-row gap-x-10 items-center max-lg:hidden'>
                <Link href={"/"} className='hover:text-white/70 transition-all ease-in-out duration-200'> Home </Link>
                <Link href={"/projects"} className='hover:text-white/70 transition-all ease-in-out duration-200'> Projects </Link>
                <Link href={"/about"} className='hover:text-white/70 transition-all ease-in-out duration-200'> About </Link>
            </div>
            <div className='flex flex-row gap-x-4 items-center max-lg:hidden'>
                <Link href={"/contact"}>
                    <IoMailOutline className='text-xl' />
                </Link>
                <button className='bg-white text-black font-medium py-1.5 px-6 rounded-md hover:bg-white/95 transition-all ease-in-out duration-200 cursor-pointer flex flex-row items-center'>
                    Resume <span className='ml-[15px]'><LuDownload /></span>
                </button>
            </div>

            {/* Mobile */}
            <div className='text-3xl lg:hidden z-50'>
                {
                    !toggle
                        ? <HiMiniBars2 className='hover:cursor-pointer' onClick={toggleMenuIcon} />
                        : <AiOutlineClose className='hover:cursor-pointer' onClick={toggleMenuIcon} />
                }
            </div>
            <div className={`fixed top-0 left-0 w-full h-screen bg-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-white text-xl transition-all duration-300 ease-in-out lg:hidden z-40 ${toggle ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}`}>
                <Link href={"/"} onClick={() => setToggle(false)} className='hover:text-white/70 transition-all ease-in-out duration-200'> Home </Link>
                <Link href={"/projects"} onClick={() => setToggle(false)} className='hover:text-white/70 transition-all ease-in-out duration-200'> Projects </Link>
                <Link href={"/about"} onClick={() => setToggle(false)} className='hover:text-white/70 transition-all ease-in-out duration-200'> About </Link>
                <Link href={"/contact"} onClick={() => setToggle(false)} className='hover:text-white/70 transition-all ease-in-out duration-200'> Contact </Link>
                <button className=' flex flex-row gap-x-1 items-center bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-white/90 transition-all hover:cursor-pointer'>
                    Resume <span className='ml-[10px]'><LuDownload /></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
