import React from 'react'
import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import Head from 'next/head';
import MetaTagCommonForAll from '@/app/components/MetaTagCommonForAll';

export async function metadata() {
  return await getPageMetadata(318);
}

export default async function page() {
  const metadataValue = await metadata();

  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.b2CE;
  
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
      pages(where: {id: 318}) {
        edges {
          node {
            b2CE {
              b2ce1stSections {
                b2ceSec1stButton {
                  target
                  title
                  url
                }
                b2ceSec1stContent
                b2ceSec1stImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2ce2ndSections {
                b2ceSec2ndContent
                b2ceSec2ndImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2ce3rdSections {
                b2ceSec3rdContent
                b2ceSec3rdImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2ce4thSections {
                b2ceSec4thContents
                b2ceSec4thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2ce5thSections {
                b2ceSec5thHeading
                b2ceSec5thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                b2ceSec5thList {
                  b2ceSec5thListContent
                  b2ceSec5thListIcon {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
              b2ce6thSections {
                b2ceSec6thButton {
                  target
                  title
                  url
                }
                b2ceSec6thContent
                b2ceSec6thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
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