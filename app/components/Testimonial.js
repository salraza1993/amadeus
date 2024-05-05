"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageTag from './ImageTag';

function Testimonial() {
  const testimonials = [
    {
      image: '/assets/images/fakhreddine-hachfi.jpg',
      // facebookPath: '',
      linkedinPath: 'https://www.linkedin.com/in/fakhreddine-hachfi-a773ba13/?originalSubdomain=tn',
      name: 'Fakhreddine Hachfi',
      designation: 'Chief Executive Officer',
      agencyName: "Kounouz Travel",
      comment: "Amadeus Online Suite is reliable and fully customizable e-commerce platform that will deliver superior service to our clients"
    },
    {
      image: '/assets/images/selim-boutros-new.jpg',
      // facebookPath: '',
      linkedinPath: 'https://www.linkedin.com/in/selim-boutros-92b5983/',
      name: 'Selim Boutros',
      designation: 'Managing Partner',
      agencyName: "Kurban Travel",
      comment: "I have used several travel platforms in the past, but Amadeus Online Suite is by far the best. It offers a level of customization, flexibility and support that I have not found elsewhere"
    },
    {
      image: '/assets/images/salim.jpg',
      // facebookPath: '',
      // linkedinPath: '',
      websitePath: 'https://www.sasalim.com/',
      name: 'Sainulabdeen Salim',
      designation: 'Founder and Managing Director',
      agencyName: "Jamal Travels",
      comment: "Amadeus Online Suite has transformed our travel business. It's user-friendly interface and comprehensive features have boosted our efficiency and customer satisfaction. Highly recommended for any travel company looking to elevate their online presence!"
    },
    
  ];
  return <Swiper
    spaceBetween={30}
    // loop={true}
    navigation={true}
    breakpoints={{
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: testimonials.length >= 3 ? 3 : testimonials.length,
      },
    }}
    // pagination={{ clickable: true }}    
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    {
      testimonials.map((testimonial, index) => {
        return <SwiperSlide key={index}>
          <div className="testimonial-card">
            <div className="author-info">
              <div className="__image">
                <ImageTag src={testimonial.image} />
                <ul className="social-links">
                  {testimonial.linkedinPath && <li className="social-links__item">
                    <a href={testimonial.linkedinPath} target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                  </li>}
                  {testimonial.facebookPath && <li className="social-links__item">
                    <a href={testimonial.facebookPath} target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                  </li>}
                  {testimonial.websitePath && <li className="social-links__item">
                    <a href={testimonial.websitePath} target='_blank'><i className="fa-solid fa-globe-asia"></i></a>
                  </li>}
                </ul>
              </div>
              <div className="__name">
                <h4 className='mb-1'>{testimonial.name}</h4>
                <p className='m-0'>{testimonial.designation}</p>
                {testimonial.agencyName  && <p className='fw-bold'>{testimonial.agencyName}</p>}
              </div>
            </div>
            <div className="comment">
              <p className='text-balance'>"{testimonial.comment}."</p>
            </div>
          </div>
        </SwiperSlide>
      })
    }
  </Swiper>
}

export default Testimonial