import '@/app/scss/pages/ResourcesPage.scss';
import HeroBanner from "../components/HeroBanner";
import FaqsAccordion from '../components/FaqsAccordion';
import Link from 'next/link';

export default function Resources() {
  const heroBannerHeading = "Learn How Amadeus Online Suite Can Elevate Your Business"
  const heroBannerImage = "/assets/images/resources-banner.png";
  
  return <>
    <HeroBanner image={heroBannerImage} heading={heroBannerHeading} />
    <section className="video-section">
      <div className="container">
        <h2 className='fs-1 mb-4'>Explore Amadeus Online Suite</h2>
        <div className="video-container">
          <img src="/assets/images/video-thumbnail.png" alt="" />
          <span className="icon"><img src="/assets/images/video-icon.svg" alt="" /></span>
        </div>
      </div>
    </section>
    
    <section className="browse-content-section">
      <div className="container">
        <div className="browse-content-container">
          <h2 className='fs-1 mb-4'>Browse through more content</h2>
          <div className="row g-md-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="browse-content-card">
                <div className="__image">
                  <img src="/assets/images/browse-image-1.png" alt="" />
                  <div className="icon">
                    <img src="/assets/images/video-icon.svg" alt="" />
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
                  <img src="/assets/images/browse-image-2.png" alt="" />
                  <div className="icon">
                    <img src="/assets/images/video-icon.svg" alt="" />
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
                  <img src="/assets/images/browse-image-1.png" alt="" />
                  <div className="icon">
                    <img src="/assets/images/video-icon.svg" alt="" />
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
    </section>

    <section className="download-section">
      <div className="container">
        <h2 className='fs-1 text-white text-center'>Download  Section</h2>
        <div className="download-container">
          <div className="download-card">
            <small>Amadeus Online Suite</small>
            <h4>Sales sheet -  Travel Engine</h4>
            <a href="" className='download-button'>Download Now <i className="fa-solid fa-download"></i></a>
          </div>
          <div className="download-card">
            <small>Amadeus Online Suite</small>
            <h4>Sales sheet -  Business to Business</h4>
            <a href="" className='download-button'>Download Now <i className="fa-solid fa-download"></i></a>
          </div>
          <div className="download-card">
            <small>Amadeus Online Suite</small>
            <h4>Sales Sheet - Mobile App</h4>
            <a href="" className='download-button'>Download Now <i className="fa-solid fa-download"></i></a>
          </div>
          <div className="download-card">
            <small>Amadeus Online Suite</small>
            <h4>What’s New</h4>
            <a href="" className='download-button'>Download Now <i className="fa-solid fa-download"></i></a>
          </div>
        </div>
      </div>
    </section>

    <section className="faqs-section">
      <div className="container">
        <div className="faqs-container">
          <div className="row">
            <div className="col-12 col-lg-7">
              <FaqsAccordion />
            </div>
            <div className="col-12 col-lg-5">
              <div className="image">
                <img src="/assets/images/faqs-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="short-info-section">
      <div className="container">
        <div className="short-info-container">
          <h2 className='fs-1'>Boost your sales rapidly, intelligently, and efficiently.</h2>
          <p>Experience powerful features, tailored content, and personalized services to maximize your market presence. Click below to.</p>
          <Link href={'/'} className='btn btn-secondary btn-lg'>Get Started</Link>
        </div>
      </div>
    </section>

  </>;
}