import React from 'react'
import rulerPencilIcon from '../assets/rulerPencilIcon.svg'
import EducationCard from './EducationCard'
import useScrollReveal from '../hooks/scrollReveal';
import {motion} from 'motion/react'
import { useSelector } from 'react-redux';

function Page3() {
    const theme = useSelector(state => state.theme.theme);
    useScrollReveal('.reveal-right', { origin: 'left' }, [theme]);
    useScrollReveal('.reveal-left', { origin: 'right' }, [theme]);
    useScrollReveal('.reveal-bottom', { origin: 'bottom' }, [theme]);
  const edCards = [
    {heading: "B.Tech in Computer Science", line2:"Motilal Nehru National Institute of Technology Allahabad, Prayagraj", duration:"(2023-2027)"},
    {heading: "Senior Secondary", line2:"Nardiganj College, Nardiganj", duration:"(2022-2023)"},
    {heading: "Matriculation", line2:"Gyan Bharti Model Residential Complex, Dhanwan, Hisua", duration:"2020"},
  ]
  return (
    <div id='education' className='scroll-mt-20 education mt-30 mb-40 flex flex-col items-center justify-center'>
      <motion.div className='qualification-text justify-self-center'
                initial={{ opacity: 0, x: -100, y: 0 }}       // from bottom-right
                whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                transition={{ duration:0.6, ease: "linear" }}
                viewport={{ once: true, amount: 0.2 }}
      >Qualification</motion.div>
      <div className='md:w-[50rem] md:h-[32rem] qualification-box grid  grid-rows-1 grid-cols-1'>
        
        <motion.div className=' flex flex-col items-center content-center  bg-[#7CFC00] rounded-4xl pb-8 md:pt-4 dark:bg-[#3a3a3a]'

          whileHover={{scale:1.029,
            boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <motion.div className=' education-text flex gap-x-2 my-10'
            initial={{ opacity: 0, x: 0, y: 100 }}       // from bottom-right
                whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                transition={{ duration:0.6, ease: "linear" }}
                viewport={{ once: true, amount: 0.2 }}
          >
            <img src={rulerPencilIcon} alt="" />
            Education
          </motion.div>
          <motion.div className=' grid grid-cols-1 grid-rows-3'
            initial={{ opacity: 0, x: 0, y: 100 }}       // from bottom-right
                whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                transition={{ duration:0.6, ease: "linear" }}
                viewport={{ once: true, amount: 0.2 }}
          >
            {
              edCards.map((eds, id)=>(
                <motion.div className='' key={id}
                  initial={{ opacity: 0, x: 0, y: 100 }}       
                  whileInView={{ opacity: 1, x: 0, y: 0 }}   
                  transition={{ duration:0.6 + 0.4*id, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                 <EducationCard  {...eds}/>
                </motion.div>
              ))
            }
          </motion.div>
        </motion.div>

        {/* <div className='grid grid-cols-1 grid-rows-3'></div> */}

      </div>
    </div>
  )
}

export default Page3