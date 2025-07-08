import React, {useRef} from 'react'
import ProjectCardParallax from './ProjectCardParallax'
import teamSync from '../assets/teamSync.png'
import todo from '../assets/todo.png'
import auraTracker from '../assets/auraTracker.png'
import portfolio from '../images/portfolio.png'
import {motion, useScroll} from 'motion/react'
function Projects() {

    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset:[ 'start start', 'end end' ],
    })
    const projects = [
        { id: 1, title: "Portfolio Website",  image:portfolio,   bgCol: "#7CFC00" , description:"This portfolio website is built with React-Vite, styled using Tailwind CSS and custom CSS, and features smooth animations powered by Framer Motion. It includes sections like Projects, Skills, and Education, offering a clean and interactive user experience."},
        { id: 2, title: "Aura Tracker", image:auraTracker , bgCol: "#DDA0DD", description:"A campus-focused app that gamifies academic life through goal-setting, progress tracking, and reward systems. With Google Sign-In, students can securely access personalized features like leaderboards, badges, and friendly competition to boost motivation, time management, and academic growth" },
        { id: 3, title: "ToDo", image: todo, bgCol: "#00BFFF", description:"This Todo project is built using React with Vite and is designed to practice React Context API for state management. It allows users to add, edit, and delete todos in a simple and interactive interface, showcasing efficient handling of global state without external libraries." },
        { id: 4, title: "TeamSync", image:teamSync, bgCol: "orange", description:"A full-stack SaaS project management platform built with the MERN stack, Vite, and TailwindCSS. It supports multi-tenancy, workspace collaboration, role-based access, Google Sign-In, and complete CRUD for projects and tasks, making it ideal for scalable B2B team workflows." },
    ]
  return (
    <div ref={container} className='projects mt-20'>

        <div id='projects' className='-scroll-mt-28 projects-text reveal-bottom justify-self-center '>Projects</div>
        <div className='relative'>
            {projects.map((proj, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (<ProjectCardParallax key={proj.id} i={i} {...proj} progress={scrollYProgress} range={[i*0.25, 1]} targetScale={targetScale}/>)
        })}
        </div>
    </div>
  )
}

export default Projects