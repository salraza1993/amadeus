import '@/app/scss/pages/HomePage.scss';

import Slider from './components/Slider';
import HomeHeroVideo from './components/HomeHeroVideo';
import Subscription from './components/Subscription';
import { graphQLPromise } from './common/CommonFunctions';
import { getPageMetadata } from './api/getPageMetadata';
import HomeAboutSection from './components/homePage/HomeAboutSection';
import HomeCounterSection from './components/homePage/HomeCounterSection';
import HomeWhySection from './components/homePage/HomeWhySection';
import HomeTestimonials from './components/homePage/HomeTestimonials';
import HomeContentCarousel from './components/homePage/HomeContentCarousel';
import HomeSpecialSection from './components/homePage/HomeSpecialSection';
import { GetFooterFeaturedPageData } from './api/getFooterFeaturedData';
import { pagesIds } from './helpers/helpers';
import HomePartnersSection from './components/homePage/HomePartnersSection';

export async function metadataFunc() {
  let obj = await getPageMetadata(10);
  return obj;
}

export const metadata = await getPageMetadata(10);

export default async function Home() {
  const pageId = pagesIds.homePage;

  // Fetching Home Video Data
  let videoData = await getHomeVideo(pageId);
  videoData = videoData?.data?.pages?.edges[0]?.node?.homeVideo;

  // Carousel
  let carousels = await getCarousels();
  carousels = carousels?.data?.sliders?.edges;
  
  // about section data fetching
  let homePageContent = await getAboutSectionData(pageId);
  homePageContent = homePageContent?.data?.pages?.edges[0]?.node;
  // Fetching Counter
  let counterContent = await getCounters(pageId);
  counterContent = counterContent.data?.pages?.edges[0]?.node?.homeCounter?.counter;
  
  // Fetching Why Amadeus Data
  let whyAmadeusData = await getWhySectionData(pageId);
  whyAmadeusData = whyAmadeusData.data?.pages?.edges[0]?.node?.homeWhySection;

  // Fetching Newsletter Content
  let newsletterContent = await getNewsletterContent(pageId);
  newsletterContent = newsletterContent.data?.pages?.edges[0]?.node?.newsletterSection;  

  // Fetching Newsletter Content
  let testimonials = await getTestimonials();
  testimonials = testimonials?.data?.testimonials?.edges;  

  // Fetching Partners Logos
  let partnersLogos = await getPartnersLogos(pageId);
  partnersLogos = partnersLogos?.data?.pages?.edges[0]?.node?.homePartners;

  const footerFeatureContent = await GetFooterFeaturedPageData(pageId);
  const carouselContentResponse = await getContentCarousel(pageId);
  const carouselsContent = carouselContentResponse?.data?.pages?.nodes[0]?.homePageContent?.contentCarousel;

  return (
    <>
      {
        videoData.videoPermission ? <HomeHeroVideo data={videoData} /> : <Slider data={carousels} />
      }      
      <HomeAboutSection sectionContent={homePageContent} />
      <HomeContentCarousel data={carouselsContent} />
      <HomeCounterSection counter={counterContent} />
      <HomeWhySection data={whyAmadeusData} />
      <HomeTestimonials data={testimonials} />
      {partnersLogos && <HomePartnersSection data={partnersLogos} />}
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

async function getHomeVideo(pageId) {
  return await graphQLPromise(
    "homeVideo",
    `query homeVideo {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
            homeVideo {
              videoPath
              videoContent
              videoPermission
              videoButton {
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

// Fetching Partners Logos
async function getPartnersLogos(pageId) {
  return await graphQLPromise(
    "partnersLogos",
    `query partnersLogos {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
            homePartners {
              partnerSectionContent
              partnersLogoes {
                edges {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }`
  );
}

// Fetching About Section Data
async function getAboutSectionData(pageId) {
  return await graphQLPromise(
    "homePageContent",
    `query homePageContent {
      pages(where: {id: ${pageId}}) {
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
async function getCounters(pageId) {
  return await graphQLPromise(
    "getCounters",
    `query getCounters {
      pages(where: {id: ${pageId}}) {
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
async function getWhySectionData(pageId) {
  return await graphQLPromise(
    "homeWhyAmadeusSection",
    `query homeWhyAmadeusSection {
      pages(where: {id: ${pageId}}) {
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
async function getNewsletterContent(pageId) {
  return await graphQLPromise(
    "homeNewsletterSection",
    `query homeNewsletterSection {
      pages(where: {id: ${pageId}}) {
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