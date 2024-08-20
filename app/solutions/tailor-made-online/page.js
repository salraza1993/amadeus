import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import Head from 'next/head';

export async function metadata() {
  return await getPageMetadata(345);
}

export default async function page() {
  const metadataValue = await metadata();

  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.tMO;
  
  return <>
    <Head>
      <title>{metadataValue.title}</title>
      <meta name="description" content={metadataValue.description} />
      <meta name="keywords" content="Travel Technology, Travel Software, Travel technology Company, Online Travel Booking solution, Online Travel Solutions, Software Company, OnlineTravel Software Solutions, travel software company, travel agency software, travel agent software, travel agent software, hotel booking engine, travel technology solutions, agent software, travel agency software, Booking Engine, Grow Online, Grow travel business, go online, secure online solution" />
      {metadataValue.links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
    </Head>

    <HeroBanner data={topBannerData} />
    <PageContent data={pageSectionsData} />
  </>
}

async function getPageData() {
  return await graphQLPromise(
    "pageContent",
    `query pageContent {
      pages(where: {id: 345}) {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            tMO {
              tmo1stSections {
                tmoSec1stButton {
                  target
                  title
                  url
                }
                tmoSec1stContent
                tmoSec1stImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              tmo2ndSections {
                tmoSec2ndContent
                tmoSec2ndImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              tmo3rdSections {
                tmoSec3rdContent
                tmoSec3rdImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              tmo4thSections {
                tmoSec4thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                tmoSec4thContent
              }
              tmo6thSections {
                tmoSec6thContent
                tmoSec6thButton {
                  target
                  title
                  url
                }
                tmoSec6thImage {
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