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
      icon: '/assets/images/b2c-enterprise-icon-1.svg',
      title: 'Connect your site with Meta Search Engines',
      description: 'Grow your online business through seamless connectivity to the popular travel meta-search engines in the market. Benefit from hundreds of bookings per day using this module.'
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-2.svg',
      title: 'Customize content for every country you operate in',
      description: 'Tailor your website with a personalized touch by leveraging your custom domain to reinforce your brand identity. Additionally, the multi-geography feature, delivers customized content to diverse regions, enhancing engagement and relevance.'
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-3.svg',
      title: 'Analytics & Search Engine Optimization',
      description: "Enhance your website's visibility and ranking with SEO while gaining valuable user insights through Analytics, enabling data-driven decisions leading to higher conversions."
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-4.svg',
      title: 'Flexible Payment Options',
      description: "Amadeus Online Suite has more than 20 payment gateways integrated including buy now pay later options for your market. Our team can integrate new and smart payment options in a short time"
    },
    {
      icon: '/assets/images/b2c-enterprise-icon-5.svg',
      title: 'Improve your margin with cross-sell',
      description: "Option to sell other products at various points of a customer journey ensuring transaction success."
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
                  <h2 className='fs-1 heading'>One-stop shop for all content</h2>
                  <div className="text">
                    <p>Our search technology can help you combine the GDS and Low-Cost Carrier recommendations. Convert even more by automatically proposing the best alternate match when the travelers are unable to book the selected flights.</p>
                    <p>Amadeus Online Suite provides automatic cross-selling proposals on other services such as hotels, tour packages, visa services, and many more.</p>
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
                  <h2 className='fs-1 heading'>Stay in control of your online business</h2>
                  <div className="text">
                    <p>Online Suite has an administration module to configure options for markups, discounts, and deal codes.</p>
                    <p>Easily configure airline and ticketing settings from the Supplier Management feature.</p>
                    <p>In addition to that, the user creation feature provides users access to various modules based on specific requirements.</p>
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
                  <h2 className='fs-1 heading'>Smart Content Management System</h2>
                  <div className="text">
                    <p>Enhance your customer experience by offering tailored content on your web pages using the Content Management System (CMS) Module.</p>
                    <p>The CMS module enables you to manage top destinations, popular hotels, offers, and testimonials. It also allows you to create static Packages covering day-to-day itineraries, uploading images, inclusions, exclusions, and much more. </p>
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
              Go the extra mile with  <br />
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
          <h2 className='fs-1'>Stay ahead of the competition by deploying Amadeus Online Suite for your business</h2>
          <Link href={"/contact"} className='btn btn-light btn-lg'>Get Started</Link>
        </div>
        <div className="b2b-block__image">
          <ImageTag src={b2b6thImage} />
        </div>
      </section>
    </>
  );
}

export default PageContent;