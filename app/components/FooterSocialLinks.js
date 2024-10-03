import Link from 'next/link';
import React from 'react'

function FooterSocialLinks({links}) {
  return <ul className="footer-social">
    {
      links?.map((item, index) =>
        <li className="footer-social__item" key={index}>
          <Link target="_blank" href={item?.node?.socialLinksInfo?.link}>
            <i className={item?.node?.socialLinksInfo?.iconName}></i>
          </Link>
        </li>
      )
    }
  </ul>;
}

export default FooterSocialLinks