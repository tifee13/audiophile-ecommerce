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
    // We add 'mt-auto' to push the footer to the bottom if content is short
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-6 py-12 
                      flex flex-col items-center text-center gap-12
                      md:px-10 md:py-14 md:items-start md:text-left
                      lg:px-16 lg:py-20">
        
        {/* Decorative Orange Bar */}
        <div className="w-24 h-1 bg-orange-primary md:w-28" />

        {/* Top Section: Logo & Nav */}
        <div className="flex flex-col items-center gap-12 
                        md:items-start md:w-full
                        lg:flex-row lg:justify-between">
          <Image
            src="/assets/shared/logo.svg"
            width={143}
            height={25}
            alt="Audiophile logo"
          />
          <NavLinks />
        </div>

        {/* Middle Section: Description */}
        <p className="text-white text-opacity-50 text-base font-medium max-w-xl 
                      lg:max-w-lg">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        {/* Bottom Section: Copyright & Social */}
        <div className="flex flex-col items-center gap-12 w-full
                        md:flex-row md:justify-between">
          <p className="text-white text-opacity-50 text-base font-bold">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>

          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                aria-label={`Visit our ${social.label} page`}
                className="hover:opacity-70 transition-opacity"
              >
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