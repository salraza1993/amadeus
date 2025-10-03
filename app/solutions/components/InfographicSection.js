'use client';
import ImageTag from '@/app/components/ImageTag';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

function useBlockInView() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const imageInView = useInView(imageRef, { margin: "0px 0px -100px 0px", once: true });
  const contentInView = useInView(contentRef, { margin: "0px 0px -100px 0px", once: true });

  return { imageRef, imageInView, contentRef, contentInView };
}
function InfographicSection({ data }) {
  const infoBlockRef = useBlockInView();
  const dataBlocks = {
    title: "<div></div>\n<h2>Explore the World of Benefits of Amadeus Online Suite</h2>\n",
    image: {
      node: {
        altText: "Girl with Mobile",
        sourceUrl: "https://cmsadmin.amadeusonlinesuite.net/wp-content/uploads/2024/08/b2b-model-image.webp"
      }
    },
    infoList: [
      {
        content: "<h5 class=\"fw-bold\">Variety of travel content for your customer</h5>\n<p>Customers can have access to your best rates using Amadeus Online Suite with GDS, Low-Cost Carrier, and Hotel Content.</p>\n",
        icon: {
          node: {
            altText: "list icon",
            sourceUrl: "https://cmsadmin.amadeusonlinesuite.net/wp-content/uploads/2024/07/b2b-solution-icon-1-1.svg"
          }
        }
      },
      {
        content: "<h5 class=\"fw-bold\">Offer Flexible Payment Options</h5>\n<p>Our built-in wallet enables agencies to top-up and pay for bookings. Agencies can also hold bookings and make payments through different payment gateways.</p>\n",
        icon: {
          node: {
            altText: "revenue icon",
            sourceUrl: "https://cmsadmin.amadeusonlinesuite.net/wp-content/uploads/2024/07/b2b-solution-icon-2-1.svg"
          }
        }
      },
      {
        content: "<h5 class=\"fw-bold\">Keep your customer updated</h5>\n<p>Efficiently manage notifications and itineraries, ensuring travelers stay updated and organized throughout their trip.</p>\n",
        icon: {
          node: {
            altText: "Notification icon",
            sourceUrl: "https://cmsadmin.amadeusonlinesuite.net/wp-content/uploads/2024/07/b2b-solution-icon-3-1.svg"
          }
        }
      },
      {
        content: "<h5 class=\"fw-bold\">Import PNR &amp; Post Booking Features</h5>\n<p>Access special fares and gain access to post-bookings and access services such as voiding and cancellation of bookings.</p>\n",
        icon: {
          node: {
            altText: "booking icon",
            sourceUrl: "https://cmsadmin.amadeusonlinesuite.net/wp-content/uploads/2024/07/b2b-solution-icon-4-1.svg"
          }
        }
      },
      {
        content: "<h5 class=\"fw-bold\">Increase your Profitability</h5>\n<p>The comprehensive Admin module enables you to configure mark-ups, service fees, deal codes, and much more to increase revenues.</p>\n",
        icon: {
          node: {
            altText: "Charts icon",
            sourceUrl: "https://cmsadmin.amadeusonlinesuite.net/wp-content/uploads/2024/07/b2b-solution-icon-5-1.svg"
          }
        }
      }
    ]
  };
  return (
    <section className='sub-section-block infographic-section'>
      <div className="container">
        <div className="sub-section-block__content-wrapper">
          <div className='block-title' dangerouslySetInnerHTML={{ __html: data?.title }}></div>
          <div className="row g-4">
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <div className="b2b-block__image" ref={infoBlockRef.imageRef} style={{
                transform: infoBlockRef.imageInView ? "none" : "translateY(25%)",
                opacity: infoBlockRef.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag
                  src={data?.image?.node?.sourceUrl}
                  alt={data?.image?.node?.altText} />
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={infoBlockRef.contentRef}
                style={{
                  transform: infoBlockRef.contentInView ? "none" : "translateY(25%)",
                  opacity: infoBlockRef.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <ul className="content-list">
                  {
                    data?.infoList?.map((item, index) => {
                      return <li className="content-list__item" key={index}>
                        <span className="icon">
                          <ImageTag src={item?.icon?.node?.sourceUrl} alt={item?.icon?.node?.altText} />
                        </span>
                        <div className="text" dangerouslySetInnerHTML={{ __html: item?.content }}></div>
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
  )
}

export default InfographicSection
