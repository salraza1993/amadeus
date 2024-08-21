import React from 'react'
import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';

export const metadata = await getPageMetadata(318);

export default async function page() {

  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.b2CE;
  
  return <>
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