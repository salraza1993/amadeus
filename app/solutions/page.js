import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from "../components/HeroBanner";
import bannerImage from "/public/assets/images/solution-hero-banner.png";
import ProvidersCarousel from '../components/ProvidersCarousel';
import PaymentProvidersCarousel from '../components/PaymentProvidersCarousel';
import ImageTag from '../components/ImageTag';
import SolutionsBlocks from '../components/SolutionsPage/SolutionsBlocks';
import Solution4thSection from '../components/SolutionsPage/Solution4thSection';

export default function Solutions() {
  const heroBannerHeading = "Complete travel eco-system at your finger tips";
  const solutionBlocks = [
    {
      path: '/solutions/business-to-business',
      image: '/assets/images/solution-block-image-1.png',
      title: 'Business to Business',
      subTitle: 'Connect travel agency partners, sub agents and expand your reach cost effectively.',
      description: 'Amadeus Consolidator is a B2B web-based application that allows non IATA Travel agencies to sell varied travel content to their valued customers.'
    },
    {
      path: '',
      image: '/assets/images/solution-block-image-2.png',
      title: 'Online Travel Engine',
      subTitle: 'Take your business online in record time and at super low cost.',
      description: 'Amadeus Online B2C solution provides full power of the web. '
    },
    {
      path: 'ass',
      image: '/assets/images/solution-block-image-3.png',
      title: 'Tailored Made Online Travel Suite',
      subTitle: 'You have ambitions to become an OTA generating thousands of transactions a day from multiple countries.',
      description: 'Your own hosted version of Online Suite, with a dedicated team, product road map & priorities. We will work with you as you craft your success.'
    },
    {
      path: '',
      image: '/assets/images/solution-block-image-4.png',
      title: 'Mobile Applications',
      subTitle: 'Putting mobile at the center of the travel',
      description: 'Enhance your customer experience with your branded Mobile App.'
    },
  ];

  return <>
    <HeroBanner image={bannerImage} heading={heroBannerHeading} />    
    <SolutionsBlocks data={solutionBlocks} />    
    <section className="providers-section">
      <div className="container">
        <div className="providers-container">
          <h2 className='text-center'>Connect to multiple travel providers with Amadeus Online Suite.</h2>
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