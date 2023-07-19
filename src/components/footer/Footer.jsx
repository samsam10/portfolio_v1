import React from 'react'
import "./Footer.css"
import {IoLogoTwitter} from "react-icons/io"
import {BsGithub} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import {IoLogoLinkedin} from "react-icons/io"



const Footer = () => {
  return (
    <footer>

      <a href='#' className='footer__logo'>Laritek</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolo">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/TrueDBriggs"><IoLogoTwitter /></a>
        <a href="https://api.whatsapp.com/send?phone=2347034624533"><IoLogoWhatsapp/></a>
        <a href="https://github.com/samsam10"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/olanrewaju-ogundipe-96617b128"><IoLogoLinkedin/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Laritek. All Rights Resrved</small>
      </div>
    </footer>
  )
}

export default Footer