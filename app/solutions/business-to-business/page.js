import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import { pagesIds } from '@/app/helpers/helpers';
import { GetAdditionalSectionsData, GetFirstSectionData, GetInfographicsSectionsData, GetSectionsData } from '@/app/api/getSolutionsSubPagesData';
import FooterFeaturedSection from '@/app/components/FooterFeaturedSection';
import { GetFooterFeaturedPageData } from '@/app/api/getFooterFeaturedData';
import PageFirstSection from '../components/PageFirstSection';
import SubSections from '../components/SubSections';
import InfographicSection from '../components/InfographicSection';

export const metadata = await getPageMetadata(271);

export default async function page() {
  const pageId = pagesIds.b2bSolutionsPage;
  let pageData = await getPageData(pageId);
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const pageSectionsData = pageData.data?.pages?.edges[0]?.node?.b2b;

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
  </>;
}

async function getPageData(pageId) {
  return await graphQLPromise(
    "pageContent",
    `query pageContent {
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