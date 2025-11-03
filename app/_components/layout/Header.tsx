// app/_components/layout/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useCartStore } from "@/app/_store/cartStore";
import CartModal from "../cart/CartModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItemsCount = useCartStore((state) => state.items.length);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className="
          relative z-50 w-full bg-black-dark
        "
      >
        {/* This div contains all header content and aligns it */}
        <div
          className="
            relative mx-auto max-w-[1110px] 
            flex items-center justify-between 
            h-[90px] md:h-[97px] /* Precise height */
            px-6 md:px-10 xl:px-0 /* Precise padding */
          "
        >
          {/* Left Side: Hamburger & Tablet Logo */}
          <div className="flex items-center gap-11 lg:hidden">
            <button
              onClick={toggleMobileMenu}
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
            {/* Tablet Logo (hidden on mobile and desktop) */}
            <Link href="/" className="hidden md:block">
              <Image
                src="/assets/shared/logo.svg"
                width={143}
                height={25}
                alt="Audiophile homepage"
              />
            </Link>
          </div>

          {/* Desktop Logo (hidden on mobile and tablet) */}
          <Link href="/" className="hidden lg:block">
            <Image
              src="/assets/shared/logo.svg"
              width={143}
              height={25}
              alt="Audiophile homepage"
            />
          </Link>

          {/* Mobile Logo (Absolute Center, hidden on tablet/desktop) */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
          >
            <Image
              src="/assets/shared/logo.svg"
              width={143}
              height={25}
              alt="Audiophile homepage"
            />
          </Link>

          {/* Desktop Nav (Center) */}
          <div className="hidden lg:block">
            <NavLinks />
          </div>

          {/* Cart Icon (Right) */}
          <button
            onClick={toggleCart}
            className="relative hover:opacity-70 transition-opacity"
            aria-label="View cart"
          >
            <Image
              src="/assets/shared/icon-cart.svg"
              width={23}
              height={20}
              alt=""
              aria-hidden="true"
            />
            {cartItemsCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-orange-primary 
                             text-white text-xs font-bold rounded-full 
                             w-5 h-5 flex items-center justify-center"
              >
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Horizontal Line (for home page only) */}
          {isHome && (
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white bg-opacity-20" />
          )}
        </div>
      </header>

      {/* Menus */}
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      <CartModal />
    </>
  );
}