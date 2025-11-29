import '@/app/scss/pages/ResourcesPage.scss';
import HeroBanner from "../components/HeroBanner";
import { graphQLPromise } from '../common/CommonFunctions';
import { getPageMetadata } from '../api/getPageMetadata';
import { pagesIds } from '../helpers/helpers';
import { GetPageHeroBanner } from '../api/getSolutionsSubPagesData';
import SectionDownload from './_components/SectionDownload';
import SectionFaqs from './_components/SectionFaqs';
import FooterFeaturedSection from '../components/FooterFeaturedSection';
import { GetFooterFeaturedPageData } from '../api/getFooterFeaturedData';
import ResourcesVideoSection from './_components/ResourcesVideoSection';

export const metadata = await getPageMetadata(72);

export default async function Resources() {
  const pageId = pagesIds.resourcePage;
  const heroBannerContent = await GetPageHeroBanner(pageId);
  const footerFeaturedBlock = await GetFooterFeaturedPageData(pageId);  

  let resourcesVideoData = await getResourcesVideoData(pageId);
  resourcesVideoData = resourcesVideoData.data?.pages?.edges[0]?.node?.resourcesVideosContent;
  
  let downloadResources = await getDownloadResources(pageId);
  downloadResources = downloadResources.data?.pages?.edges[0]?.node?.resources;
  
  let faqsData = await getFaqsContent(pageId);
  faqsData = faqsData.data?.pages?.edges[0]?.node?.resourceFaqs;
  

  return <>
    <HeroBanner data={heroBannerContent} />
    <ResourcesVideoSection data={resourcesVideoData} />
    <SectionDownload data={downloadResources} />
    <SectionFaqs data={faqsData} />
    {/* <SectionVideo videoData={videoData} /> */}
    {footerFeaturedBlock?.content && <FooterFeaturedSection data={footerFeaturedBlock} />}
  </>;
}

// Fetching Downloadable Resources
async function getDownloadResources(pageId) {
  return await graphQLPromise(
    "downloadableResources",
    `query downloadableResources {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
            resources {
              sectionTitle
              rDownloads {
                rSmallText
                rTitleText
                rDownloadable {
                  rDownlaodTitle
                  rDownloadedFileName
                  rDownlaodFileType
                  rDownloadableFile {
                    node {
                      mediaType
                      mimeType
                      mediaItemUrl
                    }
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

// Fetching Resources Video Data
async function getResourcesVideoData(pageId) {
  return await graphQLPromise(
    "resourcesVideos",
    `query resourcesVideos {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
            resourcesVideosContent {
              fullSizeVideo {
                videoTitle
                videoUrl
                thumbnail {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              moreVideos {
                sectionTitle
                videosPosts {
                  videoTitle
                  videoUrl
                  thumbnail {
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
      }
    }`
  );
}

async function getFaqsContent(pageId) {
  return await graphQLPromise(
    "resourceFaqs",
    `query resourceFaqs {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
            resourceFaqs {
              rFaqs {
                rFaqsContent
                rFaqsHeading
              }
              rFaqsSideImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }`
  );
}