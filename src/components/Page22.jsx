import React, {useRef} from 'react'
import Skills2card from './Skills2card';


import {motion, useScroll} from 'motion/react'
function Page22() {

    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset:[ 'start start', 'end end' ],
    })
    const skills = [
            {id:2, skillType:"programmerSkills", bgCol:"#DDA0DD"},
            {id:1,  skillType:"developerSkills", bgCol: "#00BFFF"},
            
        ]
  return (
    <div id='skills' ref={container} className='scroll-mt-[-8rem] projects mt-20'>

        <motion.div  className='projects-text justify-self-center'
            initial={{ opacity: 0, x: -100, y: 0 }}       
                  whileInView={{ opacity: 1, x: 0, y: 0 }}   
                  transition={{ duration:0.5, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.3 }}
        >Skills</motion.div>
        <div className='relative'>
            {skills.map((proj, i) => {
                const targetScale = 1 - ((skills.length - i) * 0.05);
                return (<Skills2card key={proj.id} i={i} {...proj} progress={scrollYProgress} range={[i*0.25, 1]} targetScale={targetScale}/>)
        })}
        </div>
    </div>
  )
}

export default Page22