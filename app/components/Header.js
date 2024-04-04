"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import Logo from "./icons/Logo";
import '@/app/scss/components/Header.scss';
import Link from "next/link";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const showMobileMenuHandler = (value) => {
    setMobileMenu(value);
  };
  const hideMobileMenuHandler = (value) => {
    setMobileMenu(value);
  };
  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header__sub">
          <div className="__start">
            <div className="main-logo">
              <Link href={'/'}><Logo /></Link>
            </div>
          </div>
          <div className="__center">
            <div className={ mobileMenu ? "menu-bars active" : "menu-bars" } onClick={() => showMobileMenuHandler(!mobileMenu)}>
              <i className={mobileMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            <Navigation mobileState={mobileMenu} hideMobileMenuHandler={hideMobileMenuHandler} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header