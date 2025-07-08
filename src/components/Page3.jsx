import React from 'react'
import rulerPencilIcon from '../assets/rulerPencilIcon.svg'
import EducationCard from './EducationCard'
import useScrollReveal from '../hooks/scrollReveal';
import {motion} from 'motion/react'

function Page3() {
    useScrollReveal('.reveal-right', { origin: 'left' });
    useScrollReveal('.reveal-left', { origin: 'right' });
    useScrollReveal('.reveal-bottom', { origin: 'bottom' });
  const edCards = [
    {heading: "B.Tech in Computer Science", line2:"Motilal Nehru National Institute of Technology Allahabad, Prayagraj", duration:"(2023-2027)"},
    {heading: "Senior Secondary", line2:"Nardiganj College, Nardiganj", duration:"(2022-2023)"},
    {heading: "Matriculation", line2:"Gyan Bharti Model Residential Complex, Dhanwan, Hisua", duration:"2020"},
  ]
  return (
    <div id='education' className='scroll-mt-20 education mt-30 mb-40'>
      <div className='reveal-bottom qualification-text justify-self-center'>Qualification</div>
      <div className='qualification-box grid md:grid-cols-2 grid-rows-1 grid-cols-1'>
        
        <motion.div className=' flex flex-col items-center content-center  bg-[#7CFC00] md:ml-8 rounded-4xl md:pb-8 md:pt-4'

          whileHover={{scale:1.029,
            boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <div className='reveal-bottom education-text flex gap-x-2 my-10'>
            <img src={rulerPencilIcon} alt="" />
            Education
          </div>
          <div className='reveal-bottom grid grid-cols-1 grid-rows-3'>
            {
              edCards.map((eds, id)=>(
                <div className='reveal-bottom' key={id}>
                 <EducationCard  {...eds}/>
                </div>
              ))
            }
          </div>
        </motion.div>

        {/* <div className='grid grid-cols-1 grid-rows-3'></div> */}

      </div>
    </div>
  )
}

export default Page3