"use client";
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { fetch_post } from '../common/CommonFunctions';
import CountryCodeDropdown from './CountryCodeDropdown';
import Link from 'next/link';


const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [comments, setComments] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("All fields are required. Marked with (*)");
  const [success, setSuccess] = useState(false);

  const [captcha, setCaptcha] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitClick, setIsSubmitClick] = useState(false);
  const [countries, setCountries] = useState([]);

  // Reset Form
  const resetFormData = () => {
    setFullName("");
    setCompanyName("");
    setEmailId("");
    setCountry("");
    setPhoneNumber("");
    setNatureOfBusiness("");
    setComments("");
    setPrivacyPolicy(false);
    setError(false);
  };
  // Email Validation
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Country Dropdown Selection
  const handleCountrySelect = (country) => setCountry(country);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!fullName || !companyName || !emailId || !phoneNumber || !natureOfBusiness || !privacyPolicy) {
      setError(true);
      return;
    }
    if (!isValidEmail(emailId)) {
      setError(true);
      setErrorMessage("Please enter a valid Email!");
      return;
    }
    if (!country || country === "") {
      setError(true);
      setErrorMessage("Please, Select the Country");
      return;
    }

    setError(false);
    const formData = {
      "your-name": fullName,
      "your-company-name": companyName,
      "your-email": emailId,
      "your-country": country.countryName,
      "your-phone": country.callingCode + phoneNumber,
      "your-nature-of-business": natureOfBusiness,
      "your-message": comments,
    };

    function postSuccess(data, uid) {
      if (data.status === "mail_sent") {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3500);
      } else {
        setSuccess(false);
      }
    }

    formData['_wpcf7_unit_tag'] = new Date();
    let header = { headers: { 'Content-Type': 'multipart/form-data' } };
    fetch_post({ data: formData, url: "https://aoscmsadmin.amadeusonlinesuite.com/wp-json/contact-form-7/v1/contact-forms/16/feedback", header: header }, { success: postSuccess, error: postSuccess });
    resetFormData();
  };


  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
      <CountryCodeDropdown onCountryCodeSelect={handleCountrySelect} />
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
        <label htmlFor="business">Type of Business <span className='text-danger'>*</span></label>
        <select name="business" id="business" value={natureOfBusiness} onChange={(e) => setNatureOfBusiness(e.target.value)}>
          <option value="DEFAULT">-- Select Business's Nature --</option>
          <option value="Online Travel">Online Travel</option>
          <option value="Retail Travel">Retail Travel</option>
          <option value="Consolidator">Consolidator</option>
          <option value="DMC">Destination Management Company</option>
          <option value="New Travel Agency">New Travel Agency</option>
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
            <span className='text-danger'> *</span>
          </label>
        </div>
      </div>
      <button type="submit" className='btn btn-secondary btn-lg submit-button'>Submit</button>
      {
        error && <div className="alert alert-danger d-flex gap-3 align-items-center py-3">
          <i className="fa-solid fa-triangle-exclamation"></i> {errorMessage}
        </div>
      }
      {
        success && <div className="alert w-100 max-100 alert-success d-flex gap-3 align-items-center py-3">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span>
            The form has been submitted successfully! <br />
            We'll contact you shortly!
          </span>
        </div>
      }
    </form>
  );
};

export default ContactForm;


