import React from 'react'
import ThemeToggle from './ThemeToggle'
import { useSelector } from 'react-redux'
import { div } from 'motion/react-client';
function Nav() {
    const theme = useSelector(state => state.theme.theme);
  return (
   
        <nav className="nav_items  bg-white shadow-lg min-w-full  dark:bg-black/20 backdrop-blur-xl pl-[2%] pr-[2%] flex items-center justify-between h-[8svh] overflow-x-hidden overflow-y-auto fixed z-[5] w-full">
        <div id = "nav_left" className='dark:text-[#a34ce4]'>
            Portfolio
        </div>
        <div id = "between" className='md:flex hidden justify-center items-center'>
            <ul>
                <li><a href="#main">Home</a></li>
                <li><a href="#about-me">About Me</a></li>
                
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <div className='flex lg:gap-2 gap-0.5 items-center justify-center'>
            <div>
                <ThemeToggle />
            </div>
            <div id="nav_right" className='flex flex-row-reverse justify-between content-center'>
            <a href="#contact" id='arrowUsed' className='dark:text-[#a34ce4]'>Contact
                <span class="material-symbols-outlined flex items-center content-center"> arrow_right_alt</span>
            </a>
        </div>
        </div>
        </nav>
  )
}

export default Nav
