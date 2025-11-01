// app/_components/categories/CategoryCard.tsx
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  href: string;
  imageSrc: string;
  label: string;
};

export default function CategoryCard({
  href,
  imageSrc,
  label,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="relative group flex flex-col items-center w-full max-w-[350px]
                 bg-gray-100 rounded-lg pt-22 pb-5"
    >
      {/* 1. Product Image (positioned absolutely) */}
      <Image
        src={imageSrc}
        width={123} // Example width, adjust based on exported image
        height={104} // Example height, adjust based on exported image
        alt={`${label} category`}
        // Use negative margin to "hang" the image outside the top of the card
        className="absolute -top-14 group-hover:scale-110 transition-transform duration-300"
      />

      {/* 2. Category Name */}
      <span className="text-black font-bold text-base uppercase tracking-wider">
        {label}
      </span>

      {/* 3. Shop Link */}
      <div className="flex items-center gap-2 mt-4 text-xs font-bold uppercase text-black text-opacity-50">
        SHOP
        <Image
          src="/assets/shared/icon-arrow-right.svg"
          width={5}
          height={10}
          alt=""
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}