"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageTag from './ImageTag';

function Testimonial() {
  const testimonials = [
    {
      image: '/assets/images/testimonial-author-image-1.png',
      facebookPath: '',
      linkedinPath: '',
      name: 'Tom Hills',
      designation: 'Marketing Manager',
      comment: "The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately."
    },
    {
      image: '/assets/images/testimonial-author-image-1.png',
      facebookPath: '',
      linkedinPath: '',
      name: 'Tom Hills',
      designation: 'Marketing Manager',
      comment: "The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately."
    },
    {
      image: '/assets/images/testimonial-author-image-1.png',
      facebookPath: '',
      linkedinPath: '',
      name: 'Tom Hills',
      designation: 'Marketing Manager',
      comment: "The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately."
    },
    {
      image: '/assets/images/testimonial-author-image-1.png',
      facebookPath: '',
      linkedinPath: '',
      name: 'Tom Hills',
      designation: 'Marketing Manager',
      comment: "The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately."
    },
    {
      image: '/assets/images/testimonial-author-image-1.png',
      facebookPath: '',
      linkedinPath: '',
      name: 'Tom Hills',
      designation: 'Marketing Manager',
      comment: "The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately."
    },
    {
      image: '/assets/images/testimonial-author-image-1.png',
      facebookPath: '',
      linkedinPath: '',
      name: 'Tom Hills',
      designation: 'Marketing Manager',
      comment: "The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately."
    },
    {
      image: '/assets/images/testimonial-author-image-1.png',
      facebookPath: '',
      linkedinPath: '',
      name: 'Tom Hills',
      designation: 'Marketing Manager',
      comment: "The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately."
    },
  ];
  return <Swiper
    centeredSlides={true}
    spaceBetween={10}
    loop={true}
    breakpoints={{
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}    
    modules={[Autoplay, Pagination]}
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
                  <li className="social-links__item">
                    <a href={testimonial.linkedinPath}><i className="fa-brands fa-linkedin-in"></i></a>
                  </li>
                  <li className="social-links__item">
                    <a href={testimonial.facebookPath}><i className="fa-brands fa-facebook-f"></i></a>
                  </li>
                </ul>
              </div>
              <div className="__name">
                <h4 className='mb-1'>{testimonial.name}</h4>
                <p>{testimonial.designation}</p>
              </div>
            </div>
            <div className="comment">
              <p>{testimonial.comment }</p>
            </div>
          </div>
        </SwiperSlide>
      })
    }
  </Swiper>
}

export default Testimonial