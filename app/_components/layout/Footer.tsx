// app/_components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const socialIcons = [
  {
    href: "https://www.facebook.com",
    icon: "/assets/shared/icon-facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://www.twitter.com",
    icon: "/assets/shared/icon-twitter.svg",
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com",
    icon: "/assets/shared/icon-instagram.svg",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black-dark text-white mt-auto relative">
      
      {/* --- THIS IS THE CORRECTED ORANGE LINE --- */}
      <div 
        className="
          absolute top-0 w-24 h-1 bg-orange-primary

        " 
      />

      {/* This inner div is the main content container */}
      <div
        className="
          mx-auto max-w-[1110px] 
          
          px-6 pt-12 pb-12 /* pt-12 for mobile gives space for the line */
          md:px-10 md:pt-14 md:pb-14 
          xl:px-0 xl:pt-[75px] xl:pb-[48px]
          
          flex flex-col items-center text-center 
          md:items-start md:text-left
        "
      >

        {/* Top Section: Logo (and Nav on Desktop) */}
        <div
          className="
            flex flex-col items-center w-full 
            md:items-start 
            xl:flex-row xl:justify-between
          "
        >
          <Image
            src="/assets/shared/logo.svg"
            width={143}
            height={25}
            alt="Audiophile logo"
          />
          {/* NavLinks: Hidden on Mobile/Tablet, shown on Desktop */}
          <div className="hidden xl:block">
            <NavLinks />
          </div>
        </div>

        {/* Middle Section: Nav (Mobile/Tablet) & Description */}
        <div
          className="
            flex flex-col items-center text-center w-full
            md:items-start md:text-left
            xl:flex-row xl:justify-between xl:mt-9
          "
        >
          {/* NavLinks: Shown on Mobile/Tablet, hidden on Desktop */}
          <div className="mt-12 md:mt-8 xl:hidden">
            <NavLinks />
          </div>

          {/* Description */}
          <p
            className="
              text-white text-opacity-50 text-[15px] font-medium mt-12
              md:mt-8 md:max-w-[573px]
              xl:max-w-[540px] xl:mt-0
            "
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </p>
        </div>

        {/* Bottom Section: Copyright & Social */}
        <div
          className="
            flex flex-col items-center w-full mt-12
            md:flex-row md:justify-between md:items-center
            xl:mt-14
          "
        >
          <p className="text-white text-opacity-50 text-[15px] font-bold">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>

          {/* Social Icons */}
          <div
            className="
              flex gap-4 mt-12
              md:mt-0 
              xl:-translate-y-16 /* Pulls icons up on desktop */
            "
          >
            {socialIcons.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                aria-label={`Visit our ${social.label} page`}
                className="text-white hover:text-orange-primary transition-colors"                >
                <Image
                  src={social.icon}
                  width={24}
                  height={24}
                  alt=""
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}