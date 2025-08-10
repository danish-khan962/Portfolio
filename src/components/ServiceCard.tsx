import React from 'react'
import student_card_bg from "../../public/student_card_bg.png"
import other_servie_card_bg from "../../public/other_service_bg.png"
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400"]
})

const serviceData = [
    { image: student_card_bg, title: "Student", desc: " I help high school and early-year college students bring their ideas to life by building personal websites and beginner-friendly machine learning projects. Whether it's for a school assignment or your first portfolio, I’ll support you with hands-on development at a student-friendly cost. Valid student ID required." },
    { image: other_servie_card_bg, title: "Other", desc: "I offer freelance frontend development services for startups and businesses looking to build or improve their web presence. From landing pages to full React applications, I deliver clean, responsive, and scalable interfaces tailored to your needs." },
]

const ServiceCard = () => {
    return (
        <>
            {serviceData.map((serviceType, index) => (
                <div className={`relative w-full flex flex-col md:flex-row justify-between items-center gap-y-4 bg-blue-500/5 border-2 border-white/15 rounded-xl mt-[20px] ${ubuntu.className}`} key={index}>
                    <div className='w-full md:w-[60%]  p-[20px] md:p-[30px]'>
                        <h1 className='text-2xl md:text-3xl font-semibold'>{serviceType.title}</h1>
                        <p className='mt-[50px] md:mt-[100px] text-gray-300/80 text-sm'> {serviceType.desc}</p>
                    </div>

                    <div>
                        <Image src={serviceType.image} alt='bg' width={1000} height={1000} className='h-[230px] md:h-[300px] w-[500px] bg-center flex-shrink-0 rounded-xl' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default ServiceCard
