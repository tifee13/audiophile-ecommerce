// app/_components/layout/NavLinks.tsx
import Link from "next/link";

const links = [
  { href: "/", label: "HOME" },
  { href: "/category/headphones", label: "HEADPHONES" },
  { href: "/category/speakers", label: "SPEAKERS" },
  { href: "/category/earphones", label: "EARPHONES" },
];

export default function NavLinks() {
  return (
    <nav className="flex flex-col items-center gap-4 text-white text-xs uppercase tracking-widest font-bold 
                    lg:flex-row lg:gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-orange-500 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}