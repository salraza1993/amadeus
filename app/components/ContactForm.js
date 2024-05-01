"use client";
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { fetch_get, fetch_post } from '../common/CommonFunctions';
import CountryCodeDropdown from './CountryCodeDropdown';
import Link from 'next/link';


const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [comments, setComments] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [error, setError] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const [captcha, setCaptcha] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitClick, setIsSubmitClick] = useState(false);
  const [countries, setCountries] = useState([]);

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const resetFormData = () => {
    setFullName("");
    setCompanyName("");
    setEmailId("");
    setCountryCode("");
    setPhoneNumber("");
    setNatureOfBusiness("");
    setComments("");
    setPrivacyPolicy(false)
    setError(false)
  }

  const handleCountryCodeSelect = (callingCode) => {
    setCountryCode(callingCode);
  };

  function PostSUccess(data, uid) {
    console.log(data, uid);
  }

  useEffect(() => {
    fetch('/countries.json')
      .then(response => response.json())
      .then(data => {

        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!fullName || !companyName || !emailId || !phoneNumber || !natureOfBusiness || !privacyPolicy) {
      setError(true)
      return;
    }
    if (isValidEmail(emailId)) { 

    }
    setError(false)
    resetFormData()

    // Perform form submission logic
    console.log(countryCode);
    console.log('Form submitted!')
  };


  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger d-flex gap-3 align-items-center py-3">
        <i className="fa-solid fa-triangle-exclamation"></i>
        Please Fill up the required fields. Marked with (*)
      </div>
}
      <div className="input-block">
        <label htmlFor="fullName">Full Name <span className='text-danger'>*</span></label>
        <input
          type="text"
          id='fullName'
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          placeholder='Enter Full Name' />
      </div>
      <div className="input-block">
        <label htmlFor="companyName">Company Name <span className='text-danger'>*</span></label>
        <input
          type="text"
          id='companyName'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder='Enter company name' />
      </div>
      <div className="input-block">
        <label htmlFor="email">Email <span className='text-danger'>*</span></label>
        <input
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          type="text"
          id='email'
          placeholder='Enter Email' />
        
      </div>
      <CountryCodeDropdown onCountryCodeSelect={handleCountryCodeSelect} />
      <div className="input-block">
        <label htmlFor="number">Phone Number <span className='text-danger'>*</span></label>
        <input 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text" 
          id='number' 
          placeholder='Enter Phone Number' />
      </div>
      <div className="input-block">
        <label htmlFor="business">Nature of Business <span className='text-danger'>*</span></label>
        <select name="business" id="business" value={natureOfBusiness} onChange={(e) => setNatureOfBusiness(e.target.value)}>
          <option value="DEFAULT">-- Select Business's Nature --</option>
          <option value="Online Travel">Online Travel</option>
          <option value="Retail Travel">Retail Travel</option>
          <option value="Consolidator">Consolidator</option>
          <option value="DMC">DMC</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="input-block">
        <label htmlFor="comment">Additional Comments (optional)</label>
        <textarea 
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          name="comment" 
          id="comment" 
          cols="30" 
          rows="3" 
          placeholder='Enter your comment'></textarea>
      </div>
      <div className="input-tnc">
        <div>
        <input type="checkbox" value={privacyPolicy}
          onChange={(e) => setPrivacyPolicy(e.target.value)} name="privacyPolicy" id="privacyPolicy" />
          <label htmlFor="privacyPolicy">
            <small>
              By submitting this form, I confirm that I have read and understand
              <Link target='_blank' href={"https://amadeus.com/en/policies/privacy-policy"}>
                <strong> Amadeus&#39; Privacy Notice</strong>
              </Link>
            </small>
            <span className='text-danger'>*</span>
          </label>          
        </div>
      </div>
      <button type="submit" className='btn btn-secondary btn-lg submit-button'>Submit</button>
      
    </form>
  );
};

export default ContactForm;


