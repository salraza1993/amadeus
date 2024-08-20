import React from 'react';
import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import Head from 'next/head';
import MetaTagCommonForAll from '@/app/components/MetaTagCommonForAll';

export async function metadata() {
  return await getPageMetadata(271);
}

export default async function page() {
  const metadataValue = await metadata();

  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.b2b;
  
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
  </>;
}

async function getPageData() {
  return await graphQLPromise(
    "pageContent",
    `query pageContent {
      pages(where: {id: 271}) {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            b2b {
              b2b1stSections {
                b2bSec1stButton {
                  target
                  title
                  url
                }
                b2bSec1stContent
                b2bSec1stImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2b2ndSections {
                b2bSec2ndContent
                b2bSec2ndImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2b3rdSections {
                b2bSec3rdContent
                b2bSec3rdImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2b4thSections {
                b2bSec4thContent
                b2bSec4thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2b5thSections {
                b2bSec5thHeading
                b2bSec5thList {
                  b2bSec5thListContent
                  b2bSec5thListIcon {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                }
                b2bSec4thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2b6thSections {
                b2bSec6thButton {
                  target
                  title
                  url
                }
                b2bSec6thContent
                b2bSec6thImage {
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