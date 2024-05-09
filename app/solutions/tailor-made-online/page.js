import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';

export default async function page() {
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.tMO;
  
  return <>
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