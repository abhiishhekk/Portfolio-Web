import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import './App.css'
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Page22 from './components/Page22';
import PathIndicator from './components/PathIndicator';
import Header from './components/Header';

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

    <div className={`theme === 'dark'? 'dark' : '' dark:bg-[#212020] dark:text-white` }>

      <Nav />
      <PathIndicator />
      
      <Header />
      <div className='relative'>
        
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
      </div>
  );
}

export default App; 