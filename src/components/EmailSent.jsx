import React from 'react'

import {motion, AnimatePresence} from 'motion/react'
import { div } from 'motion/react-client';
import { useSelector } from 'react-redux';
function EmailSent({show}) {
  const theme = useSelector(state => state.theme.theme);
  return (
    <div className='md:absolute z-20 w-[10rem]'>
        <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: +1000 }}
            animate={{ opacity: 1, x: 460 }}
            exit={{ opacity: 0, x: 460 }}
            transition={{ duration: 1 }}
            className="bg-green-500 text-white p-4 rounded-xl shadow-xl absolute z-10"
          >
            Email Sent!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EmailSent