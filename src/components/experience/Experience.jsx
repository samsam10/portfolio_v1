import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import {ImHtmlFive2} from "react-icons/im"
import {FaCss3} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {SiPostgresql} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
import {SiCanva} from "react-icons/si"
import {GrMysql} from "react-icons/gr"
import {FaReact} from "react-icons/fa"
import {SiTypescript} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiNodedotjs} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {GiRefinery} from "react-icons/gi"
import {AiFillCloud} from "react-icons/ai"
import {SiPostman} from "react-icons/si"

const Experience = () => {
  return (
    <section id='experience'>
    <h5>Some Tools and Technologies</h5>
    <h2>I Work With</h2>


    <div className="container experience__container">

      <div className="experience__frontend">
        {/* <h3>Frontend Development</h3> */}
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <FaReact size={30}className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>TypeScript</h4>
            <SiTypescript size={30} className="" />
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MongoDb</h4>
           <SiMongodb size={30} className='' />

            {/* <small className='text-light'>Intermediate</small> */}
           </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <SiJavascript size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <SiTailwindcss size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Node</h4>
            <SiNodedotjs size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>


           {/* <article className='experience__details'> */}
            {/* <BsPatchCheckFill className='experience__details-icon'/> */}
            <div>
            {/* <h4>Tailwind</h4> */}
            {/* <small className='text-light'>Experienced</small> */}
            </div>
          {/* </article> */}


        </div>
      </div>

    {/****************** END OF FRONTEND********/}

      <div className="experience__backend">
          {/* <h3>Backend Development</h3> */}
              <div className="experience__content">
                 <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Github</h4>
            <BsGithub size={30} className='' />

                      {/* <small className='text-light'>Experienced</small> */}
                    </div>
                  </article>

          <article className='experience__details'>
            <SiExpress className='experience__details-icon'/>
            <div>
            <h4>Express</h4>
            <SiExpress size={30} className='' />

            {/* <small className='text-light'>Intermediate</small> */}
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Refine</h4>
           <GiRefinery size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
           </div>
          </article>


          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Cloudinary</h4>
            <AiFillCloud size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Postman</h4>
            <SiPostman size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Canva</h4>
            <SiCanva size={30} className='' />

            {/* <small className='text-light'>Experienced</small> */}
            </div>
          </article>

          {/* <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Workbench</h4>
            {/* <small className='text-light'>Experienced</small> */}
            {/* </div> */}
          {/* </article> */} 
          </div>
    </div>
    </div>
    </section>
  )
}

export default Experience