import React from 'react'
import About from "./components/about/About"
import Contacts from "./components/contacts/Contacts"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
// import Services from './components/services/Services'


const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/> */}
    <Portfolio/>
   
    {/* <Testimonials/> */}
    <Contacts/>
    <Footer/>

    </div>
  )
}

export default App