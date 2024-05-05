import '@/app/scss/pages/ResourcesPage.scss';
import HeroBanner from "../components/HeroBanner";
import FaqsAccordion from '../components/FaqsAccordion';
import Link from 'next/link';
import ResourcesVideoSection from '../components/ResourcesVideoSection';
import ImageTag from '../components/ImageTag';

export default function Resources() {
  const heroBannerHeading = "Learn How Amadeus Online Suite Can Elevate Your Business"
  const heroBannerDescription = "Resources to Start and Grow Your Business with ease."
  const heroBannerImage = "/assets/images/resources-banner.png";
  
  return <>
    <HeroBanner image={heroBannerImage} heading={heroBannerHeading} description={heroBannerDescription} />
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
          <div className="download-card">
            <small>Amadeus Online Suite</small>
            <h5>Sales sheet</h5>
            <a href="./assets/downloadable-files/AOS.pdf" download="Amadeus Online Suite.pdf" type=".pdf" title="Download Amadeus Online Suite"  className='download-button'>Download Now <i className="fa-solid fa-download"></i></a>
          </div>
          <div className="download-card">
            <small>Amadeus Online Suite</small>
            <h5>Brochure - Mobile App</h5>
            <a href="./assets/downloadable-files/brochure-mobile.pdf" download="Amadeus Travel Suite-Mobile Sales Sheet.pdf" type=".pdf" title="Download Amadeus Online Suite"  className='download-button'>Download Now <i className="fa-solid fa-download"></i></a>
          </div>
          <div className="download-card">
            <small>Amadeus Online Suite</small>
            <h5>What’s New</h5>
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
                <ImageTag src={"/assets/images/faqs-image.png"} />
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
          <Link href={'/contact'} className='btn btn-secondary btn-lg'>Get Started</Link>
        </div>
      </div>
    </section>


  </>;
}