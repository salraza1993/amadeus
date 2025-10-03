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
import HomeAboutSection from './components/homePage/HomeAboutSection';
import HomeCounterSection from './components/homePage/HomeCounterSection';
import HomeWhySection from './components/homePage/HomeWhySection';
import HomeTestimonials from './components/homePage/HomeTestimonials';
import HomeContentCarousel from './components/homePage/HomeContentCarousel';
import HomeTrustPilotSection from './components/homePage/HomeTrustPilotSection';
import HomeSpecialSection from './components/homePage/HomeSpecialSection';
import { GetFooterFeaturedPageData } from './api/getFooterFeaturedData';
import { pagesIds } from './helpers/helpers';

export async function metadataFunc() {
  let obj = await getPageMetadata(10);
  return obj;
}

export const metadata = await getPageMetadata(10);

export default async function Home() {
  const pageID = pagesIds.homePage;
  // Checking video || Carousel
  let videoOrCarousel = await getVideoOrCarouseSelection(pageID);
  videoOrCarousel = videoOrCarousel?.data?.pages?.edges[0]?.node?.homeVideoOrCarousel?.video;

  // Carousel
  let carousels = await getCarousels();
  carousels = carousels?.data?.sliders?.edges;
  
  // about section data fetching
  let homePageContent = await getAboutSectionData(pageID);
  homePageContent = homePageContent?.data?.pages?.edges[0]?.node;
  // Fetching Counter
  let counterContent = await getCounters(pageID);
  counterContent = counterContent.data?.pages?.edges[0]?.node?.homeCounter?.counter;
  
  // Fetching Why Amadeus Data
  let whyAmadeusData = await getWhySectionData(pageID);
  whyAmadeusData = whyAmadeusData.data?.pages?.edges[0]?.node?.homeWhySection;

  // Fetching Newsletter Content
  let newsletterContent = await getNewsletterContent(pageID);
  newsletterContent = newsletterContent.data?.pages?.edges[0]?.node?.newsletterSection;  

  // Fetching Newsletter Content
  let testimonials = await getTestimonials();
  testimonials = testimonials?.data?.testimonials?.edges;  

  const footerFeatureContent = await GetFooterFeaturedPageData(pageID);
  const carouselContentResponse = await getContentCarousel(pageID);
  const carouselsContent = carouselContentResponse?.data?.pages?.nodes[0]?.homePageContent?.contentCarousel;

  return (
    <>
      {
        !videoOrCarousel ? <HomeHeroVideo /> : <Slider data={carousels} />
      }      
      <HomeAboutSection sectionContent={homePageContent} />
      <HomeContentCarousel data={carouselsContent} />
      <HomeCounterSection counter={counterContent} />
      <HomeWhySection data={whyAmadeusData} />
      <HomeTestimonials data={testimonials} />
      <HomeTrustPilotSection />
      <Subscription content={newsletterContent} />
      <HomeSpecialSection data={footerFeatureContent} />
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
async function getVideoOrCarouseSelection(pageID) {
  return await graphQLPromise(
    "videoOrCarouse",
    `query videoOrCarouse {
      pages(where: {id: ${pageID}}) {
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
async function getAboutSectionData(pageID) {
  return await graphQLPromise(
    "homePageContent",
    `query homePageContent {
      pages(where: {id: ${pageID}}) {
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
async function getCounters(pageID) {
  return await graphQLPromise(
    "getCounters",
    `query getCounters {
      pages(where: {id: ${pageID}}) {
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
async function getWhySectionData(pageID) {
  return await graphQLPromise(
    "homeWhyAmadeusSection",
    `query homeWhyAmadeusSection {
      pages(where: {id: ${pageID}}) {
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
async function getNewsletterContent(pageID) {
  return await graphQLPromise(
    "homeNewsletterSection",
    `query homeNewsletterSection {
      pages(where: {id: ${pageID}}) {
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

// Content Carousel Fetching
async function getContentCarousel(pageID) {
  return await graphQLPromise(
    "homeContentCarousel",
    `query homeContentCarousel {
      pages(where: {id: ${pageID}}) {
        nodes {
          homePageContent {
            contentCarousel {
              content
              image {
                node {
                  altText
                  sourceUrl
                }
              }
              button {
                target
                url
                title
              }
            }
          }
        }
      }
    }`
  );
}