import React from 'react'
import {motion} from 'motion/react'
import { useSelector } from 'react-redux'
function EducationCard({heading, line2, duration}) {
    const theme = useSelector(state => state.theme.theme);
  return (
    <motion.div className='flex flex-col m-3 gap-2'
      whileHover={{
        scale:1.04,

      }}
      transition={{ type: "spring", stiffness: 250 }}
    >
        <div className='text-2xl font-medium font-serif'>
            {heading}
        </div>
        <div className='font-serif opacity-60'>
            {line2}
        </div>
        <div className='font-serif opacity-60'>
            {duration}
        </div>
    </motion.div>
  )
}

export default EducationCard