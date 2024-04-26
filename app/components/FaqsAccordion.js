"use client";

import { useState } from "react";

function FaqsAccordion() {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const accordions = [
    {
      title: "What is the pricing for Amadeus Online Suite?",
      description: "Amadeus Online Suite offers various pricing schemes for each module across different markets. Please contact your Amadeus account manager,  or email us at marketing@amadeus.ae for details."
    },
    {
      title: "Do you provide local LCC/hotel content?",
      description: "Yes, we offer air content from Air Arabia, Fly Dubai, Salam Air, TBO Air, Al Jazeera Airways, air blue, flyJinnah, AirSial, flyadeal, flyNas, and more. For Hotel content, we have Amadeus Value Hotel, rezlive, TBO Hotel, hotelbeds and Ottila Contact our sales team for further assistance."
    },
    {
      title: "How can I request a demo session?",
      description: "To schedule a demo, please get in touch with your local account manager or email us at marketing@amadeus.ae."
    },
    {
      title: "Can TMC integrate preferred payment gateways?",
      description: "Yes, we offer custom development for integrating preferred payment gateways."
    },
    {
      title: "Is there a Content Management System available?",
      description: "Yes, we provide a comprehensive CMS module for managing content, including options to set up Top Destinations, Static Packages, Testimonials, Top Offers, and more."
    },
    {
      title: "Is Amadeus Online Suite PCI Certified?",
      description: "Yes, our system is PCI Certified."
    },
    {
      title: "Which META search engine is Amadeus Online Suite connected to?",
      description: "Amadeus Online Suite is currently under development for WEGO integration and will be available soon."
    },
    {
      title: "Are post-booking functionalities available?",
      description: "Yes, currently it is possible to void a ticket and cancel a PNR. ATC reissue and refunds are currently present in the product roadmap."
    },
    {
      title: "Where is the application hosted?",
      description: "Our application is hosted on Microsoft Azure."
    },
    {
      title: "What payment options are currently available in Amadeus Online Suite?",
      description: "In Amadeus Online Suite, available payment options include pay at the agency, credit line, wallet, and credit card."
    },
    {
      title: "What are the different products available for Amadeus Online Suite?",
      description: "Amadeus Online Suite is available for online travel (B2C), Consolidators (B2B), Mobile applications, and as a Tailor-made custom solution."
    },
    {
      title: "Is multi-language and multi-currency available?",
      description: "Yes, Amadeus Online Suite is equipped with multi-currency capabilities with an in-built Rate of Exchange module. The system also currently supports multiple languages – English, Arabic, French, Georgian, and Mandarin."
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
          <div className={selectedAccordion === index ? "accordion-block__header is-opened" : "accordion-block__header"} onClick={() => accordionHandler(index)}>
            <h5>{index + 1}. {accordion.title}</h5>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="accordion-block__body">
            <div className="__inner">
              <p>{accordion.description}</p>
            </div>
          </div>
        </div>;
      })
    }
  </div>;
}

export default FaqsAccordion;