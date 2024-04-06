import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from "../components/HeroBanner";
import bannerImage from "/public/assets/images/solution-hero-banner.png";
import ProvidersCarousel from '../components/ProvidersCarousel';
import PaymentProvidersCarousel from '../components/PaymentProvidersCarousel';

export default function Solutions() {
  const solutionBlocks = [
    {
      path: '',
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
      path: '',
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
    <HeroBanner heading="Complete travel eco-system at your finger tips" />
    
    <section className="solution-blocks-section">
      {
        solutionBlocks.map((block, index) => {
          return <div className={index % 2 === 0 ? "solution-block odd" : 'solution-block even'} key={index}>
            <div className="container">
              <div className={index % 2 === 0 ? "row g-4" : 'row g-4 flex-row-reverse'}>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <div className="image">
                    <img src={block.image} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                  <div className={index % 2 === 0 ? "content odd" : 'content even'}>
                    <h2>{block.title}</h2>
                    <h5>{block.subTitle}</h5>
                    <p>{block.description}</p>
                    <a href={block.path} className='btn btn-secondary btn-lg' >Discover More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>;
        })
      }
    </section>
    
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

    <section className="amadeus-online-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="content">
              <h2 className='fs-1'>Unlock your growth potential with Amadeus Online Suite today!</h2>
              <p>
                Experience powerful features, tailored content, and personalized services to maximize your market presence. 
              </p>
              <a href="/" className='btn btn-secondary btn-lg'>Get in touch</a>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-end">
            <div className="image">
              <img src="/assets/images/model-man.png" alt="" />
            </div>
          </div>
        </div>        
      </div>
    </section>

  </>;
}