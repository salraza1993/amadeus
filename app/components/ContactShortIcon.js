import Link from 'next/link';
import React from 'react'

function ContactShortIcon() {
  return (
    <Link href={"/contact"} className='contact-footer-icon'><i className="fa-solid fa-phone"></i></Link>
  )
}

export default ContactShortIcon