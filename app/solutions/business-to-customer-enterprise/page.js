import React from 'react'
import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import { pagesIds } from '@/app/helpers/helpers';
import { GetAdditionalSectionsData, GetFirstSectionData, GetInfographicsSectionsData, GetSectionsData } from '@/app/api/getSolutionsSubPagesData';
import PageFirstSection from '../components/PageFirstSection';
import { GetFooterFeaturedPageData } from '@/app/api/getFooterFeaturedData';
import FooterFeaturedSection from '@/app/components/FooterFeaturedSection';
import SubSections from '../components/SubSections';
import InfographicSection from '../components/InfographicSection';

export const metadata = await getPageMetadata(318);

export default async function page() {
  const pageId = pagesIds.b2CEnterprisePage;
  let pageData = await getPageData(pageId);
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.b2CE;

  const firstSectionData = await GetFirstSectionData(pageId);
  const subSections = await GetSectionsData(pageId);
  const additionalSections = await GetAdditionalSectionsData(pageId);
  const infographicSections = await GetInfographicsSectionsData(pageId);
  const footerFeaturedBlock = await GetFooterFeaturedPageData(pageId);
  
  return <>
    <HeroBanner data={topBannerData} />
    { firstSectionData?.content && <PageFirstSection data={firstSectionData} /> }
    {
      subSections?.length > 0 && subSections?.map((section, index) => (
        <SubSections key={index} data={section} isEven={index % 2 === 0} />
      ))
    }
    { infographicSections?.title && <InfographicSection data={infographicSections} /> }
    {
      additionalSections?.length > 0 && additionalSections?.map((section, index) => (
        <SubSections key={index} data={section} isEven={index % 2 === 0} />
      ))
    }
    { footerFeaturedBlock?.content && <FooterFeaturedSection data={footerFeaturedBlock} /> }
    
    <br />
    <div className="container bg-danger text-white p-4"><h4 className="text-center m-0">Below: Old Content</h4></div>
    <br />
    <PageContent data={pageSectionsData} />
  </>
}

async function getPageData(pageId) {
  return await graphQLPromise(
    "pageContent",
    `query pageContent {
      pages(where: {id: ${pageId}}) {
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