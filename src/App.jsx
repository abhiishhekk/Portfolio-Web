import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import './App.css'


import Projects from './components/Projects';
import Contact from './components/Contact';
import PathIndicator from './components/PathIndicator';
import Header from './components/Header';
import About from './components/About';
import { useSelector } from 'react-redux';
function App() {
  const theme = useSelector(state => state.theme.theme);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (

    <div className={`theme === 'dark'? 'dark' : '' dark:bg-[#100f0f]` }>

      <Nav />
      <PathIndicator />
      
      <Header />
      <About/>
      <div className='flex items-center justify-center'>
        
          {/* <hr id="hr" className='text-9xl mt-10 dark:hidden'/> */}
        
        {/* <div id="edu">Education</div> */}
        {/* <hr id="hr" className='dark:hidden' /> */}
        {/* <Page3/> */}

        {/* <hr id="hr" className='text-9xl dark:hidden'/> */}
        <Projects/>

        {/* <hr id="hr" className='text-9xl dark:hidden'/> */}
        
        {/* <hr id="hr" className='text-9xl dark:hidden'/> */}
        </div>
        <Contact/>
        <div className='h-20 md:h-0'></div>
      </div>
  );
}

export default App; 