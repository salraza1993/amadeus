import '@/app/scss/pages/Contact.scss';
import HeroBanner from '../components/HeroBanner';
import ImageTag from '../components/ImageTag';
import ContactForm from '../components/ContactForm';
import { graphQLPromise } from '../common/CommonFunctions';
import { getPageMetadata } from '../api/getPageMetadata';
import Head from 'next/head';

export async function metadata() {
  return await getPageMetadata(81);
}

export default async function Contact() {
  const metadataValue = await metadata();

  // Fetching Page Data
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const formAsideImage = pageData.data?.pages?.edges[0]?.node?.contactFormSideImage?.contactAsideImage?.node;
  
  return (
    <>
      <Head>
        <title>{metadataValue.title}</title>
        <meta name="description" content={metadataValue.description} />
        <meta name="keywords" content="Travel Technology, Travel Software, Travel technology Company, Online Travel Booking solution, Online Travel Solutions, Software Company, OnlineTravel Software Solutions, travel software company, travel agency software, travel agent software, travel agent software, hotel booking engine, travel technology solutions, agent software, travel agency software, Booking Engine, Grow Online, Grow travel business, go online, secure online solution" />
        {metadataValue.links.map((link, index) => (
          <link key={index} rel={link.rel} href={link.href} />
        ))}
      </Head>
      <HeroBanner data={topBannerData} />
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="image">
              <ImageTag src={formAsideImage?.sourceUrl} alt={formAsideImage?.altText} />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

// Fetching Counter
async function getPageData() {
  return await graphQLPromise(
    "contactPageData",
    `query contactPageData {
      pages(where: {id: 81}) {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            contactFormSideImage {
              contactAsideImage {
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