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

function PaymentProvidersCarousel({ data }) {
  const [paymentProvidersList, setProvidersList] = useState(arrayDivideByGroup(data, 10));

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
    modules={[Navigation, Pagination]}
    className="mySwiper"
  >
    {
      paymentProvidersList.map((paymentProviderItem, index) => {
        return <SwiperSlide key={index}>
          <ul className="providers-list">
            {
              paymentProviderItem.map((paymentProvider, index) => {
                return <li className="providers-list__item" key={index}>
                  <ImageTag src={paymentProvider?.node?.sourceUrl} alt={paymentProvider?.node?.altText} />
                </li>;
              })
            }
          </ul>
        </SwiperSlide>;
      })
    }

  </Swiper>;
}

export default PaymentProvidersCarousel;