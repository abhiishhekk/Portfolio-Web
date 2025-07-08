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
    <div ref={container} className='projects mt-20'>

        <div id='skills' className='-scroll-mt-30 projects-text reveal-bottom justify-self-center '>SKills</div>
        <div className='relative' >
            {skills.map((proj, i) => {
                const targetScale = 1 - ((skills.length - i) * 0.05);
                return (<Skills2card key={proj.id} i={i} {...proj} progress={scrollYProgress} range={[i*0.25, 1]} targetScale={targetScale}/>)
        })}
        </div>
    </div>
  )
}

export default Page22