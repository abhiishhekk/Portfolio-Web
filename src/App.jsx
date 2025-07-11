import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import './App.css'
import {motion} from 'motion/react'
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Projects from './components/Projects';
import Contact from './components/Contact';
import EmailCard from './components/EmailCard';
import Typewriter from './components/TypeWriter';
import Page22 from './components/Page22';
import { div } from 'motion/react-client';
import great from './images/great.jpg'
import myphotoback from './images/myphotoback.jpeg'
import tech from './images/tech.jpeg'
import myphoto2 from './images/myphoto2.jpeg'

import { useSelector } from 'react-redux';
function App() {
  const [firstDone, setFirstDone] = useState(false);
  const [helloText, setHelloText] = useState("");
  const theme = useSelector(state => state.theme.theme);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (

    <div className={`theme === 'dark'? 'dark' : '' dark:bg-[#212020] dark:text-white`}>
      <Nav />
      <header className=" head w-svw lg:pr-20 lg:pl-20 b">
        <div className="main scroll-mt-20 min-w-full" id="main" >
          <motion.div className="main_page"
            
          >
            <div className='flex flex-col justify-end items-start'>
            <motion.div id="developer"
              initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ duration:0.3, ease: "linear" }}
              viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
            >
              <div id="border_for_developer" className='dark:text-[#864ab2] dark:border-[#864ab2]'>
                <ul>
                  <li>Programmer</li>
                  <li id="dev">Developer</li>
                </ul>
              </div>
            </motion.div>

            <motion.div id='intro' className='lg:text-[12svh] text-[9svh] dark:text-white'
              initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ duration:0.6, ease: "linear" }}
              viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
            > Hello I'm</motion.div> </div>
            <motion.div id='intro' className='lg::text-[12svh] text-[9svh]'
              initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ duration:0.9, ease: "linear" }}
              viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
            > Abhishek Kumar</motion.div>
            <div className='flex flex-col gap-2'>
            <motion.div id="intro_description" className='font-serif'
              initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ duration:1.2, ease: "linear" }}
              viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
            >
              A B.Tech Computer Science student at NIT Allahabad, actively exploring web development and data structures & algorithms. I enjoy building user-friendly interfaces, optimizing problem-solving skills, and constantly learning new tools and technologies.
            </motion.div>
            <div id="resume" className='box-content'>
              <div id="flex_for_resume" className='box-content mt-6'>
                <a href="https://drive.google.com/file/d/1JKVU9VQTmsW7S29eG-BAg0qPJje9BrL-/view?usp=sharing">
                  Download my resume
                  <i
                    className="fa-regular fa-file ml-2"
                    style={{ color: '#000000', backgroundColor: 'white', boxSizing: 'content-box', borderRadius: '1rem' }}
                  ></i>
                </a>
              </div>
            </div>
            </div>
          </motion.div>
          
            <div id='images' className=" xl:flex hidden xl:dark:bg-[#212020]">
              <div className="photo" id="img1">
                <img src={great} alt="img1" />
              </div>
              <div className="photo" id="img2">
                <img src={myphoto2} alt="img2" />
              </div>
              <div className="photo" id="img3-4">
                <img src={tech} alt="img3" id="img3" />
                <img src={myphotoback} alt="img4" id="img4" />
              </div>
            </div>
          
        </div>
      </header>
      <hr id="hr" className='text-9xl mt-10 dark:hidden'/>
      <Page22/>
      {/* <div id="edu">Education</div> */}
      <hr id="hr" className='dark:hidden' />
      <Page3/>

      <hr id="hr" className='text-9xl dark:hidden'/>
      <Projects/>

      <hr id="hr" className='text-9xl dark:hidden'/>
      <Contact/>
      <hr id="hr" className='text-9xl dark:hidden'/>
      
    </div>
  );
}

export default App; 