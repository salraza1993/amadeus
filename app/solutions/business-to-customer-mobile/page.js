import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import PageFirstSection from '../components/PageFirstSection';
import { GetAdditionalSectionsData, GetFirstSectionData, GetInfographicsSectionsData, GetSectionsData } from '@/app/api/getSolutionsSubPagesData';
import { pagesIds } from '@/app/helpers/helpers';
import FooterFeaturedSection from '@/app/components/FooterFeaturedSection';
import { GetFooterFeaturedPageData } from '@/app/api/getFooterFeaturedData';
import SubSections from '../components/SubSections';
import InfographicSection from '../components/InfographicSection';

export const metadata = await getPageMetadata(373);

export default async function page() {
  const pageId = pagesIds.b2CMobilePage;
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.b2CM;

  const firstSectionData = await GetFirstSectionData(pageId);
  const subSections = await GetSectionsData(pageId);
  const additionalSections = await GetAdditionalSectionsData(pageId);
  const infographicSections = await GetInfographicsSectionsData(pageId);
  const footerFeaturedBlock = await GetFooterFeaturedPageData(pageId);
  
  return <>
    <HeroBanner data={topBannerData} />
    {firstSectionData?.content && <PageFirstSection data={firstSectionData} />}
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
    {footerFeaturedBlock?.content && <FooterFeaturedSection data={footerFeaturedBlock} />}
    <br />
    <div className="container bg-danger text-white p-4"><h4 className="text-center m-0">Below: Old Content</h4></div>
    <br />
    <PageContent data={pageSectionsData} />
  </>
}

async function getPageData() {
  return await graphQLPromise(
    "pageContent",
    `query pageContent {
      pages(where: {id: 373}) {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            b2CM {
              b2cm1stSections {
                b2cmSec1stButton {
                  target
                  title
                  url
                }
                b2cmSec1stContent
                b2cmSec1stImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2cm2ndSections {
                b2cmSec2ndContent
                b2cmSec2ndImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2cm3rdSections {
                b2cmSec3rdContent
                b2cmSec3rdImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2cm4thSections {
                b2cmSec4thContent
                b2cmSec4thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              b2cm5thSections {
                b2cmSec5thHeading
                b2cmSec5thImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                b2cmSec5thList {
                  b2cmSec5thListContent
                  b2cmSec5thListIcon {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
              b2cm6thSections {
                b2cmSec6thButton {
                  target
                  title
                  url
                }
                b2cmSec6thContent
                b2cmSec6thImage {
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