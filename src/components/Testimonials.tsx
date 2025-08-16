import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { Roboto } from 'next/font/google'
import customer_icon_1 from "../../public/customer_icon_1.jpg"
import customer_icon_2 from "../../public/customer_icon_2.jpg"
import customer_icon_3 from "../../public/customer_icon_3.jpg"

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"]
})

const Testimonials = () => {
  return (
    <div className='relative'>
      <h1 className={`${roboto.className} text-3xl md:text-4xl lg:text-5xl md:leading-[54px] max-w-[800px] w-[100%] mt-[60px] md:mt-[80px] mb-[40px] md:mb-[80px]`}> Testimonials. </h1>
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
  )
}

export default Testimonials
