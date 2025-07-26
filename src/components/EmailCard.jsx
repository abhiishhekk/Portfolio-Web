import { form } from 'motion/react-client'
import React, { useEffect, useState } from 'react'
import conf from '../conf/conf';
import emailjs from '@emailjs/browser';
import EmailSent from './EmailSent';
import {motion, useAnimation} from 'motion/react'
import { useSelector } from 'react-redux';
function EmailCard() {
    const theme = useSelector(state => state.theme.theme);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("")
    const [showToast, setShowToast] = useState(false);

    // const controls = useAnimation();
    // useEffect(()=>{
    //   if (showToast) {
    //     const timer = setTimeout(() => setShowToast(false), 1000);
    //     return () => clearTimeout(timer);
    //   }
    // }, [showToast])

    
    const handleSubmit = (e)=>{
        e.preventDefault();

        const templateParams = {
            title: title,
            name : "Abhishek",
            time: new Date().toLocaleString(),
            message: message,
            from_name: name,
            from_email : email,
            email:"issecodarymail@gmail.com",
        }
        // console.log("public key", conf.publickey);
        if(message.trim() && email.trim() && name.trim()){
          emailjs.send(conf.serviceid, conf.templateid, templateParams, conf.publickey)
          .then(
          (response) => {
          console.log('SUCCESS!', response);
          controls.start({
            y: -30,
            opacity: 0,
            transition: { duration: 0.5 },
          });
          setShowToast(true);
          setTimeout(()=>setShowToast(false), 1500);
          setName("");
          setEmail("");
          setMessage("");

          setTimeout(() => controls.set({ y: 0, opacity: 1 }), 1000);
        },
        (error) => {
          console.log('FAILED...', error);
        },

      );
        }
  };
  return (
    < motion.div className='relative '
      
    >
        <EmailSent show={showToast} />
    <form onSubmit={handleSubmit} className='flex flex-col md:gap-6 gap-2 mt-3'>
        <motion.input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}

            className='border-b-[0.1rem] dark:border-[#212020] text-lg focus:outline-none focus:ring-0 outline-none'

            initial={{ opacity: 0, x: 0, y: 60 }}       // from bottom-right
                            whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                            transition={{ 
                              y:{duration:0.5, ease: "linear"},
                              opacity:{duration:0.5, ease:"linear", delay:0.05}
                             }}
                            viewport={{ once: true, amount: 0.2 }}  
        ></motion.input>
        <motion.input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}

            className='border-b-[0.1rem] dark:border-[#212020] text-lg focus:outline-none focus:ring-0 outline-none'
            initial={{ opacity: 0, x: 0, y: 80 }}       // from bottom-right
                            whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                            transition={{ 
                              y:{duration:0.5, ease: "linear", delay:0.2},
                              opacity:{duration:0.5, ease:"linear", delay:0.1}
                             }}
                            viewport={{ once: true, amount: 0.2 }}  
        >
        </motion.input>
        <motion.input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='border-b-[0.1rem] dark:border-[#212020] text-lg focus:outline-none focus:ring-0 outline-none'
            initial={{ opacity: 0, x: 0, y: 100 }}       // from bottom-right
                            whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
                            transition={{ 
                              y:{duration:0.5, ease: "linear", delay:0.4},
                              opacity:{duration:0.5, ease:"linear", delay:0.4}
                             }}
                            viewport={{ once: true, amount: 0.2 }}  
        ></motion.input>
        <motion.textarea
            cols="30"
            rows="10"
            value={message}
            placeholder='Enter your message here'
            onChange={(e)=>setMessage(e.target.value)}
            className='border-[0.1rem] dark:border-[#212020] resize-none rounded-2xl p-1 focus:outline-none focus:ring-0 outline-none font-serif'
            initial={{ opacity: 0, x: 0, y: 100 }}     // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ 
                y:{duration:0.5, ease: "linear", delay:0.6},
                opacity:{duration:0.5, ease:"linear", delay:0.6}
            }}
            viewport={{ once: true, amount: 0.2 }}  
        >
        </motion.textarea>
        <motion.button

            initial={{ opacity: 0, x: 0, y: 100 }}     // from bottom-right
              whileInView={{ opacity: 1, x: 0, y: 0 }}     // to original position
              transition={{ 
                y:{duration:0.6, ease: "linear", delay:0.5},
                opacity:{duration:0.5, ease:"linear", delay:0.5},
                scale:{ type: "spring", stiffness: 250 }
            }}
            viewport={{ once: true, amount: 0.2 }} 
            whileHover={{scale:1.029,
              boxShadow:"0px 15px 20px rgba(0, 0, 0, 0.23)",
            }}
            // transition={{ type: "spring", stiffness: 250 }}
            type='submit' className='flex items-center justify-center box-content rounded-4xl'
        >Send<motion.svg
            
        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" className='dark:hidden'/></motion.svg></motion.button>
    </form>
    </motion.div >
  )
}

export default EmailCard