// app/_components/layout/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu"; // 1. Import the MobileMenu

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. This function toggles the menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="absolute z-50 top-0 left-0 w-full text-white">
        <div className="container mx-auto px-6 py-8 
                        flex items-center justify-between 
                        border-b border-white border-opacity-20
                        lg:py-9 lg:px-10">
          {/* --- Left Side (Hamburger & Logo) --- */}
          <div className="flex items-center gap-10">
            {/* Hamburger (Mobile/Tablet) */}
            <button
              className="lg:hidden"
              onClick={toggleMobileMenu} // 3. Use the toggle function
              aria-label="Open navigation menu"
            >
              <Image
                src="/assets/shared/icon-hamburger.svg"
                width={16}
                height={15}
                alt=""
                aria-hidden="true"
              />
            </button>

            {/* Logo */}
            <Link href="/">
              <Image
                src="/assets/shared/logo.svg"
                width={143}
                height={25}
                alt="Audiophile homepage"
                className="absolute top-9 left-1/2 -translate-x-1/2 
                           md:static md:left-auto md:top-auto md:translate-x-0
                           lg:mr-0"
              />
            </Link>
          </div>

          {/* --- Center (Desktop Nav) --- */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          {/* --- Right Side (Cart) --- */}
          <button className="hover:opacity-70 transition-opacity" aria-label="View cart">
            <Image
              src="/assets/shared/icon-cart.svg"
              width={23}
              height={20}
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      {/* 4. Conditionally render the MobileMenu */}
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </>
  );
}