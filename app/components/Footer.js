import React from 'react';
import Logo from './icons/Logo';
import '@/app/scss/components/Footer.scss';
import Link from 'next/link';

function Footer() {
  const solutions = [
    { label: "Business to Business", path: '/solutions/business-to-business' },
    { label: "Online Travel Engine", path: '/solutions/business-to-customer-enterprise' },
    { label: "Mobile Applications", path: '/solutions/business-to-customer-mobile' },
    { label: "Tailored Made Online Travel Suite", path: '/solutions/tailor-made-online' },
  ];
  const popularLinks = [
    { label: "What’s New", path: '' },
  ];
  const resources = [
    { label: "Download", path: '/resources' },
    { label: "FAQ", path: '/resources' },
    { label: "Privacy Policy", path: 'https://amadeus.com/en/policies/privacy-policy' },
  ];
  const aboutAmadeus = [
    { label: "Contact us", path: '/contact' },
    { label: "Subscribe to know more", path: '/' },
  ];

  return <footer className="main-footer">
    <div className="container">
      <div className="row g-4">
        <div className="col-12 col-lg-4 col-xl-4">
          <div className="main-footer-logo"><Logo /></div>
        </div>
        <div className="col-12 col-lg-8 col-xl-8">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-3">
              <div className="main-footer__content">
                <h6 className="__heading mb-3 fw-bold">Solutions</h6>
                <ul className="main-footer__content__links">
                  {
                    solutions.map((item, index) => {
                      return <li className="main-footer__content__links__item" key={index}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>;
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <div className="main-footer__content">
                <h6 className="__heading mb-3 fw-bold">Popular links</h6>
                <ul className="main-footer__content__links">
                  {
                    popularLinks.map((item, index) => {
                      return <li className="main-footer__content__links__item" key={index}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>;
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <div className="main-footer__content">
                <h6 className="__heading mb-3 fw-bold">Resources</h6>
                <ul className="main-footer__content__links">
                  {
                    resources.map((item, index) => {
                      return <li className="main-footer__content__links__item" key={index}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>;
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <div className="main-footer__content">
                <h6 className="__heading mb-3 fw-bold">About Amadeus</h6>
                <ul className="main-footer__content__links">
                  {
                    aboutAmadeus.map((item, index) => {
                      return <li className="main-footer__content__links__item" key={index}>
                        <Link href={item.path}>{item.label}</Link>
                      </li>;
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="copyrights__links">
          <p className="m-0">© Copyright 2024 - Amadeus Gulf LLC</p>
        </div>
        <ul className="footer-social">
          <li className="footer-social__item">
            <Link target="_blank" href={"https://www.linkedin.com/company/amadeus/"}>
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
          <li className="footer-social__item">
            <Link target="_blank" href={"https://www.facebook.com/AmadeusITGroup/"}>
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
          <li className="footer-social__item">
            <Link target="_blank" href="https://twitter.com/AmadeusITGroup">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
          </li>
          <li className="footer-social__item">
            <Link target="_blank" href={"https://www.instagram.com/amadeusitgroup/"}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="footer-social__item">
            <Link target="_blank" href={"https://www.youtube.com/user/AmadeusITGroup"}>
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>;
}

export default Footer;