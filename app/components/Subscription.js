"use client"
import { useState } from "react";
import { fetch_post } from "../common/CommonFunctions";

function Subscription() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Email is required!");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function PostSuccess(data, uid) {
    if (data.status === "mail_sent") { 
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    } else {
      setIsSubmitted(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) { 
      setError(true)
      return
    } else if (!isValidEmail(email)) {
      setError(true)
      setErrorMessage("Please enter a valid email")
      return
    }
    setError(false)

    const forDetails = { "your-email": email }
    
    forDetails['_wpcf7_unit_tag'] = new Date();
    let header = { headers: { 'Content-Type': 'multipart/form-data' } };
    fetch_post({ data: forDetails, url: "https://aoscmsadmin.amadeusonlinesuite.com/wp-json/contact-form-7/v1/contact-forms/21/feedback", header: header }, { success: PostSuccess, error: PostSuccess });
    setEmail("");
  }

  return <section className="subscribe-section">
    <div className="container">
      <div className="subscribe-container">
        <h2 className='fs-1 font-amadeus-medium text-balance'>Scaling your travel business the easy way</h2>
        <h5>Stay Up To Date With Our New Product Features & Industry Best Practices </h5>
        <form action="" className='newsletterForm' onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter your email' value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <button type='submit'>Subscribe to know more</button>
        </form>
        {error && <div className="alert alert-danger d-flex gap-3 align-items-center py-1">
          <i className="fa-solid fa-triangle-exclamation"></i> {errorMessage}
        </div>}
        {isSubmitted && <div className="alert alert-success d-flex gap-3 align-items-center py-1">
          <i className="fa-solid fa-circle-check"></i> 
          <span>Greetings!!!, You'v have subscribed our newsletters to stay updated about our Offers, promotions etc.</span>
        </div>}
      </div>
    </div>
  </section>;
}

export default Subscription