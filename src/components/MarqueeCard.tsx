import React from 'react'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400"]
})

type MarqueeCardProps = {
    icon: React.ReactNode
    name: string
}

const MarqueeCard: React.FC<MarqueeCardProps> = ({ icon, name }) => {
    return (
        <div className='relative bg-black rounded-xl hover:bg-[#121212] group  hover:border-b-2'>
            <div className='flex-shrink-0 bg-[#101010] backdrop-blur-3xl border-2 border-white/10 w-[200px] md:w-[300px] h-[150px] flex justify-center items-center hover:cursor-pointer rounded-xl hover:bg-white/80 hover:text-black transition-all ease-in-out duration-200'>
                <p className='text-5xl'>{icon}</p>
            </div>

            <p className={`${ubuntu.className} text-center font-semibold py-2 text-white opacity-0 group-hover:opacity-100`}> {name} </p>
        </div>
    )
}

export default MarqueeCard
