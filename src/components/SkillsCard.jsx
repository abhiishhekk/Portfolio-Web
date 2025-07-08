import React from 'react'
import {motion} from 'motion/react'
function SkillsCard({icon, title, level}) {
  return (
    <motion.div className='flex flex-col items-center text-center gap-2 w-17 h-32'>
        <motion.div className='bg-gray-100 rounded-3xl p-2'
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
            <img src={icon} alt={title} />
        </motion.div>
        <div className='font-medium font-serif'>
            {title}
        </div>
        <div className='text-sm text-gray-500'>
            {level}
        </div>
    </motion.div>
  )
}

export default SkillsCard