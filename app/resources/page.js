import '@/app/scss/pages/ResourcesPage.scss';
import HeroBanner from "../components/HeroBanner";
import FaqsAccordion from '../components/FaqsAccordion';
import Link from 'next/link';
import ResourcesVideoSection from '../components/ResourcesVideoSection';
import ImageTag from '../components/ImageTag';
import { graphQLPromise } from '../common/CommonFunctions';
import { getPageMetadata } from '../api/getPageMetadata';
import Head from 'next/head';

export async function metadata() {
  return await getPageMetadata(72);
}

export default async function Resources() {
  const metadataValue = await metadata();

  // Fetching Top Banner Data
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  let downloadableBlocks = pageData.data?.pages?.edges[0]?.node?.resources?.rDownloads;
  const faqsData = pageData.data?.pages?.edges[0]?.node?.resourceFaqs?.rFaqs;
  const faqsSideImage = pageData.data?.pages?.edges[0]?.node?.resourceFaqs?.rFaqsSideImage;
  const lastSectionContent = pageData.data?.pages?.edges[0]?.node?.resourcesLastSection;

  return <>
    <Head>
      <title>{metadataValue.title}</title>
      <meta name="description" content={metadataValue.description} />
      {metadataValue.links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
    </Head>

    <HeroBanner data={topBannerData} />
    {/* <ResourcesVideoSection /> */}
    
    {/* <section className="browse-content-section">
      <div className="container">
        <div className="browse-content-container">
          <h2 className='fs-1 mb-4'>Browse through more content</h2>
          <div className="row g-md-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="browse-content-card">
                <div className="__image">
                  <ImageTag src={"/assets/images/browse-image-1.png"} />
                  <div className="icon">
                    <ImageTag width={'30px'} src={"/assets/images/video-icon.svg"} />
                    <small>Tap and Watch</small>
                  </div>
                </div>
                <div className="__content">
                  <h5>How Make Flight Booking</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="browse-content-card">
                <div className="__image">
                  <ImageTag src={"/assets/images/browse-image-2.png"} />
                  <div className="icon">
                    <ImageTag width={'30px'} src={"/assets/images/video-icon.svg"} />
                    <small>Tap and Watch</small>
                  </div>
                </div>
                <div className="__content">
                  <h5>How Make Hotel Booking</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="browse-content-card">
                <div className="__image">
                  <ImageTag src={"/assets/images/browse-image-3.png"} />
                  <div className="icon">
                    <ImageTag width={'30px'} src={"/assets/images/video-icon.svg"} />
                    <small>Tap and Watch</small>
                  </div>
                </div>
                <div className="__content">
                  <h5>How Consolidator Module works</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="download-section">
      <div className="container">
        <h2 className='fs-1 text-white text-center'>Download  Section</h2>
        <div className="download-container">
          {
            downloadableBlocks.map((item, index) => {
              const fileType = item?.rDownloadable?.rDownloadableFile?.node?.mimeType.split('/')[1];
              const filePath = item?.rDownloadable?.rDownloadableFile?.node?.mediaItemUrl;
              return <div className="download-card" key ={index}>
                <small>{item?.rSmallText}</small>
                <h5>{item?.rTitleText}</h5>
                {filePath && <Link
                  href={filePath}
                  download={item?.rDownloadable?.rDownloadedFileName}
                  type={"." + fileType}
                  target='self'
                  title={item?.rDownloadable?.rDownlaodTitle}
                  className='download-button'>Download Now <i className="fa-solid fa-download"></i>
                </Link>}
              </div>
            })
          }
        </div>
      </div>
    </section>

    <section className="faqs-section">
      <div className="container">
        <div className="faqs-container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <FaqsAccordion data={faqsData} />
            </div>
            <div className="col-12 col-lg-5">
              <div className="image">
                <ImageTag src={faqsSideImage?.node?.sourceUrl} alt={faqsSideImage?.node?.altText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="short-info-section">
      <div className="container">
        <div className="short-info-container">
          <div dangerouslySetInnerHTML={{ __html: lastSectionContent?.rLastSectionContent }}></div>
          <Link
            href={lastSectionContent?.rLastSectionButton?.url}
            target={lastSectionContent?.rLastSectionButton?.target}
            className='btn btn-secondary btn-lg'>
            {lastSectionContent?.rLastSectionButton?.title}
          </Link>
        </div>
      </div>
    </section>

  </>;
}


// Fetching Counter
async function getPageData() {
  return await graphQLPromise(
    "topBanner",
    `query topBanner {
      pages(where: {id: 72}) {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
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