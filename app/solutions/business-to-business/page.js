import React from 'react';
import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';

export const metadata = {
  title: 'Business To Business',
  description: 'Solutions',
}

export default async function page() {
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.b2b;
  
  return <>
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