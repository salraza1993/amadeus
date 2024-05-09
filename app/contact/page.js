import '@/app/scss/pages/Contact.scss';
import HeroBanner from '../components/HeroBanner';
import ImageTag from '../components/ImageTag';
import ContactForm from '../components/ContactForm';
import { graphQLPromise } from '../common/CommonFunctions';

export default async function Contact() {
  // Fetching Page Data
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const formAsideImage = pageData.data?.pages?.edges[0]?.node?.contactFormSideImage?.contactAsideImage?.node;
  
  return (
    <>
      <HeroBanner data={topBannerData} />
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="image">
              <ImageTag src={formAsideImage.sourceUrl} alt={formAsideImage.altText} />
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