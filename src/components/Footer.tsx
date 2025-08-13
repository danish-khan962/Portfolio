import React from 'react'
import Image from 'next/image'
import portfolio_logo from "../../public/portfolio_logo.png"
import Link from 'next/link'
import { Ubuntu } from 'next/font/google'
import HeroSocialBar from './HeroSocialBar'

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400"]
})

const Footer = () => {
  return (

        <footer className={`px-[16px] mt-[100px] md:mt-[180px] w-full text-gray-300 ${ubuntu.className}`}>
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <Image src={portfolio_logo} alt="" height={1000} width={1000} className='h-[25px] w-auto'/>
                    <p className="mt-6 text-sm leading-[24px]">
                         Thanks for stopping by! I&apos;m a Machine Learning Engineer and Frontend Developer who enjoys turning data into insights and code into clean interfaces. Let&apos;s connect: <a href="mailto:dk831675@gmail.com" className="text-blue-600 underline">dk831675@gmail.com</a>.
                    </p>
                    <HeroSocialBar />
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Pages</h2>
                        <ul className="text-sm space-y-2">
                            <li><Link href="/"  className='hover:underline'>Home</Link></li>
                            <li><Link href="/about" className='hover:underline'>About Me</Link></li>
                            <li><Link href="/projects" className='hover:underline'>Projects</Link></li>
                            <li><Link href="/contact" className='hover:underline'>Contact Me</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <Link href={"mailto:dk831675@gmail.com"} className='hover:underline'>dk831675@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5 text-gray-300/80">
                Copyright {new Date().getFullYear()} © <Link href="https://danishkhan9625.vercel.app/">Danish Khan</Link>. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer
