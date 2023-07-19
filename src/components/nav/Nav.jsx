import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkStarFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareError} from 'react-icons/bi'
import {useState} from "react"


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ""}><BsBookmarkStarFill/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ""}><RiServiceFill/></a>
      <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ""}><BiMessageSquareError/></a>



    </nav>
  )
}

export default Nav