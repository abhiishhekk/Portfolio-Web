import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'motion/react'
import { useSelector } from 'react-redux';
function ProjectCardParallax({i, id, title, image, bgCol, link,  description ,progress, range, targetScale}) {
  
  const container = useRef(null);
  const {scrollYProgress}  = useScroll({
    target:container,
    offset: ['start end', 'start start'],

  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const scale = useTransform(progress, range, [1, targetScale])
  const topOffset = `${i*2}rem`;
  const theme = useSelector(state => state.theme.theme);
  if(theme==="dark") bgCol = "#3a3a3a";
  return (
    <div ref={container} className=' h-dvh md:w-[50rem] flex justify-center items-center justify-self-center mt-0 sticky top-0 pt-0 overflow-x-hidden md:overflow-x-visible'
    >
      <motion.div 
      className='flex flex-col relative origin-top'
      style={{
        top: topOffset,
        scale
      }}
      >

        <motion.div
        style={
        {
          backgroundColor: bgCol,
          opacity: scrollYProgress,
          scale:imageScale,
        }
        
        }
        className='md:w-[50rem] md:h-[30rem] flex justify-center items-center rounded-4xl p-6 overflow-x-hidden '
        >
          
          <div className='grid w-full h-fit md:grid-cols-2 grid-rows-1 gap-5 '>
            
            <div className='flex  flex-col justify-center items-center font-serif text-lg '>
              <div className='w-full rounded-4xl  p-4'>
                <motion.div
                className='mb-4 rounded-4xl border-2 w-fit pl-2 pr-2 dark:bg-[#a34ce4]'
                initial={{ opacity: 0, x: 0, y: 100 }}       // from bottom-right
                whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                transition={{ 
                  y:{duration:0.5, ease: "linear",},
                  opacity:{duration:0.4, ease:"anticipate", delay:0},
                 }}
                viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
                >
                  {title}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 100 }}       // from bottom-right
                whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                transition={{ 
                  y:{duration:0.6, ease: "linear", delay:0.2},
                  opacity:{duration:0.7, ease:"anticipate", delay:0.1},
                 }}
                viewport={{ once: true, amount: 0.2 }}       // only once, 20% visible
                >
                {description}
                </motion.div>
              </div>


              <motion.div className=' self-end mt-5 rounded-3xl dark:bg-[#a34ce4]'
                whileHover={{
                  scale : 1.1,
                }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <a href={link} target="_blank" rel="noopener noreferrer" className='arrowUsed border-2 rounded-3xl p-1 pr-3.5 pl-2 self-end flex '>
                  Take a look...
                  <span className='material-symbols-outlined flex items-center justify-center'>
                     arrow_right_alt
                  </span>
                </a>
              </motion.div>
              
            </div>

            <div className='md:flex hidden md:visible justify-center items-center flex-col'>
              <img src={image} alt={title} className='rounded-4xl' />
            </div>
            
          </div>

      </motion.div>

      </motion.div>
      
      
      
    </div>
  )
}

export default ProjectCardParallax