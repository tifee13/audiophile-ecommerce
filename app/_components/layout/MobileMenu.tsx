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
    <div
      className="fixed inset-0 z-40 bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-b-lg shadow-lg px-6 py-8 
                   flex flex-col gap-16 
                   md:px-10 md:py-14 md:flex-row md:gap-3
                   pt-24"
        onClick={(e) => e.stopPropagation()}
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