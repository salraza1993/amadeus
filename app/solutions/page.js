import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from "../components/HeroBanner";
import bannerImage from "/public/assets/images/solution-hero-banner.png";
import ProvidersCarousel from '../components/ProvidersCarousel';
import PaymentProvidersCarousel from '../components/PaymentProvidersCarousel';
import ImageTag from '../components/ImageTag';
import SolutionsBlocks from '../components/SolutionsPage/SolutionsBlocks';
import Solution4thSection from '../components/SolutionsPage/Solution4thSection';

export default function Solutions() {
  const heroBannerHeading = "Seamless Travel Made Simple with our portfolio of Solutions.";
  const heroBannerDescription = "Amadeus Online Suite offers a variety of solutions, ensuring your journey is as smooth as possible from start to finish.";
  const solutionBlocks = [
    {
      path: '/solutions/business-to-business',
      image: '/assets/images/solution-block-image-1.png',
      title: 'Business to Business',
      subTitle: 'Expand your reach cost-effectively.',
      description: 'Amadeus Online Suite Consolidator is a B2B web-based application that allows non-IATA travel agencies to sell travel content to their valued customers.'
    },
    {
      path: '/solutions/business-to-customer-enterprise',
      image: '/assets/images/solution-block-image-2.png',
      title: 'Online Travel Engine',
      subTitle: 'Take your business online in record time and at super low cost.',
      description: 'Amadeus Online B2C solution provides full power of the web. '
    },
    {
      path: '/solutions/tailor-made-online',
      image: '/assets/images/solution-block-image-3.png',
      title: 'Tailored Made Online Travel Suite',
      subTitle: 'Open the Online channel for your travel business.  Online Travel Agency growing to a thousand of transactions a day from multiple countries.',
      description: 'Your own hosted version of Online Suite, with a dedicated team, product road map & priorities. We will work with you as you craft your success.'
    },
    {
      path: '/solutions/business-to-customer-mobile',
      image: '/assets/images/solution-block-image-4.png',
      title: 'Mobile Applications',
      subTitle: 'Be a companion to your customer.',
      description: 'Enhance customer experience with a branded Mobile App and increase revenue opportunities.'
    },
  ];

  return <>
    <HeroBanner image={bannerImage} heading={heroBannerHeading} description={heroBannerDescription} />    
    <SolutionsBlocks data={solutionBlocks} />    
    <section className="providers-section">
      <div className="container">
        <div className="providers-container">
          <h2 className='text-center'>Connect to multiple travel providers with Amadeus Online Suite</h2>
          <ProvidersCarousel />
        </div>
      </div>
    </section>

    <section className="providers-section payment-providers-section">
      <div className="container">
        <div className="providers-container">
          <h2 className='text-center'>A World of Payment Solutions to Grow Your Revenues</h2>
          <PaymentProvidersCarousel />
        </div>
      </div>
    </section>

    <Solution4thSection />

  </>;
}