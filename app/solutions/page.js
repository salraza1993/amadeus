import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from "../components/HeroBanner";
import bannerImage from "/public/assets/images/solution-hero-banner.png";
import ProvidersCarousel from '../components/ProvidersCarousel';
import PaymentProvidersCarousel from '../components/PaymentProvidersCarousel';
import SolutionsBlocks from '../components/SolutionsPage/SolutionsBlocks';
import Solution4thSection from '../components/SolutionsPage/Solution4thSection';
import { graphQLPromise } from '../common/CommonFunctions';

export const metadata = {
  title: 'Solutions',
  description: 'Solutions',
}

export default async function Solutions() {
  
  // Fetching Top Banner Data
  let pageData = await getPageData();
  pageData = pageData.data?.pages?.edges[0]?.node;
  const solutionBlocks = pageData.solutionBlocks?.solutionsPages;

  const providersLogos = pageData?.solutionTravelProviders?.travelProviders?.edges;
  const paymentLogos = pageData?.solutionPaymentProviders?.paymentProviders?.edges;
  const section4thData = pageData?.solution4thSection;
  
  return <>
    <HeroBanner data={pageData} />
    <SolutionsBlocks data={solutionBlocks} />    
    <section className="providers-section">
      <div className="container">
        <div className="providers-container">
          <h2 className='text-center'>Connect to multiple travel providers with Amadeus Online Suite</h2>
          <ProvidersCarousel data={providersLogos} />
        </div>
      </div>
    </section>

    <section className="providers-section payment-providers-section">
      <div className="container">
        <div className="providers-container">
          <h2 className='text-center'>A World of Payment Solutions to Grow Your Revenues</h2>
          <PaymentProvidersCarousel data={paymentLogos} />
        </div>
      </div>
    </section>

    <Solution4thSection data={section4thData} />

  </>;
}

// Fetching Counter
async function getPageData() {
  return await graphQLPromise(
    "topBanner",
    `query topBanner {
      pages(where: {id: 70}) {
        edges {
          node {
            content
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              solutionBlocks {
                solutionsPages {
                  sCtaButton {
                    target
                    title
                    url
                  }
                  sDescription
                  sImage {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                  sSubtitle
                  sTitle
                }
              }
            solutionTravelProviders {
              travelProviders (first:100) {
                edges {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
            solutionPaymentProviders {
              paymentProviders(first: 100) {
                edges {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
            solution4thSection {
              s4thImage {
                node {
                  altText
                  sourceUrl
                }
              }
              s4thContent
              s4thLink {
                target
                title
                url
              }
            }
          }
        }
      }
    }`
  );
}