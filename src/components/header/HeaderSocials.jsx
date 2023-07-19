import React from 'react'
// import {BsLinkedin} from "react-icons/bs"
import {FaGithubAlt} from "react-icons/fa"
import {FiTwitter} from "react-icons/fi"
import {FiLinkedin} from "react-icons/fi"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        {/* <a href="https://linkedin.com" target="blank"><BsLinkedin/></a> */}
        <a href="https://github.com/samsam10?tab=repositories" target="blank"><FaGithubAlt/></a>

        <a href="https://twitter.com/HayPeeHai" target="blank"><FiTwitter/></a>

        <a href="https://www.linkedin.com/in/olanrewaju-ogundipe-96617b128" target="blank"><FiLinkedin/></a>

        
        
        
    </div>
  )
}

export default HeaderSocials