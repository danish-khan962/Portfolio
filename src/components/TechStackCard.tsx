import React from 'react'
import { Ubuntu } from 'next/font/google'
import tensorflow_icon from "../../public/tensorflow_icon.png"
import keras_icon from "../../public/keras_icon.png"
import python_icon from "../../public/python_icon.png"
import cplusplus_icon from "../../public/cplusplus_icon.png"
import mysql_icon from "../../public/mysql_icon.png"
import nextjs_icon from "../../public/nextjs_icon.png"
import react_icon from "../../public/react_icon.png"
import js_icon from "../../public/js_icon.png"
import tailwind_icon from "../../public/tailwind_icon.png"
import ts_icon from "../../public/ts_icon.png"
import git_icon from "../../public/git_icon.png"
import github_icon from "../../public/github_icon.png"
import google_colab_icon from "../../public/google_colab_icon.png"
import jupyter_notebook_icon from "../../public/jupyter_icon.png"
import Image from 'next/image'

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["400"],
})

const techStackDetails = [
    { icon: tensorflow_icon, name: "Tensorflow" },
    { icon: keras_icon, name: "Keras" },
    { icon: python_icon, name: "Python" },
    { icon: cplusplus_icon, name: "C++" },
    { icon: mysql_icon, name: "MySQL" },
    { icon: nextjs_icon, name: "Next.js" },
    { icon: react_icon, name: "React.js" },
    { icon: js_icon, name: "JavaScript" },
    { icon: tailwind_icon, name: "Tailwind CSS" },
    { icon: ts_icon, name: "TypeScript" },
    { icon: git_icon, name: "Git" },
    { icon: github_icon, name: "Github" },
    { icon: google_colab_icon, name: "Google Colab" },
    { icon: jupyter_notebook_icon, name: "Jupyter Notebook" },
]

const TechStackCard = () => {
    return (
        <div className={`${ubuntu.className} max-w-[1150px] w-[100%] bg-blue-500/5 mb-[40px] md:mb-[80px] rounded-2xl grid grid-cols-2 p-[20px] gap-10 border-2 border-white/15`}>

            {techStackDetails.map((item, index) => (
                <div className='flex flex-row gap-x-3 items-center' key={index}>
                    <Image src={item.icon} alt={item.name} height={1000} width={1000} className='w-[35px] h-[35px]' />
                    <p className='text-[14px] font-medium text-white/80'> { item.name } </p>
                </div>
            ))}

        </div>
    )
}

export default TechStackCard
