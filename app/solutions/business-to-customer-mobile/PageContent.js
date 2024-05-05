"use client";
import { useRef } from 'react';
import { useInView } from "framer-motion";

import ImageTag from '@/app/components/ImageTag';

import b2b2ndImage from "/public/assets/images/b2c-image-1st.png";
import b2b3rdImage from "/public/assets/images/b2c-image-2nd.png";
import b2b4thImage from "/public/assets/images/b2c-image-3rd.png";
import b2b5thImage from "/public/assets/images/b2c-image-4th.png";
import b2b6thImage from "/public/assets/images/b2c-image-5th.png";
import b2bModelImage from "/public/assets/images/b2c-mobile-model-image.png";
import Link from 'next/link';

function useBlockInView() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const imageInView = useInView(imageRef, { margin: "0px 0px -100px 0px", once: true });
  const contentInView = useInView(contentRef, { margin: "0px 0px -100px 0px", once: true });

  return { imageRef, imageInView, contentRef, contentInView };
}

function PageContent() {
  const block1st = useBlockInView();
  const block2nd = useBlockInView();
  const block3rd = useBlockInView();
  const block4th = useBlockInView();
  const block5th = useBlockInView();
  const block6th = useBlockInView();

  const benefitLists = [
    {
      icon: '/assets/images/b2c-mobile-icon-1.svg',
      title: 'Flexible and User-Friendly Interface',
      description: 'With user-friendly features and customizable options, users can access and explore travel offerings, ensuring a smooth and enjoyable experience from start to finish.'
    },
    {
      icon: '/assets/images/b2c-mobile-icon-2.svg',
      title: 'Multi-Language & Multi-Currency',
      description: 'Cater to diverse global audiences by offering localized content and providing multi-currency options.'
    },
    {
      icon: '/assets/images/b2c-mobile-icon-3.svg',
      title: 'Boost Sales with Promo Codes',
      description: "Attract and Retain your customers by offering promotional discounts using Promo Codes."
    },
    {
      icon: '/assets/images/b2c-mobile-icon-4.svg',
      title: 'View all trips in one place',
      description: "Access comprehensive trip reports conveniently. Consolidate all travel data into one dashboard for streamlined analysis and informed decision-making."
    },
    {
      icon: '/assets/images/b2c-mobile-icon-5.svg',
      title: 'Improve service with case management',
      description: "Simplify post-booking service requests with our Case Management feature. Customers can easily open track and follow-up custom requests."
    },
  ];
  return <>
    <section className="sub-page-block sub-page-block-1st">
      <div className="container">
        <div className="sub-page-block-1st__container">
          <div className="b2b-block__content"
            style={{
              transform: block1st.contentInView ? "none" : "translateY(25%)",
              opacity: block1st.contentInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            ref={block1st.contentRef}>
            <h2 className='fs-1 heading'>Empowering Travel Agencies with Mobile Solutions</h2>
            <p>The Online Suite mobile application is packed with features to make travel seamless.</p>
            <button className="btn btn-secondary btn-lg mt-1">Get Started</button>
          </div>
          <div className="b2b-block__image"
            style={{
              transform: block1st.imageInView ? "none" : "translateY(25%)",
              opacity: block1st.imageInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: ".8s",
            }}
            ref={block1st.imageRef}>
            <ImageTag src={b2b2ndImage} width={'auto'} />
          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-block sub-page-block-2nd dark-bg'>
      <div className="container">
        <div className="sub-page-block-2nd__container">
          <div className="row g-4">
            <div className="col-12 col-lg-7 pe-0 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block2nd.imageRef} style={{
                transform: block2nd.imageInView ? "none" : "translateY(25%)",
                opacity: block2nd.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag src={b2b3rdImage} />
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block2nd.contentRef}
                style={{
                  transform: block2nd.contentInView ? "none" : "translateY(25%)",
                  opacity: block2nd.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h2 className='fs-1 heading'>Bookings on the Go</h2>
                <div className="text">
                  <p>Access flight and hotel booking services anytime, anywhere, directly from the device, ensuring flexibility and convenience for travelers on the move.</p>
                  <p>Instantly book flights and accommodation with up-to-date availability and pricing information.</p>
                  <p>Available on both android and iOS platforms. </p>
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
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block3rd.contentRef}
                style={{
                  transform: block3rd.contentInView ? "none" : "translateY(25%)",
                  opacity: block3rd.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h2 className='fs-1 heading'>Diverse content on your mobile</h2>
                <div className="text">
                  <p>Seamlessly integrate with airline and hotel content to offer a wide range of options, ensuring a comprehensive booking experience for users.</p>
                  <p>Our platform enables real-time access to diverse travel inventory, allowing travelers to choose from extensive options.</p>
                  <p>Users can easily find the best deals and book their preferred travel options with convenience using the solution.                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 ps-0 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block3rd.imageRef} style={{
                transform: block3rd.imageInView ? "none" : "translateY(25%)",
                opacity: block3rd.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag src={b2b4thImage} />
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
            <div className="col-12 col-lg-7 pe-0 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block4th.imageRef} style={{
                transform: block4th.imageInView ? "none" : "translateY(25%)",
                opacity: block4th.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag src={b2b5thImage} />
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block4th.contentRef}
                style={{
                  transform: block4th.contentInView ? "none" : "translateY(25%)",
                  opacity: block4th.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h2 className='fs-1 heading'>Secure Payment Gateway</h2>
                <div className="text">
                  <p>Amadeus Online Suite has more than 20 payment gateways integrated including buy now pay later options for your market.</p>
                  <p>Customize your payment options by setting up multiple payment gateways on your site. Define transaction fees for each payment gateway and card type to tailor the payment experience.</p>
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
            Discover the Benefits of 
            <strong className='text-secondary'> Amadeus Online Suite's Mobile App</strong>
          </h1>
          <div className="row g-4">
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block5th.imageRef} style={{
                transform: block5th.imageInView ? "none" : "translateY(25%)",
                opacity: block5th.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag src={b2bModelImage} />
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block5th.contentRef}
                style={{
                  transform: block5th.contentInView ? "none" : "translateY(25%)",
                  opacity: block5th.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <ul className="content-list">
                  {
                    benefitLists.map((item, index) => {
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
      <div className="b2b-block__content" ref={block6th.contentRef}
        style={{
          transform: block6th.contentInView ? "none" : "translateY(25%)",
          opacity: block6th.contentInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <h2 className='fs-1'>Let Amadeus Online Suite be your trusted companion</h2>
        <Link href={"/contact"} className='btn btn-light btn-lg'>Get Started</Link>
      </div>
      <div className="b2b-block__image">
        <ImageTag src={b2b6thImage} />
      </div>
    </section>
  </>;
}

export default PageContent;