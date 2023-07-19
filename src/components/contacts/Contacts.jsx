import React from 'react'
import "./Contacts.css"
import {MdOutlineMarkEmailUnread} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import { useRef } from 'react';

import emailjs from "emailjs-com"

const Contacts = () => { 
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_acjiz6p', 'template_r943gdg', form.current, 'tzCPgKlCK-ux7AVVh')
    e.target.reset()

      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
   <section id='contacts'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
       <div className="contact__options">
         <article className="contact__option">
           <MdOutlineMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>larrysams22@gmail.com</h5>
            <a href="mailto:larrysams22@gmail.com" target="_blank">Send a Message</a>
         </article>

         <article className="contact__option">
           <BsMessenger className='contact__option-icon'/> 
            <h4>Messenger</h4>
            <h5>larrycode</h5>
            <a href="https://m.me/Jesusboyyy" target="_blank">Send a Message</a>
         </article>

         <article className="contact__option">
           <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>07034624533</h5>
            <a href="https://api.whatsapp.com/send?phone=2347034624533" target="_blank">Send a Message</a>
         </article>

       </div>
       {/*End of Contact Options*/}
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name="name" id="" placeholder='Your Full Name' required/>
         <input type="email" name="email" placeholder="Your Email" required />
         <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
         <button type='submit'className='btn btn-primary'>Send Message</button>
       </form>
      </div>
   </section>
  )
}

export default Contacts