"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageTag from './ImageTag';


function Slider({data}) {
  return <section className="slider-section">
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 15000,
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
          data.map((slide, index) => {
            return <SwiperSlide key={index}>
              <div className="slide" key={index}>
                <div className="slide__image">
                  <ImageTag src={slide?.node?.featuredImage?.node?.sourceUrl} alt={slide?.node?.featuredImage?.node?.altText} />
                </div>
                <div className="slide__content" dangerouslySetInnerHTML={{ __html: slide?.node?.content }}></div>
                {/* <div className="slide__content">
                  <h2 className='fs-1 font-amadeus-bold text-balance'>{slide.content.title}</h2>
                  <p className='text-balance'>{slide.content.description}</p>
                  <a href={slide.content.path} className='btn btn-light btn-lg' >Discover More</a>
                </div> */}
              </div>
            </SwiperSlide>
          })
        }        
      </Swiper>
    </div>
  </section>;
}

export default Slider