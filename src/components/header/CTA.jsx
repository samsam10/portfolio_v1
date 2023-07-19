import React from 'react'
import CV from "../../assets/01Ogundipe__Olanrewaju__Samuel__Resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contacts' className='btn btn-primary'>Hire Me</a>

    </div>
  )
}

export default CTA
