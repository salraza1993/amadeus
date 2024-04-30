import '@/app/scss/pages/HomePage.scss';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';
import ImageTag from './components/ImageTag';
import Counter from './components/Counter';
import HomeHeroVideo from './components/HomeHeroVideo';
import Link from 'next/link';
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

  const counterData = {
    "counts": [
      {
        "id": "001",
        "plusSymbol": "+",
        "number": "195",
        "textBefore": "",
        "labelAfter": "Travel Agency portals implemented",
        "duration": 2
      },
      {
        "id": "002",
        "plusSymbol": "+",
        "labelBefore": "Live in",
        "labelAfter": "Countries",
        "number": "20",
        "duration": 2
      },
      {
        "id": "003",
        "plusSymbol": "+",
        "textBefore": "",
        "labelAfter": "Flight Suppliers connected",
        "number": "10",
        "duration": 2
      },
      {
        "id": "004",
        "plusSymbol": "+",
        "textBefore": "",
        "labelAfter": "Hotel properties",
        "number": "500000",
        "duration": 2
      },
      {
        "id": "005",
        "plusSymbol": "+",
        "textBefore": "",
        "labelAfter": "Payment Gateways to choose from",
        "number": "23",
        "duration": 2
      },
    ]
  }


  return (
    <>
      <HomeHeroVideo />
      {/* <Slider /> */}
      
      <section className="home-about-section">
        <div className="container">
          <div className="home-about-container">
            <div className="row align-items-center gy-4">
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="content">
                  <h2 className='fs-1 font-amadeus-medium text-balance'>Grow Your Online Business With Us!</h2>
                  <p className='text-balance'>Amadeus Online Suite can get you online in weeks and has all the content you need to thrive and grow your business. With Mobile Apps, B2B and B2C versions, your are just a click away from business growth.</p>
                  <Link href={"/solutions/"} className='btn btn-primary btn-lg'>Find Out More</Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-end">
                <div className="image">
                  <ImageTag src="/assets/images/home-about-img.jpg" />
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
              {counterData.counts.map(count => <Counter key={count.id} data={count} />)}
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
                  <ImageTag src="/assets/images/model.png" />

                  <ul className="points">
                    <li className="points__item">
                      <span className="icon">
                        <ImageTag src="/assets/images/icon-ticket.png" />
                      </span>
                      <span>Flexible Payments</span>
                    </li>
                    <li className="points__item">
                      <span className="icon">
                        <ImageTag src="/assets/images/icon-clock.png" />
                      </span>
                      <span>Realtime</span>
                    </li>
                    <li className="points__item">
                      <span className="icon">
                        <ImageTag src="/assets/images/icon-revenue.png" />
                      </span>
                      <span>Revenues</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="why-amadeus__content">
                  <h2 className='fs-1 text-secondary font-amadeus-medium text-balance'>Why Amadeus Online Suite?</h2>
                  <p>Amadeus Online Suite takes your business online in record time. With a community development model, you will benefit from the know-how of hundreds of online travel experts.</p>
                  <ul className="content-list">
                    {
                      whyamadeusList.map((item, index) => {
                        return <li className="content-list__item" key={index}>
                          <span className="icon">
                            <ImageTag src={item.icon} />
                          </span>
                          <div className="text">
                            <h5 className='fw-bold'>{item.title}</h5>
                            <p>{item.description}</p>
                          </div>
                        </li>;
                      })
                    }
                  </ul>
                  <Link href={"/contact"} className='btn btn-primary btn-lg'>Get Started </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-container">
            <h2 className='fs-1 text-center font-amadeus-medium'>What Our Customers Say</h2>
            <div className="testimonial-card-container">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-container">
            <h2 className='fs-1 font-amadeus-medium text-balance'>Scaling your travel business the easy way</h2>
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
