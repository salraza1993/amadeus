"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageTag from './ImageTag';
import { useState } from 'react';
import { arrayDivideByGroup } from '../common/CommonFunctions';

function ProvidersCarousel({ data }) {
  const [providersList, setProvidersList] = useState(arrayDivideByGroup(data, 10));

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
                  <ImageTag src={provider?.node?.sourceUrl} alt={provider?.node?.altText} />
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