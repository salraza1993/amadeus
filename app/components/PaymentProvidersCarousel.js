"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ImageTag from './ImageTag';

function PaymentProvidersCarousel() {

  const paymentProvidersList = [
    [
      '/assets/images/payments-logos/payment-provider-1.png',
      '/assets/images/payments-logos/payment-provider-2.png',
      '/assets/images/payments-logos/payment-provider-3.png',
      '/assets/images/payments-logos/payment-provider-4.png',
      '/assets/images/payments-logos/payment-provider-5.png',
      '/assets/images/payments-logos/payment-provider-6.png',
      '/assets/images/payments-logos/payment-provider-7.png',
      '/assets/images/payments-logos/payment-provider-8.png',
      '/assets/images/payments-logos/payment-provider-9.png',
      '/assets/images/payments-logos/payment-provider-10.png',
    ],
    [
      '/assets/images/payments-logos/payment-provider-11.png',
      '/assets/images/payments-logos/payment-provider-12.png',
      '/assets/images/payments-logos/payment-provider-13.png',
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
                  <ImageTag src={paymentProvider} />
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