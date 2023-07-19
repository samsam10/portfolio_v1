import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.png"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';


const data = [
  {
    avatar : AVTR2,
    name: "Iruo Ovuomaye",
    review: "Samuel is a very focused and talented developer, he will definitely go and do great things in the industry "
  },

  {
    avatar : AVTR1,
    name: "Kparo",
    review: "I like how he(Samuel) follows good coding practices "
  },

 
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Reviews</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
            // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
       
      pagination={{ clickable: true }}
     
        >
          {
           data.map(({avatar, name, review}, index)=>{
             return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
  
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                 {review}
                </small>
  
            </SwiperSlide>
             )
           })
          }

          
        </Swiper>


    </section>
  )
}

export default Testimonials