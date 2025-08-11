// Local API for projects details
import background_image_1 from "../public/bg-image1.jpg"
import background_image_2 from "../public/bg-image2.jpg"
import background_image_3 from "../public/bg-image3.jpg"
import genpod_image from "../public/genpod-ai_image.png"
import portfolio_image from "../public/portfolio_image.png"
import diabease_image from "../public/diabease_image.png"
import { StaticImageData } from "next/image"

export interface ProjectDetail {
    id: string,
    name: string;
    date: string;
    author: string;
    live_link: string;
    github_link: string;
    img: StaticImageData;
    background_banner: StaticImageData;
    description: string;
    tags: string[];
}

export const projectDetails = [
    {
        id: "4962fb59-783e-485c-8d12-2bfcc9e581ca",
        name: "GenPod AI",
        date: "June 17, 2025",
        author: "Danish Khan",
        live_link: "https://genpod-ai.vercel.app/",
        github_link: "https://github.com/danish-khan962/GenPod-AI",
        img: genpod_image ,
        background_banner: background_image_1,
        description: "GenPod AI is a web application that enables users to create fully AI-generated podcasts from simple text prompts. It offers customizable host styles, adjustable episode settings, and an instant preview of both transcript and audio. Using the ElevenLabs API, it generates natural, human-like voiceovers, while Cloudinary handles secure audio storage. The frontend is built with React and Wavesurfer.js for smooth audio playback, and the backend is powered by Node.js and Express. Designed for efficiency and creativity, GenPod AI provides an end-to-end solution for content creators, making professional-quality podcast production accessible without the need for recording equipment or editing skills.",
        tags: [
            "AI Podcast Generator",
            "Text-to-Speech",
            "React",
            "ElevenLabs"
        ]
    },
    {
        id: "bf7d875b-1a0f-4ebd-8db4-74a7e983308c",
        name: "Portfolio",
        date: "August 8, 2025",
        author: "Danish Khan",
        live_link: "https://danishkhan9625.vercel.app/",
        github_link: "https://github.com/danish-khan962/Portfolio",
        img: portfolio_image,
        background_banner: background_image_2,
        description: "My Portfolio is a modern personal website built with Next.js and styled using Acertainity UI, designed to showcase my projects, skills, and experience in a clean and professional layout. It features a responsive design for optimal viewing across devices, smooth navigation, and well-structured project sections with live links and GitHub repositories. The site includes an integrated project details API for dynamic content updates, making it easy to maintain and expand as my work grows. With a focus on performance, accessibility, and aesthetics, this portfolio serves as a central hub for my professional presence and demonstrates my capabilities in modern web development.",
        tags: [
            "Next.js",
            "Acertainity UI",
            "Personal Portfolio",
            "Responsive Design"
        ]
    },
    {
        id: "8f278f43-5fe3-4c80-a3de-e044bfbe73d7",
        name: "Diabease",
        date: "Feburary 25, 2025",
        author: "Danish Khan",
        live_link: "https://diabease-systems.vercel.app/",
        github_link: "https://github.com/danish-khan962/DiabEase",
        img: diabease_image,
        background_banner: background_image_3,
        description: "Diabease is a diabetes prediction web application designed to assess whether a user is likely to have diabetes based on key medical inputs. The frontend is built using React, offering a smooth and responsive user experience, while the backend is powered by Django, which hosts and serves the machine learning model responsible for making predictions. This system integrates healthcare data processing with intelligent analytics, making it a useful tool for early risk detection. Diabease focuses on usability, performance, and accuracy, providing real-time results in a clean and accessible interface.",
        tags: [
            "Machine Learning",
            "UI",
            "Django",
            "Healthcare"
        ]
    },
]