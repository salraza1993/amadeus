"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageTag from './ImageTag';

function Testimonial({ data }) {
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
        slidesPerView: data.length >= 3 ? 3 : data.length,
      },
    }}
    // pagination={{ clickable: true }}    
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    {
      data.map((testimonial, index) => {
        return <SwiperSlide key={index}>
          <div className="testimonial-card">
            <div className="author-info">
              <div className="__image">
                <ImageTag src={testimonial.node?.featuredImage?.node?.sourceUrl}
                  alt={testimonial.node?.featuredImage?.node?.altText} />

                {
                  testimonial?.node?.testimonialAdditionalInfo?.linkedinPath &&
                  <ul className="social-links">                      
                    <li className="social-links__item">
                        <a href={testimonial?.node?.testimonialAdditionalInfo?.linkedinPath} target='_blank'>
                          <i className={testimonial?.node?.testimonialAdditionalInfo?.icon}></i>
                      </a>
                    </li>
                  </ul>
                }
              </div>
              <div className="__name">
                <h4 className='mb-1'>{testimonial?.node?.title}</h4>
                <p className='m-0'>{testimonial?.node?.testimonialAdditionalInfo?.designation}</p>
                <p className='fw-bold'>{testimonial?.node?.testimonialAdditionalInfo?.nameAgency}</p>
              </div>
            </div>
            <div className="comment">
              <div dangerouslySetInnerHTML={{ __html: testimonial?.node?.content }}></div>
            </div>
          </div>
        </SwiperSlide>;
      })
    }
  </Swiper>;
}

export default Testimonial;