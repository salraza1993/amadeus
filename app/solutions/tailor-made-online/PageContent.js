"use client";
import { useRef } from 'react';
import { useInView } from "framer-motion";

import ImageTag from '@/app/components/ImageTag';

import b2b2ndImage from "/public/assets/images/tailored-made-image-1st.png";
import b2b3rdImage from "/public/assets/images/tailored-made-image-2nd.png";
import b2b4thImage from "/public/assets/images/tailored-made-image-3rd.png";
import b2b5thImage from "/public/assets/images/tailored-made-image-4th.png";
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
      title: 'Flexible and User Friendly Interface',
      description: 'With user-friendly features and customizable options, users can effortlessly access and explore travel offerings, ensuring a smooth and enjoyable experience from start to finish. Our mobile app boasts an intuitive interface designed for seamless navigation'
    },
    {
      icon: '/assets/images/b2c-mobile-icon-2.svg',
      title: 'Multi Language  & Multi Currency',
      description: 'Cater to diverse global audiences  by offering a localized and convenient booking experience tailored to their preferences using our Multi Language and Multi Currency Features.'
    },
    {
      icon: '/assets/images/b2c-mobile-icon-3.svg',
      title: 'Boost Sales with Promo Codes',
      description: "Attract and Retain your customers by offering promotional discounts using Promo Codes, thereby stimulating sales, fostering loyalty, aiding marketing efforts, and providing a competitive edge"
    },
    {
      icon: '/assets/images/b2c-mobile-icon-4.svg',
      title: 'View all trips in one place',
      description: "Access comprehensive trip reports conveniently. Consolidate all travel data into one dashboard for streamlined analysis and informed decision-making, enhancing efficiency and improving customer service."
    },
    {
      icon: '/assets/images/b2c-mobile-icon-5.svg',
      title: 'Case Management',
      description: "Simplify post-booking service requests with our Case Management feature. Customers can easily open cases for any services after booking creation, ensuring efficient service delivery and customer satisfaction."
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
            <h2 className='fs-1 heading'>Tailor Your Website to Match Your Unique Vision</h2>
            <p>Tailor your website to reflect your identity and meet your specific needs with our  solutions, ensuring a seamless online experience for your customers.</p>
            <Link href={"/contact"} className="btn btn-secondary btn-lg mt-1">Get Started </Link>
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
                <h2 className='fs-1 heading'>Robust Technology</h2>
                <div className="text">
                  <p>Application leverages cutting-edge technology to continuously develop and customize the solution according to customer needs, ensuring it remains at the forefront of innovation</p>
                  <p>The application is prepared to accommodate any functional or design modifications as per specific requirements, ensuring flexibility and seamless adaptation to evolving needs</p>
                  <p>Application is equipped with essential security measures like data backups, encryption, and disaster recovery plan, safeguarding against various security threats</p>
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
                <h2 className='fs-1 heading'>Faster time to Market</h2>
                <div className="text">
                  <p>Quickly launch your site with dedicated resources tailored to your project, ensuring timely delivery and adherence to your specific requirements.</p>
                  <p>Ensuring that our product upholds rigorous quality standards while also minimizing the time needed to bring it to market.</p>
                  <p>Strategically planning marketing campaigns and leveraging digital channels to create buzz and generate demand before the product is even available.</p>
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
                <h2 className='fs-1 heading'>Customer engagement at all stages</h2>
                <div className="text">
                  <p>Involve customers in the design process by seeking their feedback on initial concepts, wireframes, and prototypes.</p>
                  <p>Engage with clients to run testing and pilot initiatives, enabling firsthand experience and feedback on product functionality, performance, and usability.</p>
                  <p>Engage customers in the development cycle with frequent updates, gathering feedback on new features, and integrating suggestions into iterative releases.</p>
                </div>
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
        <h2 className='fs-1'>Accelerate sales with smarter and more effective strategies</h2>
        <Link href={"/contact"} className="btn btn-light btn-lg">Get Started </Link>
      </div>
      <div className="b2b-block__image">
        <ImageTag src={b2b6thImage} />
      </div>
    </section>
  </>;
}

export default PageContent;