"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageTag from './ImageTag';

function ProvidersCarousel() {

  const providersList = [
    [
      '/assets/images/providers-logos/provide-logo-1.png',
      '/assets/images/providers-logos/provide-logo-2.png',
      '/assets/images/providers-logos/provide-logo-3.png',
      '/assets/images/providers-logos/provide-logo-4.png',
      '/assets/images/providers-logos/provide-logo-5.png',
      '/assets/images/providers-logos/provide-logo-6.png',
      '/assets/images/providers-logos/provide-logo-7.png',
      '/assets/images/providers-logos/provide-logo-8.png',
      '/assets/images/providers-logos/provide-logo-9.png',
      '/assets/images/providers-logos/provide-logo-10.png',
    ],
    [
      '/assets/images/providers-logos/provide-logo-11.png',
      '/assets/images/providers-logos/provide-logo-12.png',
      '/assets/images/providers-logos/provide-logo-13.png',
    ],
  ];

  return <Swiper
    pagination={{
      clickable: true,
    }}
    loop={true}
    navigation={true}
    // autoplay={{
    //   delay: 3000,
    //   disableOnInteraction: false,
    // }}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    {
      providersList.map((providerItem, index) => {
        return <SwiperSlide key={index}>
          <ul className="providers-list">
            {
              providerItem.map((provider, index) => {
                return <li className="providers-list__item" key={index}>
                  <ImageTag src={provider} />
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