import React from 'react'
import ImageTag from '../ImageTag';
import Link from 'next/link';

function HomeWhySection({ data }) {
  const { whyBlockImage, whyContent, list, linkButton } = data;
  return (
    <section className="why-amadeus-section">
      <div className="container">
        <div className="why-amadeus-container">
          <div className="row">
            <div className="col-12 col-xl-6">
              <div className="why-amadeus__image">
                <ImageTag
                  src={ whyBlockImage?.node?.sourceUrl }
                  alt={ whyBlockImage?.node?.altText } />

                <ul className="points">
                  <li className="points__item">
                    <span className="icon">
                      <ImageTag src="/assets/images/icon-ticket.png" alt="Ticket Icon" />
                    </span>
                    <span>Flexible Payments</span>
                  </li>
                  <li className="points__item">
                    <span className="icon">
                      <ImageTag src="/assets/images/icon-clock.png" alt="Clock Icon" />
                    </span>
                    <span>Realtime</span>
                  </li>
                  <li className="points__item">
                    <span className="icon">
                      <ImageTag src="/assets/images/icon-revenue.png" altText="Revenue Icon" />
                    </span>
                    <span>Revenues</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="why-amadeus__content">
                <div dangerouslySetInnerHTML={{ __html: whyContent }}></div>
                <ul className="content-list">
                  {
                    list.map((item, index) => {
                      return <li className="content-list__item" key={index}>
                        <span className="icon">
                          <ImageTag src={ item.listIcon?.node?.sourceUrl } alt={ item?.listIcon?.node?.altText } />
                        </span>
                        <div className="text">
                          <h5 className='fw-bold'>{item?.listHeading}</h5>
                          <div dangerouslySetInnerHTML={{ __html: item?.listContent }}></div>
                        </div>
                      </li>;
                    })
                  }
                </ul>
                <Link
                  href={ linkButton.url }
                  target={ linkButton?.target }
                  className='btn btn-primary btn-lg mt-4'>{ linkButton?.title }</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeWhySection