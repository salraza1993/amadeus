"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function PaymentProvidersCarousel() {

  const paymentProvidersList = [
    [
      '/assets/images/payment-provider-1.png',
      '/assets/images/payment-provider-2.png',
      '/assets/images/payment-provider-3.png',
      '/assets/images/payment-provider-4.png',
      '/assets/images/payment-provider-5.png',
      '/assets/images/payment-provider-1.png',
      '/assets/images/payment-provider-2.png',
      '/assets/images/payment-provider-3.png',
      '/assets/images/payment-provider-4.png',
      '/assets/images/payment-provider-5.png',
    ],
    [
      '/assets/images/payment-provider-1.png',
      '/assets/images/payment-provider-2.png',
      '/assets/images/payment-provider-3.png',
      '/assets/images/payment-provider-4.png',
      '/assets/images/payment-provider-5.png',
      '/assets/images/payment-provider-1.png',
      '/assets/images/payment-provider-2.png',
      '/assets/images/payment-provider-3.png',
      '/assets/images/payment-provider-4.png',
      '/assets/images/payment-provider-5.png',
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
      paymentProvidersList.map((paymentProviderItem, index) => {
        return <SwiperSlide key={index}>
          <ul className="providers-list">
            {
              paymentProviderItem.map((paymentProvider, index) => {
                return <li className="providers-list__item" key={index}>
                  <img src={paymentProvider} alt="" />
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