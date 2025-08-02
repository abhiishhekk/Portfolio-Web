import { useState } from 'react';
import Globe from 'react-globe.gl';
import grid1 from '../assets/grid1.png'
import grid2 from '../assets/grid2.png'
import grid3 from '../assets/grid3.png'
import grid4 from '../assets/grid4.png'
import tick from '../assets/tick.svg'
import copy from '../assets/copy.svg'
import Button from './Button';
import CurveLine from '../assets/CurveLine.svg'
import {motion} from 'motion/react'
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('abhishekkumar.init@gmail.com');
    setHasCopied(true);
    console.log(hasCopied)
    setTimeout(() => {
      setHasCopied(false);
      console.log(hasCopied)
    }, 2400);
  };

  return (
    <section className=" -scroll-mt-12 max-w-screen md:mr-[6rem] md:ml-[6rem] mr-[2rem] ml-[2rem] min-h-[150svh] flex items-center justify-centern py-[10rem]" id="about-me">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 ">
        <motion.div className="xl:col-span-1 xl:row-span-3"
        
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid-container  border border-black-300 dark:bg-[#161616] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src={grid3} alt="grid-1" className="w-full sm:h-[19rem] h-fit object-contain sm:scale-150" />

            <div>
              <p className="grid-headtext text-xl font-semibold mb-2 text-white font-generalsans">My Passion for coding</p>
              <p className="grid-subtext text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-span-1 xl:row-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid-container w-full h-full border border-black-300 dark:bg-[#161616] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img src={grid2} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
              <p className="grid-subtext text-[#afb0b6] text-base font-generalsans">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-span-1 xl:row-span-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid-container w-full h-full border border-black-300 dark:bg-[#161616] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'New Delhi, India', color: 'white', size: 15 }]}
              />
            </div>
            <a href='#contact'>
              <div>
                <p className="grid-headtext text-xl font-semibold mb-2 text-white font-generalsans">I’m very flexible with time zone communications & locations</p>
                <p className="grid-subtext text-[#afb0b6] text-base font-generalsans">I&apos;m based in Bihar, India and open to remote work worldwide.</p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div className="xl:col-span-2 xl:row-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid-container w-full h-full border border-black-300 dark:bg-[#161616] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className=''>
                <div className='h-[150px] overflow-y-clip flex  justify-center'>
                    <img src={CurveLine} alt="grid-3" className="w-[100svw] sm:h-[200px] h-fit object-contain " />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
              <p className="grid-headtext text-xl font-semibold mb-2 text-white font-generalsans">Education</p>
              <p className="grid-subtext text-[#afb0b6] text-base font-generalsans">
                <h1 className='font-bold text-lg'>B.Tech. in Computer Science Engineering</h1>
                <p>Motilal Nehru National Institue of Technology Allahabad, Prayagraj, Uttar Pradesh</p>
              </p>
              <p className="grid-subtext text-[#afb0b6] text-base font-generalsans">
                <h1 className='font-bold text-lg'>Senior Secondary</h1>
                <p> Nardiganj College Nargiganj, Nardiganj, Bihar</p>
              </p>
              <p className="grid-subtext text-[#afb0b6] text-base font-generalsans">
                <h1 className='font-bold text-lg'>Matriculation</h1>
                <p>Gyan Bharti Model Residential Complex, Hisua, Bihar</p>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="xl:col-span-1 xl:row-span-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid-container w-full h-full border border-black-300 dark:bg-[#161616] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src={grid4}
              alt="grid-4"
              className="w-full md:h-[9rem] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2 h-full my-5">
              <p className="grid-subtext text-center dark:text-[#afb0b6] text-base font-generalsans">Contact me</p>
              <div className="copy-container cursor-pointer flex justify-center items-center gap-2 w-full h-full bg-black-200 rounded-lg sm:p-1 p-1" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy } alt="copy" />
                <p className="lg:text-l md:text-l font-medium text-gray_gradient dark:text-white">abhishekkumar.init@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;