"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ImageTag from '../ImageTag';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function HomeContentCarousel({ data }) {
  console.log(data)
  const [homeContentSlides, setHomeContentSlides] = useState([data]);

  useEffect(() => {
    setHomeContentSlides(data);
  }, [data])

  return <section className='home-content-carousel-section section-bg-type--light'>
    <Swiper 
      slidesPerView={1}
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='home-content-carousel'
    >
      {
        homeContentSlides.map((slide, index) => {
          return <SwiperSlide key={index} className='hone-content-carousel-slide'>
            <div className='slide-content container p-0'>
              <div className='hone-content-carousel-image'>
                <ImageTag src={slide?.image?.node?.sourceUrl} alt={slide?.image?.node?.altText} />
              </div>
              <div className='hone-content-carousel-text text-balance'>
                <div className="text" dangerouslySetInnerHTML={{ __html: slide?.content }}></div>
                {
                  slide?.button?.url && 
                  <Link target={slide?.button?.target} href={slide?.button?.url} className='btn btn-primary max-width--max-content mt-2 btn-lg'>{slide?.button?.title}</Link>
                }
              </div>
            </div>
          </SwiperSlide>          
        })
      }
    </Swiper>
  </section>
}

export default HomeContentCarousel