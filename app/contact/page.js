import '@/app/scss/pages/Contact.scss';
import HeroBanner from '../components/HeroBanner';
import ImageTag from '../components/ImageTag';
import ContactForm from '../components/ContactForm';

function Contact() {
  const heroBannerHeading = "Connect with our experts right away!";
  const heroBannerImage = "/assets/images/contact-banner.png";
  return (
    <>
      <HeroBanner image={heroBannerImage} heading={heroBannerHeading} />
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