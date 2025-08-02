import React, {useRef} from 'react'
import {motion, useMotionTemplate, useScroll, useTransform} from 'motion/react'
import '../../src/App.css'
import great from '../images/great.jpg'
import myphotoback from '../images/myphotoback.jpeg'
import tech from '../images/tech.jpeg'
import myphoto2 from '../images/myphoto2.jpeg'


function Header() {
  const ref = useRef(null);
    const {scrollY, scrollYProgress} = useScroll({target:ref, offset: ["start end", "end start"]});
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
    // const clip1 = useTransform(scrollYProgress, [0, 1], [0, 25]);
    // const clip2 = useTransform(scrollYProgress, [0, 1], [100, 75]);

    const topMV    = useTransform(scrollYProgress, [0, 1], [0, 25]);
const rightMV  = useTransform(scrollYProgress, [0, 1], [0, 25]);
const bottomMV = useTransform(scrollYProgress, [0, 1], [0, 25]);
const leftMV   = useTransform(scrollYProgress, [0, 1], [0, 25]);
const clipPath = useMotionTemplate`inset(${topMV}% ${rightMV}% ${bottomMV}% ${leftMV}% round 8px)`;
const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  return (

    <motion.header ref={ref}  className="head w-svw lg:pr-20 lg:pl-20  h-[200svh]"
      
    >
      
        <motion.div  id="main" className="main scroll-mt-[200svh] min-w-full sticky top-40 backdrop-blur-xl" 
          style={{ opacity, scale }}
          
        >
          <motion.div className="main_page -mt-7 sm:mt-0"
          >
            <div className='flex flex-col justify-end items-start'>
            <motion.div id="developer"
              initial={{ opacity: 0, x: 0, y: 100 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ duration:0.9, type: "spring", stiffness: 170 }}
              viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
            >
              <div id="border_for_developer" className='dark:text-[#864ab2] dark:border-[#864ab2]'>
                <ul>
                  <li>Programmer</li>
                  <li id="dev">Developer</li>
                </ul>
              </div>
            </motion.div>

            <div style={{perspective: "1000px"}} className='flex flex-col justify-center items-start'>
              <motion.div id='intro' className='lg:text-[12svh] text-[9svh] dark:text-white'
              initial={{ opacity: 0, x: -100, y: 0, rotateZ:-50, rotateX:-50}}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0, rotateZ:0, rotateX:0}}     // to original position
              transition={{ 
                x:{duration:0.6, ease: "linear"},
                opacity: {duration:0.6, delay:0.3, ease:"linear"},
               }}
               style={{perspective: "1000px"}}
              viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
            > Hello, I'm</motion.div> </div>
            <motion.div id='intro' className='lg:text-[12svh] text-[9svh]'
              initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{
                 x:{duration:0.9, ease: "linear"},
                 opacity: {duration:0.9, delay:0.45, ease:"linear"},
                }}
              viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
            > Abhishek Kumar</motion.div>
            </div>
            <div className='flex flex-col gap-2'>
            <motion.div id="intro_description" className='font-serif dark:text-[#afb0b6]'
              initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ 
                x:{duration:1.2, ease: "linear"},
                opacity:{duration:1.2, delay:0.6, ease:"linear"}
             }}
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
          
            <motion.div id='images' className=" xl:flex hidden xl:dark:bg-[#100f0f] mr-9"
              
            >
              <motion.div className="photo" id="img1"
                
              >
                <motion.img src={great} alt="img1" 
                style={{opacity: opacity2, clipPath, scale: zoom}} 
                    initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
                whileInView={{ opacity: [0, 1, 0.2, 1, 0, 1, 0.75, 0, 1, 0.25, 0.75], x: 0, y: 0 }}     // to original position
                transition={{ 
                x:{duration:1, ease: "anticipate", delay:1},
                opacity:{duration:0.8, delay:1, ease:"anticipate", times: [0, 0.1, 0.25, 0.30, 0.39, 0.45, 0.59, 0.70, 0.85, 1]}
             }}
              viewport={{ once: true, amount: 0.2 }} 
                />
              </motion.div>
              <motion.div className="photo" id="img2"
                
              >
              <motion.img src={myphoto2} alt="img2"
              style={{opacity: opacity2, clipPath, scale: zoom }} 
              initial={{ opacity: 0, x: 0, y: 100 }}       // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ 
                y:{duration:1.2, ease: "anticipate"},
                opacity:{duration:0.8, delay:0.2, ease:"easeInOut"}
             }}
              viewport={{ once: true, amount: 0.2 }}
              />
              </motion.div>
              {/* <div className="photo" id="img3-4">
                <motion.img src={tech} alt="img3" id="img3"
                  initial={{ opacity: 0, x: 100, y: 0 }}       // from bottom-right
                  whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                  transition={{ 
                  x:{duration:1.2, ease: "anticipate", delay:1.2,},
                  opacity:{duration:0.8, delay:1.2, ease:"easeInOut",}

                  }}
                  viewport={{ once: true, amount: 0.2 }}  
                />
                <motion.img src={myphotoback} alt="img4" id="img4"
                  initial={{ opacity: 0, x: 100, y: 0 }}       // from bottom-right
                  whileInView={{ opacity: [0, 1, 0.2, 1, 0, 2, 0.75, 0, 1, 0.25, 0.75], x: 0, y: 0 }}     // to original position
                  transition={{ 
                  x:{duration:1.2, ease: "anticipate", delay:1.4,},
                  opacity:{duration:2.5, delay:1.2, ease:"anticipate", times: [0, 0.1, 0.25, 0.30, 0.39, 0.45, 0.59, 0.70, 0.80, 0.9, 1],}
                  }}
                  viewport={{ once: true, amount: 0.2 }}  
                />
              </div> */}
            </motion.div>
          
        </motion.div>
      </motion.header>
  )
}

export default Header