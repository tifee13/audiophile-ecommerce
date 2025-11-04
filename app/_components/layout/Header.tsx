"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useCartStore } from "@/app/_store/cartStore";
import CartModal from "../cart/CartModal";
import Button from "../shared/Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItemsCount = useCartStore((state) => state.items.length);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCategoryPage = pathname.startsWith("/category/");
  const isOtherPage = !isHome && !isCategoryPage;

  let categoryTitle = "";
  if (isCategoryPage) {
    const slug = pathname.split("/").pop() || "";
    categoryTitle = slug.toUpperCase();
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`
          relative z-40 w-full text-white
          
          ${isHome ? "h-[600px] md:h-[729px] lg:h-[729px]" : ""}
          ${isCategoryPage ? "h-[192px] md:h-[291px] lg:h-[336px]" : ""}
          ${isOtherPage ? "h-[90px] md:h-[97px] bg-black-dark" : ""}

          ${isHome ? `
            bg-black-dark 
            bg-[url('/assets/home/mobile/image-hero.jpg')] 
            md:bg-[url('/assets/home/tablet/image-hero.jpg')] 
            lg:bg-[url('/assets/home/desktop/image-hero.jpg')] 
            bg-cover bg-center bg-no-repeat
          ` : `
            bg-black-dark
          `}
        `}
      >
        <div
          className="
            relative mx-auto max-w-[1110px] h-full
            flex flex-col
            px-6 md:px-10 xl:px-0
          "
        >
          <div
            className={`
              flex items-center justify-between 
              h-[90px] md:h-[97px]
              flex-shrink-0
              ${isHome ? "border-b border-white border-opacity-20" : ""}
            `}
          >
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
              <Link href="/" className="hidden md:block">
                <Image
                  src="/assets/shared/logo.svg"
                  width={143}
                  height={25}
                  alt="Audiophile homepage"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-between w-full">
              <Link href="/">
                <Image
                  src="/assets/shared/logo.svg"
                  width={143}
                  height={25}
                  alt="Audiophile homepage"
                />
              </Link>
              <NavLinks />
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
              </button>
            </div>

            <Link
              href="/"
              className="absolute left-1/2 top-[45px] -translate-x-1/2 -translate-y-1/2 md:hidden"
            >
              <Image
                src="/assets/shared/logo.svg"
                width={143}
                height={25}
                alt="Audiophile homepage"
              />
            </Link>

            <button
              onClick={toggleCart}
              className="relative hover:opacity-70 transition-opacity lg:hidden"
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
          </div>
          
          {isCategoryPage && (
             <div className="w-full h-[1px] bg-white bg-opacity-20" />
          )}

          {isHome && (
            <div
              className="
                flex-grow 
                flex flex-col justify-center 
                items-center text-center 
                lg:items-start lg:text-left
              "
            >
              <div className="max-w-[398px] text-white">
                <p className="text-sm uppercase tracking-overline text-white text-opacity-50 mb-4">
                  New Product
                </p>
                <h1 className="text-4xl font-bold uppercase tracking-wide 
                               md:text-5xl 
                               lg:text-6xl">
                  XX99 Mark II
                  <br />
                  Headphones
                </h1>
                <p className="text-base font-medium text-white text-opacity-75 my-6">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                
                <Button
                  href="/products/xx99-mark-ii-headphones"
                  label="See Product"
                  variant="primary"
                />
              </div>
            </div>
          )}

          {isCategoryPage && (
            <div className="flex-grow flex items-center justify-center text-center">
              <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl">
                {categoryTitle}
              </h1>
            </div>
          )}
        </div>
      </header>

      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      <CartModal />
    </>
  );
}