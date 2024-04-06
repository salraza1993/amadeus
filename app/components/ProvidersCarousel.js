"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function ProvidersCarousel() {

  const providersList = [
    [
      '/assets/images/provide-logo-1.png',
      '/assets/images/provide-logo-2.png',
      '/assets/images/provide-logo-3.png',
      '/assets/images/provide-logo-4.png',
      '/assets/images/provide-logo-5.png',
      '/assets/images/provide-logo-1.png',
      '/assets/images/provide-logo-2.png',
      '/assets/images/provide-logo-3.png',
      '/assets/images/provide-logo-4.png',
      '/assets/images/provide-logo-5.png',
    ],
    [
      '/assets/images/provide-logo-1.png',
      '/assets/images/provide-logo-2.png',
      '/assets/images/provide-logo-3.png',
      '/assets/images/provide-logo-4.png',
      '/assets/images/provide-logo-5.png',
      '/assets/images/provide-logo-1.png',
      '/assets/images/provide-logo-2.png',
      '/assets/images/provide-logo-3.png',
      '/assets/images/provide-logo-4.png',
      '/assets/images/provide-logo-5.png',
    ],
  ];

  return <Swiper
    pagination={{
      clickable: true,
    }}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {
      providersList.map((providerItem, index) => {
        return <SwiperSlide key={index}>
          <ul className="providers-list">
            {
              providerItem.map((provider, index) => {
                return <li className="providers-list__item" key={index}>
                  <img src={provider} alt="" />
                </li>;
              })
            }
          </ul>
        </SwiperSlide>
      })
    }
    
  </Swiper>
  
}

export default ProvidersCarousel;