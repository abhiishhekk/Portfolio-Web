import { form } from 'motion/react-client'
import React, { useEffect, useState } from 'react'
import conf from '../conf/conf';
import emailjs from '@emailjs/browser';
import EmailSent from './EmailSent';
import {motion} from 'motion/react'
function EmailCard() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("")
    const [showToast, setShowToast] = useState(false);
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
        console.log("public key", conf.publickey);
        emailjs.send(conf.serviceid, conf.templateid, templateParams, conf.publickey)
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setShowToast(true);
          setTimeout(()=>setShowToast(false), 1500);
          setName("");
          setEmail("");
          setMessage("");

          
        },
        (error) => {
          console.log('FAILED...', error);
        },

      );
  };
  return (
    < motion.div className='relative '
    >
        <EmailSent show={showToast} />
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 mt-3'>
        <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}

            className='border-b-[0.1rem] text-lg focus:outline-none focus:ring-0 outline-none'
        ></input>
        <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}

            className='border-b-[0.1rem] text-lg focus:outline-none focus:ring-0 outline-none'
        >
        </input>
        <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='border-b-[0.1rem] text-lg focus:outline-none focus:ring-0 outline-none'
        ></input>
        <textarea
            cols="30"
            rows="10"
            value={message}
            placeholder='Enter your message here'
            onChange={(e)=>setMessage(e.target.value)}
            className='border-[0.1rem] resize-none rounded-2xl p-1 focus:outline-none focus:ring-0 outline-none font-serif'
        >
        </textarea>
        <button
            type='submit'
        >Send Email</button>
    </form>
    </motion.div >
  )
}

export default EmailCard