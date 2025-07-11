import React, {useRef, useState, useEffect} from 'react'
import {motion, useScroll, useTransform} from 'motion/react'
import SkillsCard from './SkillsCard';
import cLogo from '../assets/cLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import reactLogo from '../assets/reactLogo.png'
import viteLogo from '../assets/viteLogo.png'
import cssLogo from '../assets/cssLogo.png'
import gitLogo from '../assets/gitLogo.png'
import cplusLogo from '../assets/cplusLogo.png'
import dsaLogo from '../assets/dsaLogo.png'
import { useSelector } from 'react-redux';

function Skills2card({i, id, skillType, bgCol ,progress, range, targetScale}) {
    const developerSkills = [
            {icon: htmlLogo, title:'HTML', level:'Intermediate'},
            {icon: cssLogo, title:'CSS', level:'Intermediate'},
            {icon: jsLogo, title:'JavaScript', level:'Intermediate'},
            {icon: reactLogo, title:'React', level:'Intermediate'},
            {icon: viteLogo, title:'Vite', level:'Intermediate'},
            {icon: gitLogo, title:'Git', level:'Intermediate'}
        
        ]
    
    const programmerSkills = [
            {icon: cplusLogo, title:'C++', level:'Intermediate'},
            {icon: cLogo, title:'C', level:'Intermediate'},
            {icon: dsaLogo, title:'DSA', level:'Intermediate'}
    ]
  
  const container = useRef(null);
  const {scrollYProgress}  = useScroll({
    target:container,
    offset: ['start end', 'start start'],

})
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const scale = useTransform(progress, range, [1, targetScale])
  const topOffset = `${i*1.8}rem`;

  const theme = useSelector(state => state.theme.theme);
  if(theme === "dark") bgCol = "#3a3a3a";
  return (
    <div ref={container} className='h-dvh md:w-[50rem] flex justify-center items-center justify-self-center mt-0 sticky top-0 pt-0 overflow-x-hidden md:overflow-x-visible'
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
        className='md:w-[50rem] md:h-[30rem] flex justify-center items-center rounded-4xl p-6'
        >
            
          <motion.div className='flex justify-center items-center flex-col  rounded-4xl gap-[4rem] md:w-[30rem] md:h-[18] m-5'
                
            >
                {skillType=="programmerSkills" && <div className='font-serif text-3xl'> Programming Skills</div> }
                {skillType == "programmerSkills" &&
                    <div className='grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-[9rem]'>
                        {skillType=="programmerSkills" && programmerSkills.map((skills, id)=>(
                            <motion.div className='skill-logos flex flex-col items-center justify-center '
                              initial={{ opacity: 0, x: 0, y: 100 }}       
                              whileInView={{ opacity: 1, x: 0, y: 0 }}   
                              transition={{ duration:0.6 + 0.4, ease: "easeInOut" }}
                              viewport={{ once: true, amount: 0.2 }}
                            >
                                <SkillsCard key={id} {...skills} />
                            </motion.div>
                        ))}
                    </div>
                }

                {skillType=="developerSkills" && <div className='font-serif text-3xl '> Developing Skills</div> }
                {skillType == "developerSkills" &&
                    <div className='grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-[9rem]'>
                        {skillType=="developerSkills" && developerSkills.map((skills, id)=>(
                            <motion.div className='skill-logos flex flex-col items-center justify-center '
                              initial={{ opacity: 0, x: 0, y: 100 }}       
                              whileInView={{ opacity: 1, x: 0, y: 0 }}   
                              transition={{ duration:0.6 + 0.4, ease: "easeInOut" }}
                              viewport={{ once: true, amount: 0.2 }}
                            >
                                <SkillsCard key={id} {...skills} />
                            </motion.div>
                        ))}
                    </div>
                }
                

            </motion.div>
      </motion.div>

      </motion.div>
      
      
      
    </div>
  )
}

export default Skills2card