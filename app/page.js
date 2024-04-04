import '@/app/scss/pages/HomePage.scss';
import Slider from './components/Slider';
export default function Home() {

  const whyamadeusList = [
    {
      icon: '/assets/images/icon-realtime-results.svg',
      title: 'Accurate and Realtime Results',
      description: 'We have optimized Online Suite to load Air & Hotel results at blazing speeds. We understand that every customer matters.'
    },
    {
      icon: '/assets/images/icon-desktop.svg',
      title: 'Flexible Payment Options',
      description: 'Customers enjoy flexible payment options: pay online with credit cards, hold bookings and pay later, or utilize the wallet option for consolidators.'
    },
    {
      icon: '/assets/images/icon-dollar-card.svg',
      title: 'Optimize Your Online Revenues',
      description: "Multiple Airline Providers, Low Cost Carriers, Hotel Wholesalers are integrated. You also have smart up-sell options to increase conversions at every step of a customer's journey."
    },
  ];


  return (
    <>
      <Slider />
      
      <section className="home-about-section">
        <div className="container">
          <div className="home-about-container">
            <div className="row align-items-center gy-4">
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="content">
                  <h2 className='fs-1'>Grow Your Online Business With Us!</h2>
                  <p>Amadeus Online Suite can get you online in weeks and has all the content you need to thrive and grow your business. With Mobile Apps, B2B and B2C versions, your are just a click away from business growth.</p>
                  <a href="/" className='btn btn-primary btn-lg'>Find Out More</a>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-end">
                <div className="image">
                  <img src="/assets/images/home-about-img.jpg" alt="Home About Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counters-section">
        <div className="container">
          <div className="counters-container">
            <ul className="counters">
              <li className="counters__list">
                <h2 className='fs-1'>+195</h2>
                <small>Travel Agency portals implemented</small>
              </li>
              <li className="counters__list">
                <small>Live in</small>
                <h2 className='fs-1'>+20</h2>
                <small>Countries</small>
              </li>
              <li className="counters__list">
                <h2 className='fs-1'>+10</h2>
                <small>Flight Suppliers connected</small>
              </li>
              <li className="counters__list">
                <h2 className='fs-1'>+50K</h2>
                <small>Hotel properties</small>
              </li>
              <li className="counters__list">
                <h2 className='fs-1'>+23</h2>
                <small>Payment Gateways to choose from</small>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="why-amadeus-section">
        <div className="container">
          <div className="why-amadeus-container">
            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="why-amadeus__image">
                  <img src="/assets/images/model.png" alt="" />
                  <ul className="points">
                    <li className="points__item">
                      <span className="icon"><img src="/assets/images/icon-ticket.png" alt="" /></span>
                      <span>Flexible Payments</span>
                    </li>
                    <li className="points__item">
                      <span className="icon"><img src="/assets/images/icon-clock.png" alt="" /></span>
                      <span>Realtime</span>
                    </li>
                    <li className="points__item">
                      <span className="icon"><img src="/assets/images/icon-revenue.png" alt="" /></span>
                      <span>Revenues</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="why-amadeus__content">
                  <h2 className='fs-1 text-secondary'>Why Amadeus Online Suite?</h2>
                  <p>Amadeus Online Suite takes your business online in record time. With a community development model, you will benefit from the know-how of hundreds of online travel experts.</p>
                  <ul className="content-list">
                    {
                      whyamadeusList.map((item, index) => {
                        return <li className="content-list__item" key={index}>
                          <span className="icon">
                            <img src={item.icon} alt="" />
                          </span>
                          <div className="text">
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                          </div>
                        </li>;
                      })
                    }
                  </ul>
                  <a href="/" className='btn btn-primary btn-lg'>Get Started </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-container">
            <h2 className='fs-1 text-center'>What Our Customers Say</h2>
            <div className="testimonial-card-container">
              <div className="row">
                <div className="col-4">
                  <div className="testimonial-card">
                    <div className="author-info">
                      <div className="__image">
                        <img src="/assets/images/testimonial-author-image-1.png" alt="" />
                        <ul className="social-links">
                          <li className="social-links__item">
                            <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                          </li>
                          <li className="social-links__item">
                            <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="__name">
                        <h4 className='mb-1'>Tom Hills</h4>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                    <div className="comment">
                      <p>
                        The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="testimonial-card">
                    <div className="author-info">
                      <div className="__image">
                        <img src="/assets/images/testimonial-author-image-1.png" alt="" />
                        <ul className="social-links">
                          <li className="social-links__item">
                            <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                          </li>
                          <li className="social-links__item">
                            <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="__name">
                        <h4 className='mb-1'>Tom Hills</h4>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                    <div className="comment">
                      <p>
                        The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="testimonial-card">
                    <div className="author-info">
                      <div className="__image">
                        <img src="/assets/images/testimonial-author-image-1.png" alt="" />
                        <ul className="social-links">
                          <li className="social-links__item">
                            <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                          </li>
                          <li className="social-links__item">
                            <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                          </li>
                        </ul>
                      </div>
                      <div className="__name">
                        <h4 className='mb-1'>Tom Hills</h4>
                        <p>Marketing Manager</p>
                      </div>
                    </div>
                    <div className="comment">
                      <p>
                        The Amadeus Online Suite platform is reliable, fast, and easy to use. I highly recommend it to anyone looking for a comprehensive travel solution and looking to Go-Live immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-container">
            <h2 className='fs-1'>Scaling your travel business the easy way</h2>
            <h5>Stay Up To Date With Our New Product Features & Industry Best Practices </h5>
            <form action="" className='newsletterForm'>
              <input type="text" placeholder='Enter your email' />
              <button type='button'>Subscribe to know more</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
