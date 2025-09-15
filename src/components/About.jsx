import { useState } from 'react';
// import Globe from 'react-globe.gl';
// import grid1 from '../assets/grid1.png'
// import grid2 from '../assets/grid2.png'
// import grid3 from '../assets/grid3.png'
// import grid4 from '../assets/grid4.png'
import tick from '../assets/tick.svg'
import copy from '../assets/copy.svg'
import Button from './Button'
// import CurveLine from '../assets/CurveLine.svg'
import {motion} from 'motion/react'
import Icon from './Icon';
import mail from '../assets/mail.png'
import coding from '../assets/coding.png'
import programming from '../assets/programming.svg'
import location from '../assets/location.svg'
import education from '../assets/education.png'
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
    <section className="[content-visibility:auto] [contain:layout_style] -scroll-mt-12 max-w-screen md:mr-[4.5rem] md:ml-[4.5rem] mr-[2rem] ml-[2rem] min-h-[150svh] flex items-center justify-centern py-[10rem]" id="about-me">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 ">
        <motion.div className="xl:col-span-1 xl:row-span-3"
        
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid-container  border border-black-300 dark:bg-[#161616] bg-[#eaefee] rounded-lg sm:p-7 p-4 flex flex-col gap-5 h-full">
            <img src={programming} alt="grid-1" className="rounded-3xl" />

            <div>
              <p className="grid-headtext text-xl font-semibold mb-2 dark:text-white font-generalsans">My Passion for coding</p>
              <p className="grid-subtext dark:text-[#afb0b6] text-base font-generalsans">
                  I am a Computer Science undergraduate at MNNIT Allahabad with a strong foundation in DSA and OOP. I enjoy competitive programming and full-stack development, having solved 500+ problems on LeetCode and built scalable applications like TaskOrbit.
              </p>
              <div className='md:flex md:mt-2 md:gap-2'>
                {/* <div className='dark:bg-[#393838] pr-2 pl-2 py-1.5 rounded-3xl'>Leetcode</div> */}
                <Button name="Leetcode" logo="leetcode" containerClass="w-full md:mt-10 mt-5 rounded-md" link="https://leetcode.com/u/abhiishhek_k/"/>
                <Button name="Codeforces" logo="codeforces" containerClass="w-full md:mt-10 mt-5 rounded-md" link="https://codeforces.com/profile/abhiishhek_k"/>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-span-1 xl:row-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid-container w-full h-full border border-black-300 dark:bg-[#161616] bg-[#eaefee] rounded-lg  p-4 flex flex-col gap-5">
            <img src={coding} alt="grid-2" className="rounded-3xl object-contain"/>

            <div>
              <p className="grid-headtext text-xl font-semibold mb-2 dark:text-white font-generalsans">Tech Stack</p>
              <p className="grid-subtext dark:text-[#afb0b6] text-base font-generalsans">
                Skilled in C++, with experience in React, Node.js, Express, MongoDB, and Tailwind CSS. Familiar with Google Cloud, Appwrite, and Git, and comfortable building scalable full-stack applications.
              </p>
              <div className='grid lg:grid-cols-3 grid-cols-4 mt-10 gap-y-5'>
                <Icon logo="c" text="C"/>
                <Icon logo="cplus" text='c++'/>
                <Icon logo="git" text='Git'/>
                <Icon logo="vite" text='vite'/>
                <Icon logo="tailwind" text='Tailwind'/>
                <Icon logo="js" text='JS'/>
                <Icon logo="mongodb" text='Mongodb'/>
                <Icon logo="css" text='CSS'/>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-span-1 xl:row-span-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
        >
          <div className="[content-visibility:auto] [contain:layout_style] grid-container w-full h-full border border-black-300 dark:bg-[#161616] bg-[#eaefee] rounded-lg sm:p-7 p-4 flex flex-col gap-5 justify-center">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center -mt-5">
              {/* <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'New Delhi, India', color: 'white', size: 15 }]}
              /> */}
              <img src={location} alt="grid-1" className="rounded-3xl" />
            </div>
            <a href='#contact'>
              <div>
                <p className="grid-headtext text-xl font-semibold mb-2 dark:text-white font-generalsans">I’m very flexible with time zone communications & locations</p>
                <p className="grid-subtext dark:text-[#afb0b6] text-base font-generalsans">I&apos;m based in Bihar, India and open to remote work worldwide.</p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10 rounded-md" />
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div className="xl:col-span-2 xl:row-span-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid-container w-full h-full border border-black-300 bg-[#eaefee] dark:bg-[#161616] rounded-lg sm:p-7 p-4 flex flex-col justify-center gap-5">
            <div className=''>
                <div className='h-[150px] overflow-y-clip flex  justify-center'>
                    <img src={education} alt="grid-3" className=" rounded-3xl " />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
              <p className="grid-headtext text-xl font-semibold mb-2 dark:text-white font-generalsans">Education</p>
              <div className="grid-subtext dark:text-[#afb0b6] text-base font-generalsans">
                <h1 className='font-bold text-lg'>B.Tech. in Computer Science Engineering</h1>
                <p>Motilal Nehru National Institue of Technology Allahabad, Prayagraj, Uttar Pradesh</p>
              </div>
              <div className="grid-subtext dark:text-[#afb0b6] text-base font-generalsans">
                <h1 className='font-bold text-lg'>Senior Secondary</h1>
                <p> Nardiganj College Nargiganj, Nardiganj, Bihar</p>
              </div>
              <div className="grid-subtext dark:text-[#afb0b6] text-base font-generalsans">
                <h1 className='font-bold text-lg'>Matriculation</h1>
                <p>Gyan Bharti Model Residential Complex, Hisua, Bihar</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="xl:col-span-1 xl:row-span-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid-container w-full h-full border border-black-300 bg-[#eaefee] dark:bg-[#161616] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src={mail}
              alt="grid-4"
              className=" rounded-3xl"
            />

            <div className="space-y-2 h-full my-5">
              {/* <p className="grid-subtext text-center dark:text-[#afb0b6] text-base font-generalsans">Contact me</p> */}
              <div className="copy-container cursor-pointer flex justify-center items-center gap-2 w-full h-full dark:bg-[#393838] rounded-lg py-1.5 bg-[#ffffff]" onClick={handleCopy}>
                <img src={hasCopied ? tick : copy } alt="copy" />
                <p className="lg:text-l  md:text-l font-medium text-gray_gradient  dark:text-white">abhishekkumar.init@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;