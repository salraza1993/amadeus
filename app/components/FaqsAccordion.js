"use client";

import { useState } from "react";

function FaqsAccordion() {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const accordions = [
    {
      title: "What is Amadeus Online Suite and how does it work?",
      description: "Yes, TMC can activate the “Pay Later” option and configure the applicable airlines in the admin module"
    },
    {
      title: "What is Amadeus Online Suite and how does it work?",
      description: "Yes, TMC can activate the “Pay Later” option and configure the applicable airlines in the admin module"
    },
    {
      title: "What is Amadeus Online Suite and how does it work?",
      description: "Yes, TMC can activate the “Pay Later” option and configure the applicable airlines in the admin module"
    },
    {
      title: "What is Amadeus Online Suite and how does it work?",
      description: "Yes, TMC can activate the “Pay Later” option and configure the applicable airlines in the admin module"
    },
    {
      title: "What is Amadeus Online Suite and how does it work?",
      description: "Yes, TMC can activate the “Pay Later” option and configure the applicable airlines in the admin module"
    },
    {
      title: "What is Amadeus Online Suite and how does it work?",
      description: "Yes, TMC can activate the “Pay Later” option and configure the applicable airlines in the admin module"
    },
  ];

  const accordionHandler = (acc) => {
    setSelectedAccordion(acc);
  }

  return <div class="accordion-container">
    <h2 className='fs-1 m-0 text-left'>FAQs</h2>
    <hr className="mb-4" />
    {
      accordions.map((accordion, index) => {
        return <>
          <div class={selectedAccordion === index ? "accordion-block is-opened": "accordion-block"} key={index}>
            <div class="accordion-block__header" onClick={() => accordionHandler(index)}>
              <h5>{index + 1}. { accordion.title }</h5>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div class="accordion-block__body">
              <div class="__inner">
                <p>{ accordion.description }</p>
              </div>
            </div>
          </div>
        </>
      })
    }
  </div>;
}

export default FaqsAccordion