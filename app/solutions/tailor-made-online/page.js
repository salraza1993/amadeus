import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import { pagesIds } from '@/app/helpers/helpers';
import { GetAdditionalSectionsData, GetFirstSectionData, GetInfographicsSectionsData, GetSectionsData } from '@/app/api/getSolutionsSubPagesData';
import PageFirstSection from '../components/PageFirstSection';
import FooterFeaturedSection from '@/app/components/FooterFeaturedSection';
import { GetFooterFeaturedPageData } from '@/app/api/getFooterFeaturedData';
import SubSections from '../components/SubSections';
import InfographicSection from '../components/InfographicSection';

export const metadata = await getPageMetadata(345);

export default async function page() {
  const pageId = pagesIds.tailoredMadePage;
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.tMO;

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

async function getPageData(pageId) {
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