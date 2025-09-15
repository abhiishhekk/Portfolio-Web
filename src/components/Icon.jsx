import React from 'react'
import viteLogo from '../assets/viteLogo.png'
import cLogo from '../assets/cLogo.png'
import cplusLogo from '../assets/cplusLogo.png'
import gitLogo from '../assets/gitLogo.png'
import cssLogo from '../assets/cssLogo.png'
import jsLogo from '../assets/jsLogo.png'
import mongodbLogo from '../assets/mongodbLogo.png'
import tailwindLogo from '../assets/tailwindLogo.png'
import { div } from 'motion/react-client';
const Icon = ({logo, text="icon"})=>{
    if(logo == "vite") logo = viteLogo;
    if(logo == "cplus") logo = cplusLogo;
    if(logo == "git") logo = gitLogo;
    if(logo == "css") logo = cssLogo;
    if(logo == "js") logo = jsLogo;
    if(logo == "c") logo = cLogo;
    if(logo == "mongodb") logo = mongodbLogo;
    if(logo == "tailwind") logo = tailwindLogo;

  return (
        <div className='lg:dark:bg-[#393838] lg:w-[7.2rem]   flex gap-1 px-3 rounded-2xl content-center items-center border-blue-600 py-0.5 justify-self-center'>
            <img src={logo} alt="" className='lg:h-[1.3rem] h-[1.5rem]'/>
            <p className='dark:text-white hidden lg:block'>{text}</p>
        </div>
  )
};

export default Icon