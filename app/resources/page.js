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
import SectionVideo from './_components/SectionVideo';
import SectionVideoPosts from './_components/SectionVideoPosts';
import ResourcesVideoSection from './_components/ResourcesVideoSection';

export const metadata = await getPageMetadata(72);

export default async function Resources() {
  const pageId = pagesIds.resourcePage;
  const heroBannerContent = await GetPageHeroBanner(pageId);
  let pageData = await getPageData(pageId);
  let downloadableBlocks = pageData.data?.pages?.edges[0]?.node?.resources?.rDownloads;
  const faqsData = pageData.data?.pages?.edges[0]?.node?.resourceFaqs?.rFaqs;
  const faqsSideImage = pageData.data?.pages?.edges[0]?.node?.resourceFaqs?.rFaqsSideImage;
  const footerFeaturedBlock = await GetFooterFeaturedPageData(pageId);
  const videoData = pageData.data?.pages?.edges[0]?.node?.resourceVideo;

  return <>
    <HeroBanner data={heroBannerContent} />
    {/* <ResourcesVideoSection />
    <SectionVideoPosts /> */}
    <SectionDownload data={downloadableBlocks} />
    <SectionFaqs faqsData={faqsData} faqsSideImage={faqsSideImage} />
    <SectionVideo videoData={videoData} />
    {footerFeaturedBlock?.content && <FooterFeaturedSection data={footerFeaturedBlock} />}
  </>;
}


// Fetching Counter
async function getPageData(pageId) {
  return await graphQLPromise(
    "topBanner",
    `query topBanner {
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
            resourceVideo {
              videoUrl
              videoContent
              videoButton {
                target
                title
                url
              }
              videoBackgroundColor
              videoTextColor
            }
            resources {
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
            resourcesLastSection {
              rLastSectionButton {
                target
                title
                url
              }
              rLastSectionContent
            }
          }
        }
      }
    }`
  );
}