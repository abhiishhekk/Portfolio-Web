import React from 'react'
import EmailCard from './EmailCard'
import useScrollReveal from '../hooks/scrollReveal';
import {motion} from 'motion/react'
import EmailSent from './EmailSent';
function Contact() {
    useScrollReveal('.reveal-right', { origin: 'left' });
    useScrollReveal('.reveal-left', { origin: 'right' });
    useScrollReveal('.reveal-bottom', { origin: 'bottom' });
  return (
    <div id='contact' className='reveal-bottom h-screen md:mt-0 mt-30 grid md:grid-cols-2 grid-cols-1 grid-rows-1 justify-self-center items-center gap-40'>
        <motion.div className='flex md:h-[35rem] w-[22rem] h-[15rem]  md:w-[25rem] flex-col gap-20 justify-center items-center border-2 rounded-4xl justify-self-center'
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
                <a href="https://github.com/abhiishhekk" className="icon github">
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
        <motion.div className='flex min-h-[35rem] md:w-[25rem] w-[22rem] flex-col gap-5 justify-self-center justify-center items-center border-2 rounded-4xl md:mt-0 bg-green-400'
          whileHover={{scale:1.029,
            boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
            <div className='text-3xl font-serif'>
                Send me a message!
            </div>
            <EmailCard/>
        </motion.div>
        {/* <EmailSent/> */}
    </div>
  )
}

export default Contact