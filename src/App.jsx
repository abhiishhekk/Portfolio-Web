import React, {useState} from 'react';
import Nav from './components/Nav';
import './App.css'
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Projects from './components/Projects';
import Contact from './components/Contact';
import EmailCard from './components/EmailCard';
import Typewriter from './components/TypeWriter';
import Page22 from './components/Page22';
import { div } from 'motion/react-client';
function App() {
  const [firstDone, setFirstDone] = useState(false);
  const [helloText, setHelloText] = useState("");
  return (
    <>
      <Nav />
      <header className=" head w-svw md:pr-20 md:pl-20">
        <div className="main scroll-mt-20" id="main">
          <div className="main_page">
            <div id="developer">
              <div id="border_for_developer">
                <ul>
                  <li>Programmer</li>
                  <li id="dev">Developer</li>
                </ul>
              </div>
            </div>
            <div id='intro' className='md:text-[12svh] text-[9svh]'> Hello I'm</div>
            <div id='intro' className='md:text-[12svh] text-[9svh]'> Abhishek Kumar</div>
            <div id="intro_description" className='font-serif'>
              I'm Abhishek Kumar, a B.Tech Computer Science student at NIT Allahabad, actively exploring web development and data structures & algorithms. I enjoy building user-friendly interfaces, optimizing problem-solving skills, and constantly learning new tools and technologies.
            </div>
            <div id="resume" className=''>
              <div id="flex_for_resume" className='box-content mt-6'>
                <a href="https://drive.google.com/file/d/1aKD6RHP9UrugtxX3RgNqRIVueKA0o8d0/view?usp=drive_link">
                  Download my resume
                  <i
                    className="fa-regular fa-file ml-2"
                    style={{ color: '#000000', backgroundColor: 'white', boxSizing: 'content-box', borderRadius: '1rem' }}
                  ></i>
                </a>
              </div>
            </div>
            
          </div>
          
            <div className="images md:flex hidden">
              <div className="photo" id="img1">
                <img src="src/images/great.jpg" alt="img1" />
              </div>
              <div className="photo" id="img2">
                <img src="src/images/myphoto2.jpeg" alt="img2" />
              </div>
              <div className="photo" id="img3-4">
                <img src="src/images/tech.jpeg" alt="img3" id="img3" />
                <img src="src/images/myphotoback.jpeg" alt="img4" id="img4" />
              </div>
            </div>
          
        </div>
      </header>
      <hr id="hr" className='text-9xl mt-10'/>
      <Page22/>
      {/* <div id="edu">Education</div> */}
      <hr id="hr" />

      <Page3/>

      <hr id="hr" className='text-9xl'/>
      <Projects/>

      <hr id="hr" className='text-9xl'/>
      <Contact/>
      <hr id="hr" className='text-9xl'/>
      
    </>
  );
}

export default App; 