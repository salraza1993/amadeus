"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function Navigation({ mobileState, hideMobileMenuHandler }) {
  const path = usePathname();
  const topMenus = [
    { label: "Home", path: '/' },
    { label: "Solutions", path: '/solutions' },
    { label: "Resources", path: '/resources' },
    { label: "Contact", path: '/contact' },
  ];
  return (
    <nav className={mobileState ? "navigation opened" : "navigation"}>
      <ul className="top-menu">
        {
          topMenus.map((item, index) => {
            return <li className="top-menu__list" key={index} onClick={() => hideMobileMenuHandler(false)}>
              <Link className={path === item.path ? "top-menu__list active" : "top-menu__list"} href={item.path}>
                {item.label}
              </Link>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation