"use client"
import React, { useState } from 'react'

export default function ContactForm() {
  const [listOfPositions, setListOfPositions] = useState({});
  const formFields = {
    fullName: {
      id: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter Full Name',
      value: '',
      isMandatory: true,
      isError: false,
      errorMessage: "Full Name is required"
    },
    companyName: {
      id: 'companyName',
      label: 'Company Name',
      type: 'text',
      placeholder: 'Enter Company Name',
      value: '',
      isMandatory: true,
      isError: false,
      errorMessage: "Company Name is required"
    },
    email: {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter Email address',
      value: '',
      isMandatory: true,
      isError: false,
      errorMessage: "Email is required"
    },
    country: {
      id: 'country',
      label: 'Country',
      type: 'select',
      select: true,
      options: {
        "": "-- Select --",
      },
      options: listOfPositions,
      isMandatory: true,
      multiline: false,
      value: '',
      isError: false,
      mandatory: false,
      errorMessage: "Email country is required"
    },
    phoneNumber: {
      id: 'phone',
      label: 'Phone',
      type: 'text',
      placeholder: 'Enter Phone Number',
      value: '',
      isMandatory: true,
      isError: false,
      errorMessage: "Phone number is required",
    },
    natureOfBusiness: {
      id: 'natureOfBusiness',
      label: 'Nature Of Business',
      type: 'select',
      options: {
        "": "-- Select --",
      },
      options: listOfPositions,
      isMandatory: true,
      multiline: false,
      value: '',
      isError: false,
      errorMessage: "Nature of Business is required"
    },
    message: {
      id: 'message',
      label: 'Additional Comments (Optional)',
      type: 'textarea',
      placeholder: 'Enter Your Comment',
      value: "",
      isError: false,
      errorMessage: "",
      isMandatory: false,
    },
  }
  const [formData, setFormData] = useState(formFields);


  return <form action="" className="contact-form">
    {
      Object.keys(formData).map(key => {
        const { id, label, placeholder, value, type, isError, errorMessage, isMandatory } = formData[key];
        {
          if (type === 'select') {
            return <div className="input-block">
              <label htmlFor="business">
                { label }
                { isMandatory && <span className='text-danger'> *</span> }
              </label>
              <select name="business" id="business" value={value}>
                <option value="" selected>-- Select Business's Nature --</option>
              </select>
            </div>
          }
          if (type === 'textarea') { 
            return <div className="input-block">
              <label htmlFor="comment">{label}</label>
              <textarea value={value} name="comment" id="comment" cols="30" rows="3" placeholder={placeholder}></textarea>
            </div>
          }
        }
        return (
          <div className="input-block">
            <label htmlFor="fullName">
              {label}
              {isMandatory && <span className='text-danger'> *</span>}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} />
          </div>

        )
      })
    }
    <div className="input-tnc">
      <input type="checkbox" name="privacyPolicy" id="privacyPolicy" />
      <label htmlFor="privacyPolicy">
        <small>
          By submitting this form, I confirm that I have read and understand
          <a target='_blank' href="https://amadeus.com/en/policies/privacy-policy">
            <strong> amadeus&#39; Privacy Notice</strong>
          </a>
        </small>
        <span className='text-danger'>*</span>
      </label>
    </div>
    <button type='button' className='btn btn-secondary btn-lg submit-button'>Submit</button>
  </form>;
}
