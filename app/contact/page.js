import '@/app/scss/pages/Contact.scss';
import HeroBanner from '../components/HeroBanner';
import ImageTag from '../components/ImageTag';
import ContactForm from '../components/ContactForm';

function Contact() {
  const heroBannerHeading = "Connect with our experts";
  const heroBannerDescription = "Get in touch with us today to discover how we can help you achieve your goals.";
  const heroBannerImage = "/assets/images/contact-banner.png";
  return (
    <>
      <HeroBanner image={heroBannerImage} heading={heroBannerHeading} description={heroBannerDescription} />
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="image">
              <ImageTag src={"/assets/images/contact-form-banner.png"} />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact