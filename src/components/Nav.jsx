import React from 'react'

function Nav() {
  return (
    <nav className="nav_items shadow-lg w-dvw">
        <div id = "nav_left">
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
        <div id="nav_right" className='flex flex-row-reverse justify-between content-center'>
            <a href="#contact" className='arrowUsed'>Contact me
                <span class="material-symbols-outlined flex items-center content-center"> arrow_right_alt</span>
            </a>
            
        </div>
    </nav>
  )
}

export default Nav
