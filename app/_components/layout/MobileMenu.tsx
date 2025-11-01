// app/_components/layout/MobileMenu.tsx
"use client";

import CategoryCard from "../categories/CategoryCard";

// Data for our category cards
const categories = [
  {
    href: "/category/headphones",
    imageSrc: "/assets/shared/image-headphones.png",
    label: "HEADPHONES",
  },
  {
    href: "/category/speakers",
    imageSrc: "/assets/shared/image-speakers.png",
    label: "SPEAKERS",
  },
  {
    href: "/category/earphones",
    imageSrc: "/assets/shared/image-earphones.png",
    label: "EARPHONES",
  },
];

type MobileMenuProps = {
  onClose: () => void; // A function passed from the Header to close this menu
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    // 1. Full-screen overlay
    // We use 'fixed' to cover the whole screen and 'z-40' to be just below the Header
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-40"
      onClick={onClose} // Close menu when clicking the dark background
    >
      {/* 2. The menu content */}
      {/* We add 'pt-24' to give space for the Header at the top */}
      <div
        className="bg-white rounded-b-lg shadow-lg px-6 py-8 
                   flex flex-col gap-16 
                   md:px-10 md:py-14 md:flex-row md:gap-3
                   pt-24" // Push content below the header
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.href}
            href={category.href}
            imageSrc={category.imageSrc}
            label={category.label}
          />
        ))}
      </div>
    </div>
  );
}