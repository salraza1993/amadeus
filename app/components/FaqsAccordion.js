"use client";

import { useState } from "react";

function FaqsAccordion() {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const accordions = [
    {
      title: "What is the pricing for Amadeus Online Suite?",
      description: '<p>Amadeus Online Suite offers various pricing schemes for each module across different markets. Please contact your Amadeus account manager,  or email us at <a href="marketing@amadeus.ae">marketing@amadeus.ae</a> for details.</p>'
    },
    {
      title: "Do you provide local LCC/hotel content?",
      description: "<p>Yes, we offer air content from Air Arabia, Fly Dubai, Salam Air, TBO Air, Al Jazeera Airways, air blue, flyJinnah, AirSial, flyadeal, flyNas, and more. <br /> For Hotel content, we have Amadeus Value Hotel, rezlive, TBO Hotel, hotelbeds and Ottila Contact our sales team for further assistance.</p>"
    },
    {
      title: "How can I request a demo session?",
      description: '<p>To schedule a demo, please get in touch with your local account manager or email us at <a href="marketing@amadeus.ae">marketing@amadeus.ae</a></p>'
    },
    {
      title: "Can TMC integrate preferred payment gateways?",
      description: "<p>Yes, we offer custom development for integrating preferred payment gateways.</p>"
    },
    {
      title: "Is there a Content Management System available?",
      description: "<p>Yes, we provide a comprehensive CMS module for managing content, including options to set up Top Destinations, Static Packages, Testimonials, Top Offers, and more.</p>"
    },
    {
      title: "Is Amadeus Online Suite PCI Certified?",
      description: "<p>Yes, our system is PCI Certified.</p>"
    },
    {
      title: "Which META search engine is Amadeus Online Suite connected to?",
      description: "<p>Amadeus Online Suite is currently under development for WEGO integration and will be available soon.</p>"
    },
    {
      title: "Are post-booking functionalities available?",
      description: "<p>Yes, currently it is possible to void a ticket and cancel a PNR. ATC reissue and refunds are currently present in the product roadmap.</p>"
    },
    {
      title: "Where is the application hosted?",
      description: "<p>Our application is hosted on Microsoft Azure.</p>"
    },
    {
      title: "What payment options are currently available in Amadeus Online Suite?",
      description: "<p>In Amadeus Online Suite, available payment options include pay at the agency, credit line, wallet, and credit card.</p>"
    },
    {
      title: "What are the different products available for Amadeus Online Suite?",
      description: "<p>Amadeus Online Suite is available for online travel (B2C), Consolidators (B2B), Mobile applications, and as a Tailor-made custom solution.</p>"
    },
    {
      title: "Is multi-language and multi-currency available?",
      description: "<p>Yes, Amadeus Online Suite is equipped with multi-currency capabilities with an in-built Rate of Exchange module. The system also currently supports multiple languages – English, Arabic, French, Georgian, and Mandarin.</p>"
    },
  ];

  const accordionHandler = (acc) => {
    setSelectedAccordion(acc);
  };

  return <div className="accordion-container">
    <h2 className='fs-1 m-0 text-left'>FAQs</h2>
    <hr className="mb-4" />
    {
      accordions.map((accordion, index) => {
        return <div className={selectedAccordion === index ? "accordion-block is-opened" : "accordion-block"} key={index}>
          <div
            className={selectedAccordion === index ? "accordion-block__header mb-1 is-opened" : "accordion-block__header mb-1"}
            onClick={() => accordionHandler(index)}>
              <h6 className="m-0">{index + 1}. {accordion.title}</h6>
              <i className="fa-solid fa-plus"></i>
          </div>
          <div className="accordion-block__body">
            <div className="__inner" dangerouslySetInnerHTML={{ __html: accordion.description }}></div>
          </div>
        </div>;
      })
    }
  </div>;
}

export default FaqsAccordion;