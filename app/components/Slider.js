"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Slider() {
  const sliderSlides = [
    {
      image: '/assets/images/slider-1.jpg',
      content: {
        title: 'Going Online Made Easy for Travel Businesses.',
        description: 'Whether you are a small single site travel agency or an ambitious startup, scaling your travel business to multiple markets, Amadeus Online Suite can help you succeed.',
        path: '/'
      },
    },
    {
      image: '/assets/images/slider-1.jpg',
      content: {
        title: 'Going Online Made Easy for Travel Businesses.',
        description: 'Whether you are a small single site travel agency or an ambitious startup, scaling your travel business to multiple markets, Amadeus Online Suite can help you succeed.',
        path: '/'
      },
    },
    {
      image: '/assets/images/slider-1.jpg',
      content: {
        title: 'Going Online Made Easy for Travel Businesses.',
        description: 'Whether you are a small single site travel agency or an ambitious startup, scaling your travel business to multiple markets, Amadeus Online Suite can help you succeed.',
        path: '/'
      },
    },
  ];
  return <section className="slider-section">
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          sliderSlides.map((slide, index) => {
            return <SwiperSlide key={index}>
              <div className="slide" key={index}>
                <div className="slide__image">
                  <img src={slide.image} alt="" />
                </div>
                <div className="slide__content">
                  <h2 className='fs-1'>{slide.content.title}</h2>
                  <p>{slide.content.description}</p>
                  <a href={slide.content.path} className='btn btn-light btn-lg' >Discover More</a>
                </div>
              </div>
            </SwiperSlide>
          })
        }        
      </Swiper>
    </div>
  </section>;
}

export default Slider