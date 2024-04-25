import React from 'react'
import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2b-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import ImageTag from '@/app/components/ImageTag';

import b2b2ndImage from "/public/assets/images/b2b-image-1st.png"
import b2b3rdImage from "/public/assets/images/b2b-image-2nd.png"
import b2b4thImage from "/public/assets/images/b2b-image-3rd.png"
import b2b5thImage from "/public/assets/images/b2b-image-4th.png"
import b2b6thImage from "/public/assets/images/b2b-image-5th.png"
import b2bModelImage from "/public/assets/images/b2b-model-image.png"

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Complete travel eco-system at your finger tips",
    description: "Empower your affiliates, drive your business."
  }
  const whyamadeusList = [
    {
      icon: '/assets/images/b2b-solution-icon-1.svg',
      title: 'Flexible and User Friendly Interface',
      description: 'With user-friendly features and customizable options, users can effortlessly access and explore travel offerings, ensuring a smooth and enjoyable experience from start to finish. Our mobile app boasts an intuitive interface designed for seamless navigation'
    },
    {
      icon: '/assets/images/b2b-solution-icon-2.svg',
      title: 'Multi Language  & Multi Currency',
      description: 'Cater to diverse global audiences  by offering a localized and convenient booking experience tailored to their preferences using our Multi Language and Multi Currency Features.'
    },
    {
      icon: '/assets/images/b2b-solution-icon-3.svg',
      title: 'Boost Sales with Promo Codes',
      description: "Attract and Retain your customers by offering promotional discounts using Promo Codes, thereby stimulating sales, fostering loyalty, aiding marketing efforts, and providing a competitive edge"
    },
    {
      icon: '/assets/images/b2b-solution-icon-4.svg',
      title: 'View all trips in one place',
      description: "Access comprehensive trip reports conveniently. Consolidate all travel data into one dashboard for streamlined analysis and informed decision-making, enhancing efficiency and improving customer service."
    },
    {
      icon: '/assets/images/b2b-solution-icon-5.svg',
      title: 'Case Management',
      description: "Simplify post-booking service requests with our Case Management feature. Customers can easily open cases for any services after booking creation, ensuring efficient service delivery and customer satisfaction."
    },
  ];
  return <>
    <HeroBanner image={heroBannerContent.banner} heading={heroBannerContent.heading} description={heroBannerContent.description} />    
    
    <section className="sub-page-block sub-page-block-1st">
      <div className="container">
        <div className="sub-page-block-1st__container">
          <div className="b2b-block__content">
            <h2 className='fs-1 heading'>Empowering Travel Agencies with Mobile Solutions</h2>
            <p>Transforming travel experiences with our innovative mobile app solution tailored for travel agencies, enhancing efficiency and customer satisfaction.</p>
            <button className="btn btn-secondary btn-lg mt-1">Get Started</button>
          </div>
          <div className="b2b-block__image">
            <ImageTag src={b2b2ndImage} width={'auto'} />
          </div>
        </div>
      </div>
    </section>
    
    <section className='sub-page-block sub-page-block-2nd dark-bg'>
      <div className="container">
        <div className="sub-page-block-2nd__container">
          <div className="row g-4">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="b2b-block__image">
                <ImageTag src={b2b3rdImage}/>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content">
                <h2 className='fs-1 heading'>Bookings on the Go</h2>
                <div className="text">
                  <p>Access flight and hotel booking services anytime, anywhere, directly from your mobile device, ensuring flexibility and convenience for travelers on the move</p>
                  <p>Instantly search and book flights and accommodations with up-to-date availability and pricing information, providing users with timely and accurate booking options.</p>
                  <p>Accessible on both Android and iOS devices, AOS application provides users with the freedom to interact with it, no matter their favored mobile platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-block sub-page-block-3rd'>
      <div className="container">
        <div className="sub-page-block-3rd__container">
          <div className="row g-4">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content">
                <h2 className='fs-1 heading'>One Stop Shop for all Content</h2>
                <div className="text">
                  <p>Seamlessly integrate with airline and hotel APIs to offer a wide range of options, including flights, hotels, and packages, ensuring a comprehensive booking experience for users.</p>
                  <p>By leveraging advanced API connectivity, our platform enables real-time access to diverse travel inventory, allowing travelers to choose from an extensive array of options. </p>
                  <p>This integration not only enhances the user experience by providing more choices but also ensures that users can easily find the best deals and book their preferred travel options with convenience and efficiency</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="b2b-block__image">
                <ImageTag src={b2b4thImage}/>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>
    
    <section className='sub-page-block sub-page-block-4th dark-bg'>
      <div className="container">
        <div className="sub-page-block-4th__container">
          <div className="row g-4">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="b2b-block__image">
                <ImageTag src={b2b5thImage}/>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content">
                <h2 className='fs-1 heading'>Secure Payment Gateway</h2>
                <div className="text">
                  <p>Enable travelers to pay conveniently using various payment gateways, and also offer the option to hold bookings and pay at a later time.</p>
                  <p>Access a diverse range of payment gateways with Amadeus Online Suite, now offering seamless integration with over 20 leading gateways from different countries across the region.</p>
                  <p>Customize your payment options by setting up multiple gateways on your site. Define transaction fees for each gateway and card type to tailor the payment experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-block sub-page-block-5th'>
      <div className="container">
        <div className="sub-page-block-5th__container">
          <h1 className='block-title mb-5'>
            Explore the World of Benefits of
            <strong className='text-secondary'> Amadeus Online Suite Mobile App</strong>
          </h1>
          <div className="row g-4">
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <div className="b2b-block__image">
                <ImageTag src={b2bModelImage} />
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content">
                <ul className="content-list">
                  {
                    whyamadeusList.map((item, index) => {
                      return <li className="content-list__item" key={index}>
                        <span className="icon">
                          <ImageTag src={item.icon} />
                        </span>
                        <div className="text">
                          <h5 className='fw-bold'>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </li>;
                    })
                  }
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <section className='sub-page-last-block'>
      <div className="b2b-block__content">
        <h2 className='fs-1'>Accelerate sales with smarter and more effective strategies</h2>
        <a href="" className='btn btn-light btn-lg'>Get Started</a>
      </div>
      <div className="b2b-block__image">
        <ImageTag src={b2b6thImage} />
      </div>
    </section>
  </>
}

export default page