import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.PNG"
import IMG6 from "../../assets/portfolio6.jpg"
import IMG7 from "../../assets/portfolio7.png"
import IMG8 from "../../assets/portfolio8.png"


const data = [
  {
     id : 1,
     image : IMG7,
     title : "Homlaris",
     github : "https://github.com/samsam10/Homey",
     demo : "https://homlaris.netlify.app/"
    },
  {
     id : 2,
     image : IMG8,
     title : "LarAI",
     github : "https://github.com/samsam10/Lar-Ai",
     demo : "https://lar-ai.netlify.app/"
    },
  {
     id : 3,
     image : IMG5,
     title : "Woligraph",
     github : "https://github.com/samsam10/woligraph",
     demo : "http://woligraph.netlify.app/"
    },
    {
      id : 5,
      image : IMG2,
      title : "Admin Dashboard(E-Commerce Website)",
      github : "https://github.com/samsam10/AdminDashboard",
      demo : "https://laritekadmindashboard.netlify.app"
    },
    {
      id : 4,
      image : IMG3,
      title : "Expense Tracker",
      github : "https://github.com/samsam10/Expense_Tracker",
      demo : "https://expensetrackerlry.netlify.app"
    },
  
  {
    id : 6,
    image : IMG4,
    title : "Quizzify",
    github : "https://github.com/samsam10/samsam10.github.io",
    demo : "https://quizappie.netlify.app/"
    
  }, 
  {
    id : 7,
    image : IMG1,
    title : "Task Manager",
    github : "https://github.com/samsam10/Task_Manager/",
    demo : "https://taskmanagerlarry.netlify.app"
  },
  {
    id : 8,
    image : IMG6,
    title : "Portfolio Website",
    github : "https://github.com/samsam10/My_Portfolio",
    demo : "#"

  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some of my Works.</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo} )=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio