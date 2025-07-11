import React from 'react'
import ThemeToggle from './ThemeToggle'
import { useSelector } from 'react-redux'
function Nav() {
    const theme = useSelector(state => state.theme.theme);
  return (
    <nav className="nav_items bg-white shadow-lg min-w-full  dark:bg-[#313233]">
        <div id = "nav_left" className='dark:text-[#a34ce4]'>
            Portfolio
        </div>
        <div id = "between" className='md:flex hidden justify-center items-center'>
            <ul>
                <li><a href="#main">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Qualification</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <div className='flex gap-2 items-center justify-center'>
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
