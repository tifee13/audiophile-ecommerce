// app/_components/layout/MobileMenu.tsx
"use client";

import CategoryCard from "../categories/CategoryCard";

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
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    // Full-screen overlay
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-40"
      onClick={onClose} // Close menu when clicking the dark background
    >
      {/* The menu content container */}
      <div
        className="
          bg-white rounded-b-lg shadow-lg px-6 py-8
          flex flex-col gap-16
          md:px-10 md:py-14 md:flex-row md:gap-3
          pt-24
        "
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
      >
        {/* --- ADDED CLOSE BUTTON SECTION --- */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <button
                onClick={onClose}
                aria-label="Close menu"
                className="text-black-dark text-opacity-50 hover:text-orange-primary text-2xl font-bold transition-colors"
            >
                &times; {/* The HTML entity for the 'X' button */}
            </button>
        </div>
        {/* --- END CLOSE BUTTON SECTION --- */}
        
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