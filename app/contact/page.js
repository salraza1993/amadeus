import '@/app/scss/pages/Contact.scss';
import HeroBanner from '../components/HeroBanner';
import ImageTag from '../components/ImageTag';

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
            <form action="" className="contact-form">
              <div className="input-block">
                <label htmlFor="fullName">Full Name <span className='text-danger'>*</span></label>
                <input type="text" id='fullName' placeholder='Enter Full Name' />
              </div>
              <div className="input-block">
                <label htmlFor="companyName">Company Name <span className='text-danger'>*</span></label>
                <input type="text" id='companyName' placeholder='Enter company name' />
              </div>
              <div className="input-block">
                <label htmlFor="email">Email <span className='text-danger'>*</span></label>
                <input type="text" id='email' placeholder='Enter Email' />
              </div>
              <div className="input-block">
                <label htmlFor="country">Country <span className='text-danger'>*</span></label>
                <select name="country" id="country">
                  <option value="" selected>-- Select country --</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                </select>
              </div>
              <div className="input-block">
                <label htmlFor="number">Phone Number <span className='text-danger'>*</span></label>
                <input type="text" id='number' placeholder='Enter Phone Number' />
              </div>
              <div className="input-block">
                <label htmlFor="business">Nature of Business <span className='text-danger'>*</span></label>
                <select name="business" id="business">
                  <option value="" selected>-- Select Business's Nature --</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                  <option value="Option">Option</option>
                </select>
              </div>
              <div className="input-block">
                <label htmlFor="comment">Additional Comments (optional)</label>
                <textarea name="comment" id="comment" cols="30" rows="3" placeholder='Enter your comment'></textarea>
              </div>
              <div className="input-tnc">
                <input type="checkbox" name="privacyPolicy" id="privacyPolicy" />
                <label htmlFor="privacyPolicy">
                  <small>
                    By submitting this form, I confirm that I have read and understand 
                    <strong> amadeus&#39; Privacy Notice</strong>
                  </small>
                  <span className='text-danger'>*</span>
                </label>
              </div>
              <button type='button' className='btn btn-secondary btn-lg submit-button'>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact