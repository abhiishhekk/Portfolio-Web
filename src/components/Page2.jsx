import React from 'react'
import useScrollReveal from '../hooks/scrollReveal';
import SkillsCard from './SkillsCard';
import cLogo from '../assets/cLogo.png'
import htmlLogo from '../assets/htmlLogo.png'
import jsLogo from '../assets/jsLogo.png'
import reactLogo from '../assets/reactLogo.png'
import viteLogo from '../assets/viteLogo.png'
import cssLogo from '../assets/viteLogo.png'
import gitLogo from '../assets/gitLogo.png'
import cplusLogo from '../assets/cplusLogo.png'
import dsaLogo from '../assets/dsaLogo.png'
import {motion} from 'motion/react'
import { useSelector } from 'react-redux';
function Page2() {
    const theme = useSelector(state => state.theme.theme);
    useScrollReveal('.reveal-right', { origin: 'left' }, [theme]);
    useScrollReveal('.reveal-left', { origin: 'right' }, [theme]);
    useScrollReveal('.reveal-bottom', { origin: 'bottom' }, [theme]);

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
        {icon: dsaLogo, title:'Vite', level:'Intermediate'}
    ]
        
  return (
    <div id='skills' className='relative pt-30 pb-64 min-w-full'>
        <div  className='skills-text justify-self-center '>Skills</div>
        <motion.div className='skills-logo-box grid md:grid-cols-2 grid-cols-1  md:gap-8 p-4  md:mr-[12rem] md:ml-[12rem]  rounded-4xl'
                initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
                whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                transition={{ duration:0.6, ease: "linear" }}
                viewport={{ once: true, amount: 0.2 }}
        >
            {/* <div>Developer Skills</div> */}
            <motion.div className='reveal-bottom grid grid-cols-3 grid-rows-2 gap-y-16 bg-[#7CFC00] p-6 rounded-4xl'
                whileHover={{scale:1.029,
            boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
            
            >
                {developerSkills.map((skills, id)=>(
                    <div className='skill-logos flex flex-col items-center justify-center'>
                        <SkillsCard key={id} {...skills} />
                    </div>
                ))}
            </motion.div>
            <motion.div className='reveal-bottom grid grid-cols-3 grid-rows-2 md:p-0 pt-[4rem] gap-y-16 bg-[#7CFC00] p-6 rounded-4xl'
                whileHover={{scale:1.029,
            boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
            >
                {programmerSkills.map((skills, id)=>(
                    <div  className='skill-logos flex flex-col items-center justify-center'>
                        <SkillsCard key={id} {...skills} />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Page2