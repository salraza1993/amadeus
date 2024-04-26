"use client";
import { useRef } from 'react';
import { useInView } from "framer-motion";
import ImageTag from '@/app/components/ImageTag';
import b2b2ndImage from "/public/assets/images/b2b-image-1st.png";
import b2b3rdImage from "/public/assets/images/b2b-image-2nd.png";
import b2b4thImage from "/public/assets/images/b2b-image-3rd.png";
import b2b5thImage from "/public/assets/images/b2b-image-4th.png";
import b2b6thImage from "/public/assets/images/b2c-image-5th.png";
import b2bModelImage from "/public/assets/images/b2b-model-image.png";

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
      icon: '/assets/images/b2b-solution-icon-1.svg',
      title: 'Variety of contents for your customer',
      description: 'Customers can have access to your best rates using AOS with GDS, LCC and Hotel Content.'
    },
    {
      icon: '/assets/images/b2b-solution-icon-2.svg',
      title: 'Offer Flexible Payment Options',
      description: 'Consolidator agencies can easily manage wallet for sub agencies to avoid manual payment collection, and also allow Hold Booking and Payment Gateway integration'
    },
    {
      icon: '/assets/images/b2b-solution-icon-3.svg',
      title: 'Keep you customer updated',
      description: "Efficiently manage notifications and itineraries using AOS, ensuring travelers stay updated and organized throughout their journey."
    },
    {
      icon: '/assets/images/b2b-solution-icon-4.svg',
      title: 'Import PNR & Post Booking  Features',
      description: "Sub agents can effortlessly import PNRs via AOS to access consolidator fares and also gain access to post-booking services like void and canceling bookings."
    },
    {
      icon: '/assets/images/b2b-solution-icon-5.svg',
      title: 'Increase your Profitability',
      description: "Comprehensive Admin module enables you to configure mark-ups, Service Fees, Deal Codes etc. at sub agent level."
    },
  ];
  return <>
    <section className="sub-page-block sub-page-block-1st">
      <div className="container">
        <div className="sub-page-block-1st__container">
          <div
            className="b2b-block__content"
            style={{
              transform: block1st.contentInView ? "none" : "translateY(25%)",
              opacity: block1st.contentInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}  
            ref={block1st.contentRef}>
            <h2 className='fs-1 heading'>Connect your sub agents and expand your reach cost effectively.</h2>
            <p>Amadeus Consolidator is a B2B web-based application that allows non IATA Travel agencies to sell varied travel content to their valued customers.</p>
            <button className="btn btn-secondary btn-lg mt-1">Get Started</button>
          </div>
          <div
            style={{
              transform: block1st.imageInView ? "none" : "translateY(25%)",
              opacity: block1st.imageInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: ".8s",
            }} 
            className="b2b-block__image"
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
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block2nd.imageRef} style={{
                transform: block2nd.imageInView ? "none" : "translateY(25%)",
                opacity: block2nd.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag src={b2b3rdImage} />
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content"
                ref={block2nd.contentRef}
                style={{
                  transform: block2nd.contentInView ? "none" : "translateY(25%)",
                  opacity: block2nd.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} >
                <h2 className='fs-1 heading'>Easy To Manage</h2>
                <div className="text">
                  <p>Consolidators can create global business logic at HQ level or locally at Sub Agency Level with priority logic</p>
                  <p>User and role management feature that allows key responsibilities to be isolated with an agency if required.
                  </p>
                  <p>Administration roles can be created for for sub agencies with accesses to required features based on customer requirements.</p>
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
              <div className="b2b-block__content" ref={block3rd.contentRef}
                style={{
                  transform: block3rd.contentInView ? "none" : "translateY(25%)",
                  opacity: block3rd.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h2 className='fs-1 heading'>Customize your own branding</h2>
                <div className="text">
                  <p>Comprehensive Theme Management module which can tailor logos, colors, fonts, and more to reflect your unique identity</p>
                  <p>Empower sub-agents to personalize their B2B sites for a seamless brand experience.</p>
                  <p>Capability to modify website content text according to customer needs.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center">
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
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block4th.imageRef} style={{
                transform: block4th.imageInView ? "none" : "translateY(25%)",
                opacity: block4th.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag src={b2b5thImage} />
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block4th.contentRef}
                style={{
                  transform: block4th.contentInView ? "none" : "translateY(25%)",
                  opacity: block4th.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h2 className='fs-1 heading'>Enhanced Reporting Capabilities</h2>
                <div className="text">
                  <p>Gain insights into key performance metrics such as bookings and revenue, enabling businesses to assess their overall performance, assist in decision making and  identifying market trends</p>
                  <p>Comprehensive reports for sub agency activities with like Customer Statement & Wallet state assisting to evaluate their productivity ensuring adherence to sales targets and contractual agreements.</p>
                  <p>Reporting tools also allows consolidators to track commissions, markups, and other revenue streams generated by sub-agencies, facilitating financial management and forecasting</p>
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
}

export default PageContent