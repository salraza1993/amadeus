'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function ContactShortIcon() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };
  return (
    <>
      <Link href={"/contact"} className='contact-footer-icon'><i className="fa-solid fa-phone"></i></Link>
      {/* {isVisible && } */}
      <button onClick={scrollToTop} className={isVisible ? 'contact-footer-icon back-to-top show' : 'contact-footer-icon back-to-top'}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  )
}

export default ContactShortIcon