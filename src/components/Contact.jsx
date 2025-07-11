import React from 'react'
import EmailCard from './EmailCard'
import useScrollReveal from '../hooks/scrollReveal';
import {motion} from 'motion/react'
import EmailSent from './EmailSent';
import { useSelector } from 'react-redux';
function Contact() {
    const theme = useSelector(state => state.theme.theme);
    useScrollReveal('.reveal-right', { origin: 'left' }, [theme]);
    useScrollReveal('.reveal-left', { origin: 'right' }, [theme]);
    useScrollReveal('.reveal-bottom', { origin: 'bottom' }, [theme]);

  return (
    <motion.div id='contact' className='h-screen md:mt-0 mt-30 grid md:grid-cols-2 grid-cols-1 grid-rows-1 justify-self-center items-center gap-40'
                initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
                whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                transition={{ duration:0.6, ease: "linear" }}
                viewport={{ once: true, amount: 0.2 }}  
    >
        <motion.div className='flex md:h-[35rem] w-[22rem] h-[15rem]  md:w-[25rem] flex-col gap-20 justify-center items-center border-2 rounded-4xl justify-self-center dark:bg-[#3a3a3a] dark:border-[#212020]'
          whileHover={{scale:1.029,
            boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
            <div className='text-3xl font-serif'>Let's Connect</div>
            <div id="social_icons">
              <div className="button">
                <a href="https://www.linkedin.com/in/abhishek-kumar-init/" className="icon linkedin">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <span id="linkedin"><a href="https://www.linkedin.com/in/abhishek-kumar-init/"> Linkedin</a></span>
              </div>
              <div className="button">
                <a href="https://github.com/abhiishhekk" className="icon github dark:text-black text-white">
                  <i className="fa-brands fa-github"></i>
                </a>
                <span id="github"><a href="https://github.com/abhiishhekk">Github</a></span>
              </div>
              <div className="button">
                <a href="https://www.instagram.com/abhiishhek_k/profilecard/?igsh=enc3MDg5MmFjY2d4" className="icon instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                
                <span id="instagram"><a href="https://www.instagram.com/abhiishhek_k/profilecard/?igsh=enc3MDg5MmFjY2d4">Instagram</a></span>
              </div>
              <div className="button">
                <a href="https://x.com/abhiishhek_k?t=C07HXAYPPPMG-To-LEA53g&s=09" className="icon twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <span id="twitter">
                  <a href="https://x.com/abhiishhek_k?t=C07HXAYPPPMG-To-LEA53g&s=09"> Twitter</a>
                </span>
                
              </div>
            </div>
        </motion.div>
        <motion.div className='flex min-h-[35rem] md:w-[25rem] w-[22rem] flex-col gap-5 justify-self-center justify-center items-center border-2 rounded-4xl md:mt-0 bg-green-400 dark:bg-[#3a3a3a] dark:border-[#212020]'
          whileHover={{scale:1.029,
            boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
            <div className='text-3xl font-serif '>
                Send me a message!
            </div>
            <EmailCard/>
        </motion.div>
        {/* <EmailSent/> */}
    </motion.div>
  )
}

export default Contact