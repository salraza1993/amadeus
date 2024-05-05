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
      icon: '/assets/images/b2b-solution-icon-1.svg',
      title: 'Variety of travel content for your customer',
      description: 'Customers can have access to your best rates using Amadeus Online Suite with GDS, Low-Cost Carrier, and Hotel Content.'
    },
    {
      icon: '/assets/images/b2b-solution-icon-2.svg',
      title: 'Offer Flexible Payment Options',
      description: 'Our built-in wallet enables agencies to top-up and pay for bookings.  Agencies can also hold bookings and make payments through different payment gateways. '
    },
    {
      icon: '/assets/images/b2b-solution-icon-3.svg',
      title: 'Keep your customer updated',
      description: "Efficiently manage notifications and itineraries, ensuring travelers stay updated and organized throughout their trip."
    },
    {
      icon: '/assets/images/b2b-solution-icon-4.svg',
      title: 'Import PNR & Post Booking Features',
      description: "Access special fares and gain access to post-bookings and access services such as voiding and cancellation of bookings."
    },
    {
      icon: '/assets/images/b2b-solution-icon-5.svg',
      title: 'Increase your Profitability',
      description: "The comprehensive Admin module enables you to configure mark-ups, service fees, deal codes, and much more to increase revenues."
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
              <div className="b2b-block__content"
                ref={block2nd.contentRef}
                style={{
                  transform: block2nd.contentInView ? "none" : "translateY(25%)",
                  opacity: block2nd.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} >
                <h2 className='fs-1 heading'>Easy To Manage</h2>
                <div className="text">
                  <p>With Online Suite, Consolidators can efficiently create and group business rules for Sub Agencies.
                    The user and role management feature in Online Suite allows key responsibilities to be assigned to different users.</p>
                  <p>Administration roles can be created for Sub Agencies having controlled access to the required features based on customer requirements.</p>
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
                <h2 className='fs-1 heading'>Express your brand online</h2>
                <div className="text">
                  <p>Comprehensive Theme Management can tailor logos, colors, fonts, and more to reflect your unique identity.
                    Capability to quickly modify website text in line with your needs.</p>
                  <p>Empower sub-agents to personalize their B2B sites for a seamless brand experience.</p>
                  <p>Capability to modify website content text according to customer needs.</p>
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
                <h2 className='fs-1 heading'>Enhanced Reporting Capabilities</h2>
                <div className="text">
                  <p>Gain insights into key performance metrics such as bookings and revenue, enabling businesses to assess their overall performance, assist in decision-making, and identify market trends such as search bookings and revenue.</p>
                  <p>Comprehensive reports for Sub Agencies like Customer Statement & Wallet assist them in managing productivity ensuring their adherence to sales targets and contractual agreements.</p>
                  <p>Reporting tools also allow Business Consolidators to track commissions, markups, and other revenue streams that Sub-Agencies generate, facilitating financial management and forecasting.</p>
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
            Benefit today with
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
        <h2 className='fs-1'>Don’t get left behind. Try Online Suite today!</h2>
        <Link href={"/contact"} className='btn btn-light btn-lg'>Get Started</Link>
      </div>
      <div className="b2b-block__image">
        <ImageTag src={b2b6thImage} />
      </div>
    </section>
  </>
}

export default PageContent