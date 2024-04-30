"use client";
import { useRef } from 'react';
import { useInView } from "framer-motion";

import ImageTag from '@/app/components/ImageTag';

import b2b2ndImage from "/public/assets/images/b2c-enterprise-image-1st.png";
import b2b3rdImage from "/public/assets/images/b2c-enterprise-image-2nd.png";
import b2b4thImage from "/public/assets/images/b2c-enterprise-image-3rd.png";
import b2b5thImage from "/public/assets/images/b2c-enterprise-image-4th.png";
import b2b6thImage from "/public/assets/images/b2c-image-5th.png";
import b2bModelImage from "/public/assets/images/b2-enterprise-model-image.png";

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
      icon: '/assets/images/b2c-enterprise-icon-1.svg',
      title: 'Connect your site with Meta Players',
      description: 'Stand Out from other travel website by integrating our Meta Engines which can help you give the best rates in the market and at the same time give you competitive advantage.'
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-2.svg',
      title: 'Custom Domain & Multi geography',
      description: 'Tailor your website with a personalized touch by leveraging your own custom domain to reinforce your brand identity. Additionally, with the Multi-Geography feature, deliver customized content to diverse regions, enhancing engagement and relevance.'
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-3.svg',
      title: 'Analytics & Search Engine Optimization',
      description: "Enhance your website's visibility and ranking with SEO while gaining valuable user insights through Analytics, enabling data-driven decisions for improved user experience and higher conversions in the travel industry."
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-4.svg',
      title: 'Flexible Payment Options',
      description: "Empower your customers with versatile payment choices, enabling seamless transactions through various payment gateways and the convenient option to pay later by holding their bookings. AOS boasts compatibility with a wide array of over 20 payment gateways."
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-5.svg',
      title: 'Cross Sell - Unlock new Revenue stream',
      description: "Enhance customer experience and maximize revenue, by suggesting your customer related products & services on booking completion."
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-6.svg',
      title: 'Empower  your Customer',
      description: "Enhance profitability by empowering customers to customize their travel journey with ancillary services and airline fare families from both GDS and LSS, fostering greater satisfaction and loyalty."
    },
  ];
  return (
    <>
      <section className="sub-page-block sub-page-block-1st">
        <div className="container">
          <div className="sub-page-block-1st__container">
            <div className="b2b-block__content" style={{
              transform: block1st.contentInView ? "none" : "translateY(25%)",
              opacity: block1st.contentInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
              ref={block1st.contentRef}>
              <h2 className='fs-1 heading'>Allow your customers to Navigate the World with Ease</h2>
              <p>Unlock seamless travel experiences with our powerful online booking engine, tailored for your convenience</p>
              <button className="btn btn-secondary btn-lg mt-1">Get Started</button>
            </div>
            <div className="b2b-block__image"
              style={{
                transform: block1st.imageInView ? "none" : "translateY(25%)",
                opacity: block1st.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}
              ref={block1st.imageRef} >
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
                  <ImageTag src={b2b3rdImage} width={"100%"} />
                </div>
              </div>
              <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                <div className="b2b-block__content" ref={block2nd.contentRef}
                  style={{
                    transform: block2nd.contentInView ? "none" : "translateY(25%)",
                    opacity: block2nd.contentInView ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}>
                  <h2 className='fs-1 heading'>All the contents in one place</h2>
                  <div className="text">
                    <p>Our search technology can help you to combine the GDS and LCC recommendations.  Convert even more by automatically proposing the best alternate match when the travellers are unable to book the selected flights. </p>
                    <p>Amadeus Online Suite provides  automatic cross-selling proposals on other non-air services such as hotels, tour packages, visa services and many more.</p>
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
                  <h2 className='fs-1 heading'>Effortless Management of modules</h2>
                  <div className="text">
                    <p>Robust Admin module offering configuration options for agency details, mark ups, discounts, and deal codes.</p>
                    <p>Simplified Supplier Settings Management for configuring airline, ticketing, time-limit, and queue settings effortlessly.</p>
                    <p>User creation feature in the admin module allows mapping access to various administrative modules based on specific requirements.</p>
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
                  <h2 className='fs-1 heading'>Offer more to your customer using CMS module</h2>
                  <div className="text">
                    <p>Enhance your customer experience by effortlessly incorporating and offering tailored content on your web pages using Content Management  System (CMS) Module.</p>
                    <p>CMS module contains various Sub-modules like  Top Destinations, Popular Hotels, Offers, and Testimonials .</p>
                    <p>It also allows you to create static Packages with options to show Day by Day itinerary, uploading images, inclusions, exclusions etc.</p>
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
              Explore the World of Benefits of <br />
              <strong className='text-secondary'> Amadeus Online Suite</strong>
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
          <h2 className='fs-1'>Accelerate sales with smarter and more effective strategies</h2>
          <a href="" className='btn btn-light btn-lg'>Get Started</a>
        </div>
        <div className="b2b-block__image">
          <ImageTag src={b2b6thImage} />
        </div>
      </section>
    </>
  );
}

export default PageContent;