import Head from 'next/head';
import '@/app/scss/pages/HomePage.scss';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import ImageTag from './components/ImageTag';
import Counter from './components/Counter';
import HomeHeroVideo from './components/HomeHeroVideo';
import Link from 'next/link';
import Subscription from './components/Subscription';
import { graphQLPromise } from './common/CommonFunctions';
import { getPageMetadata } from './api/getPageMetadata';
import MetaTagCommonForAll from './components/MetaTagCommonForAll';

export async function metadata() {
  return await getPageMetadata(10);
}

export default async function Home() {
  const metadataValue = await metadata();

  // Checking video || Carousel
  let videoOrCarousel = await getVideoOrCarouseSelection();
  videoOrCarousel = videoOrCarousel?.data?.pages?.edges[0]?.node?.homeVideoOrCarousel?.video;

  // Carousel
  let carousels = await getCarousels();
  carousels = carousels?.data?.sliders?.edges;
  
  // about section data fetching
  let homePageContent = await getAboutSectionData();
  homePageContent = homePageContent?.data?.pages?.edges[0]?.node;
  // Fetching Counter
  let counterContent = await getCounters();
  counterContent = counterContent.data?.pages?.edges[0]?.node?.homeCounter?.counter;
  
  // Fetching Why Amadeus Data
  let whyAmadeusData = await getWhySectionData();
  whyAmadeusData = whyAmadeusData.data?.pages?.edges[0]?.node?.homeWhySection;

  // Fetching Newsletter Content
  let newsletterContent = await getNewsletterContent();
  newsletterContent = newsletterContent.data?.pages?.edges[0]?.node?.newsletterSection;  

  // Fetching Newsletter Content
  let testimonials = await getTestimonials();
  testimonials = testimonials?.data?.testimonials?.edges;  

  return (
    <>
      <Head>
        <title>{metadataValue.title}</title>
        <meta name="description" content={metadataValue.description} />
        <meta name="keywords" content="Travel Technology, Travel Software, Travel technology Company, Online Travel Booking solution, Online Travel Solutions, Software Company, OnlineTravel Software Solutions, travel software company, travel agency software, travel agent software, travel agent software, hotel booking engine, travel technology solutions, agent software, travel agency software, Booking Engine, Grow Online, Grow travel business, go online, secure online solution" />
        {metadataValue.links.map((link, index) => (
          <link key={index} rel={link.rel} href={link.href} />
        ))}
      </Head>
      {
        !videoOrCarousel ? <HomeHeroVideo /> : <Slider data={carousels} />
      }
      
      {metadataValue.links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
      <section className="home-about-section">
        <div className="container">
          <div className="home-about-container">
            <div className="row align-items-center gy-4">
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="content">
                  <div className='d-flex flex-column gap-2'
                    dangerouslySetInnerHTML={{ __html: homePageContent?.content }}></div>
                  <Link
                    href={homePageContent?.homeAboutCTA?.ctaButton.url}
                    target={homePageContent?.homeAboutCTA?.ctaButton.target}
                    className='btn btn-primary btn-lg'>
                    {homePageContent?.homeAboutCTA?.ctaButton.title}
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-end">
                <div className="image">
                  <ImageTag
                    src={homePageContent?.featuredImage?.node?.sourceUrl}
                    alt={homePageContent?.featuredImage?.node?.altText} />
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
                    alt={whyAmadeusData?.whyBlockImage?.node?.altText} />

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
                  <div dangerouslySetInnerHTML={{ __html: whyAmadeusData?.whyContent }}></div>
                  <ul className="content-list">
                    {
                      whyAmadeusData?.list.map((item, index) => {
                        return <li className="content-list__item" key={index}>
                          <span className="icon">
                            <ImageTag src={item.listIcon?.node?.sourceUrl} alt={item?.listIcon?.node?.altText} />
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
              <Testimonial data={testimonials} />
            </div>
          </div>
        </div>
      </section>

      <Subscription content={newsletterContent} />
    </>
  );
}

// Carousels
async function getCarousels() {
  return await graphQLPromise(
    "sliders",
    `query sliders {
      sliders {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }`
  );
}

// Testimonials
async function getTestimonials() {
  return await graphQLPromise(
    "testimonials",
    `query testimonials {
      testimonials {
        edges {
          node {
            featuredImage {
              node {
                altText
                sourceUrl
                title
              }
            }
            content
            title
            testimonialAdditionalInfo {
              nameAgency
              designation
              linkedinPath
              icon
            }
          }
        }
      }
    }`
  );
}

// about section data fetching
async function getVideoOrCarouseSelection() {
  return await graphQLPromise(
    "videoOrCarouse",
    `query videoOrCarouse {
      pages(where: {id: 10}) {
        edges {
          node {
            homeVideoOrCarousel {
              video
            }
          }
        }
      }
    }`
  );
}
async function getAboutSectionData() {
  return await graphQLPromise(
    "homePageContent",
    `query homePageContent {
      pages(where: {id: 10}) {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            homeAboutCTA {
              ctaButton {
                target
                title
                url
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
    "getCounters",
    `query getCounters {
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