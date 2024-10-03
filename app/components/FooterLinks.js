import Link from 'next/link';
import React from 'react'

function FooterLinks({data, title}) {
  return <div className="main-footer__content">
    <h6 className="__heading mb-3 fw-bold">{title}</h6>
    <ul className="main-footer__content__links">
      {
        data?.map((item, index) => {
          return <li className="main-footer__content__links__item" key={item?.id}>
            <Link href={item?.url}>{item?.label}</Link>
          </li>;
        })
      }
    </ul>
  </div>;
}

export default FooterLinks;