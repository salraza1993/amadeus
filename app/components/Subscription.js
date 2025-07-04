"use client"
import { useState } from "react";
import { fetch_post } from "../common/CommonFunctions";

function Subscription({content}) {
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
      }, 3000);
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
    fetch_post({
      data: forDetails,
      url: `${process.env.NEXT_PUBLIC_WORDPRESS_WP_JSON_URL}${process.env.NEXT_PUBLIC_WORDPRESS_CONTACT_FROM_URL.replace("(id)", "21")}`,
      header: header
    }, { success: PostSuccess, error: PostSuccess });
    setEmail("");
  }

  return <section className="subscribe-section">
    <div className="container">
      <div className="subscribe-container">
        <h2 className='fs-1 font-amadeus-medium text-balance'>{content?.newsletterHeading}</h2>
        <h5>{content?.newsletterText}</h5>
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
          <span>
            Thanks for subscribing! Amazing content will be shared with you!
          </span>
        </div>}
      </div>
    </div>
  </section>;
}

export default Subscription