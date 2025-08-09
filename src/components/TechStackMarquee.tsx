import React from 'react'
import Marquee from 'react-fast-marquee'
import MarqueeCard from './MarqueeCard'
import {
  SiTensorflow,
  SiKeras,
  SiReact,
  SiTypescript,
  SiNextdotjs, SiTailwindcss,
  SiPython,
  SiGithub,
  SiGooglecolab,
  SiJupyter,
  SiJavascript,
  SiMysql,
  SiCplusplus,
  SiGit,
} from 'react-icons/si'

const techStack = [
  { icon: <SiTensorflow />, name: "Tensorflow" },
  { icon: <SiKeras />, name: "Keras" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiTypescript />, name: "Typescript" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "Github" },
  { icon: <SiGooglecolab />, name: "Google Colab" },
  { icon: <SiJupyter />, name: "Jupyter Notebook" },
]


const TechStackMarquee = () => {
  return (
    <div className='w-full my-[60px] md:my-[80px]'>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
      >
        {techStack.map((tech, index) => (
          <div className='mr-3' key={index}>
            <MarqueeCard icon={tech.icon} name={tech.name} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default TechStackMarquee
