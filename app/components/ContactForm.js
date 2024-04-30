"use client";
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { fetch_get, fetch_post } from '../common/CommonFunctions';


const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitClick, setIsSubmitClick] = useState(false);
  const [countries, setCountries] = useState([]);

  const natureOfBusinessList = [
    "Online Travel", "Retail Travel", "Consolidator", "DMC", "Other"
  ]
  
  const initialFields = [
    {
      type: 'text',
      label: 'Full Name',
      name: 'your-name',
      placeholder: 'Enter Full Name',
      required: true,
    },
    {
      type: 'text',
      label: 'Company Name',
      name: 'your-company-name',
      placeholder: 'Enter Company Name',
      required: true,
    },
    {
      type: 'email',
      label: 'Email',
      name: 'your-email',
      placeholder: 'Enter Email Address',
      required: true
    },
    {
      type: 'select',
      label: 'Country',
      name: 'your-country',
      options: ['USA', 'Canada', 'UK'],
      required: true
    },
    {
      type: 'number',
      label: 'Phone Number',
      name: 'your-phone',
      placeholder: 'Enter Phone Number',
      required: true
    },
    {
      type: 'select',
      label: 'Nature Of Business',
      name: 'your-nature-of-business',
      options: ['USA', 'Canada', 'UK'],
      required: true
    },
    {
      type: 'textarea',
      label: 'Additional Comments (Optional)',
      name: 'your-message',
      placeholder: 'Enter message',
    },
    {
      type: 'checkbox',
      label: 'By submitting this form, I confirm that I have read and understand',
      name: 'privacyPolicy',
      placeholder: 'Enter message',
      required: true
    },
  ];
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    e.preventDefault(); // Prevent default behavior
    const { name, value } = e.target;
    const field = initialFields.find((field) => field.name === name);
    let error = '';
    if (field.required && !value.trim()) {
      error = 'This field is required.';
    }
    if (field.type === 'email' && !isValidEmail(value)) {
      error = 'Please enter a valid email address.';
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  function PostSUccess(data, uid) {
    console.log(data,uid);
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
    const newErrors = {};
    initialFields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = 'This field is required.';
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // else if (captcha) {
    //   setCaptchaError(false);
    //   console.log(captchaError);
    //   return;
    // } else {
    //   setCaptchaError(true);
    //   console.log(captchaError);
    //   return
    // }
    formData['_wpcf7_unit_tag'] = new Date();
    console.table(JSON.stringify(formData));
    // if (isSubmitClick) {
    //   return;
    // }
    // setIsSubmitClick(true);
    let header = { headers: { 'Content-Type': 'multipart/form-data' } };
    fetch_post({ data:formData, url: "http://localhost:8081/amadeos/wp-json/contact-form-7/v1/contact-forms/16/feedback", header:header }, {success: PostSUccess, error:PostSUccess});
    // setFormData({})
    // Here you can submit the form data to your backend or perform any other actions
  };


  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {initialFields.map((field, index) => {
        switch (field.type) {
          case 'select':
            return (
              <div className="input-block" key={index}>
                <label>{field.label}</label>
                <select name={field.name} onChange={handleChange} onBlur={handleBlur}>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors[field.name] && <small className="error">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errors[field.name]}
                </small>}
              </div>
            );
          case 'textarea':
            return (
              <div className="input-block" key={index}>
                <label htmlFor=''>{field.label}</label>
                <textarea
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  cols="30" rows="3" placeholder='Enter Additional Comments'></textarea>
                {errors[field.name] && <small className="error">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errors[field.name]}
                </small>}
              </div>
            );
          case 'checkbox':
            return (
              <div className="input-tnc" key={index}>
                <div>
                  <input
                    type={field.type}
                    name={field.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="privacyPolicy" />
                  <label htmlFor="privacyPolicy">
                    <small>
                      {field.label}
                      <a target='_blank' href="https://amadeus.com/en/policies/privacy-policy">
                        <strong> Amadeus&#39; Privacy Notice</strong>
                      </a>
                      <span className='text-danger'>*</span>
                    </small>
                  </label>
                </div>
                {errors[field.name] && <small className="error">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errors[field.name]}
                </small>}
              </div>
            );
          default:
            return (
              <div className="input-block" key={index}>
                <label htmlFor={field.name}> {field.label}
                  {field.required && <span className='text-danger'> *</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors[field.name] ? 'error' : ''}
                  placeholder='Enter Full Name'
                />
                {errors[field.name] && <small className="error">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errors[field.name]}
                </small>}
              </div>
            );
        }
      })}
      {/* <div className="input-tnc">
        <input type="checkbox" name="privacyPolicy" id="privacyPolicy" />
        <label htmlFor="privacyPolicy">
          <small>
            <a target='_blank' href="https://amadeus.com/en/policies/privacy-policy">
              <strong> Amadeus&#39; Privacy Notice</strong>
            </a>
            <span className='text-danger'>*</span>
          </small>
          
        </label>
      </div> */}
      {/* <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setCaptcha} /> */}
      {/* {captchaError && <small className="error">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <span>Google CAPTCHA is required</span>
      </small>} */}
      <button type="submit" className='btn btn-secondary btn-lg submit-button'>Submit</button>
      <div className="input-block d-none">
        <select name={"field.name"} onChange={handleChange} onBlur={handleBlur}>
          {countries.map((option, index) => (
            <option key={index} value={option.countryCode}>
              {option.countryName}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ContactForm;


