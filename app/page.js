import '@/app/scss/pages/HomePage.scss';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import ImageTag from './components/ImageTag';
import Counter from './components/Counter';
import HomeHeroVideo from './components/HomeHeroVideo';
import Link from 'next/link';
import Subscription from './components/Subscription';
import { graphQLPromise } from './common/CommonFunctions';

export default async function Home() {
  // about section data fetching
  let aboutSectionContent = await getAboutSectionData();
  aboutSectionContent = aboutSectionContent.data?.pages?.edges[0]?.node?.homeAbout;
  // Fetching Counter
  let counterContent = await getCounters();
  counterContent = counterContent.data?.pages?.edges[0]?.node?.homeCounter?.counter;
  
  // Fetching Why Amadeus Data
  let whyAmadeusData = await getWhySectionData();
  whyAmadeusData = whyAmadeusData.data?.pages?.edges[0]?.node?.homeWhySection;

  // Fetching Newsletter Content
  let newsletterContent = await getNewsletterContent();
  newsletterContent = newsletterContent.data?.pages?.edges[0]?.node?.newsletterSection;  

  const whyAmadeusList = [
    {
      icon: '/assets/images/icon-realtime-results.svg',
      title: 'Accurate and Realtime Results',
      description: 'We have optimized the Online Suite to load Air & Hotel results at blazing speeds. We understand that every booking matters.'
    },
    {
      icon: '/assets/images/icon-desktop.svg',
      title: 'Flexible Payment Options',
      description: 'Customers enjoy flexible payment options: pay online with credit cards, hold bookings and pay later, or utilize the wallet option for business-to-business payments.'
    },
    {
      icon: '/assets/images/icon-dollar-card.svg',
      title: 'Optimize Your Online Revenues',
      description: "Multiple Airline Providers, Low Cost Carriers, Hotel Wholesalers are integrated. You also have smart up-sell options to increase conversions at every step of a customer's journey."
    },
  ];


  return (
    <>
      <HomeHeroVideo />
      {/* <Slider /> */}

      <section className="home-about-section">
        <div className="container">
          <div className="home-about-container">
            <div className="row align-items-center gy-4">
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="content">
                  <div className='d-flex flex-column gap-2' dangerouslySetInnerHTML={{ __html: aboutSectionContent.content }}></div>
                  <Link
                    href={aboutSectionContent.ctaButton.url}
                    target={aboutSectionContent.ctaButton.target}
                    className='btn btn-primary btn-lg'>
                    {aboutSectionContent.ctaButton.title}
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-end">
                <div className="image">
                  <ImageTag
                    src={aboutSectionContent.blockImage?.node.sourceUrl}
                    alt={aboutSectionContent.blockImage?.node.atlText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counters-section">
        <div className="container">
          <div className="counters-container">
            <ul className="counters">
              {counterContent.map((count, index) => <Counter key={index} data={count} />)}
            </ul>
          </div>
        </div>
      </section>

      <section className="why-amadeus-section">
        <div className="container">
          <div className="why-amadeus-container">
            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="why-amadeus__image">
                  <ImageTag
                    src={whyAmadeusData?.whyBlockImage?.node?.sourceUrl}
                    alt={whyAmadeusData?.whyBlockImage?.node?.atlText} />

                  <ul className="points">
                    <li className="points__item">
                      <span className="icon">
                        <ImageTag src="/assets/images/icon-ticket.png" />
                      </span>
                      <span>Flexible Payments</span>
                    </li>
                    <li className="points__item">
                      <span className="icon">
                        <ImageTag src="/assets/images/icon-clock.png" />
                      </span>
                      <span>Realtime</span>
                    </li>
                    <li className="points__item">
                      <span className="icon">
                        <ImageTag src="/assets/images/icon-revenue.png" />
                      </span>
                      <span>Revenues</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="why-amadeus__content">
                  <div dangerouslySetInnerHTML={{ __html: whyAmadeusData?.whyContent }}></div>
                  <ul className="content-list">
                    {
                      whyAmadeusData?.list.map((item, index) => {
                        return <li className="content-list__item" key={index}>
                          <span className="icon">
                            <ImageTag src={item.listIcon?.node?.sourceUrl} alt={item?.listIcon?.node?.atlText} />
                          </span>
                          <div className="text">
                            <h5 className='fw-bold'>{item?.listHeading}</h5>
                            <div dangerouslySetInnerHTML={{ __html: item?.listContent}}></div>
                          </div>
                        </li>;
                      })
                    }
                  </ul>
                  <Link
                    href={whyAmadeusData?.linkButton.url}
                    target={whyAmadeusData?.linkButton?.target}
                    className='btn btn-primary btn-lg mt-4'>{whyAmadeusData?.linkButton?.title}</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-container">
            <h2 className='fs-1 text-center font-amadeus-medium'>What Our Customers Say</h2>
            <div className="testimonial-card-container">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>

      <Subscription content={newsletterContent} />
    </>
  );
}


// about section data fetching
async function getAboutSectionData() {
  return await graphQLPromise(
    "homeAboutSection",
    `query homeAboutSection {
      pages(where: {id: 10}) {
        edges {
          node {
            homeAbout {
              content
              ctaButton {
                target
                title
                url
              }
              blockImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }`
  );
}
// Fetching Counter
async function getCounters() {
  return await graphQLPromise(
    "homeCounterSection",
    `query homeCounterSection {
      pages(where: {id: 10}) {
        edges {
          node {
            homeCounter {
              counter {
                duration
                label
                value
              }
            }
          }
        }
      }
    }`
  );
}
// Fetching Why Amadeus Section Data
async function getWhySectionData() {
  return await graphQLPromise(
    "homeWhyAmadeusSection",
    `query homeWhyAmadeusSection {
      pages(where: {id: 10}) {
        edges {
          node {
            homeWhySection {
              list {
                listContent
                listHeading
                listIcon {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              linkButton {
                target
                title
                url
              }
              whyContent
              whyBlockImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }`
  );
}

// Newsletter Content Fetching
async function getNewsletterContent() {
  return await graphQLPromise(
    "homeNewsletterSection",
    `query homeNewsletterSection {
      pages(where: {id: 10}) {
        edges {
          node {
            newsletterSection {
              newsletterText
              newsletterHeading
            }
          }
        }
      }
    }`
  );
}