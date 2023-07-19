import React from 'react'
import "./About.css"
import ME from "../../assets/me-about.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon'/>
              <h5>BSc Computer Science</h5>
              <small>University of Ibadan</small>
            </article>
            
            <article className='about__card'>
                <FiUsers className='about__icon'/>
              <h5>MERN Stack Developer</h5>
              <small>Life Long Learner</small>
            </article>

            <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
              <h5>Code Tipper</h5>
              <small>I write Tips on Coding </small>
            </article>
          </div>

          <p>I am a MERN Stack Developer who is passionate about building applications to solve problems 
            </p>
          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
