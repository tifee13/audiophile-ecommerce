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
    // 1. Main container: Sets the responsive width and total height
    // Mobile: 327x217 (width is w-full)
    // Tablet: 223x217
    // Desktop: 350x284
    <div
      className="relative w-full h-[217px] 
                 md:w-[223px]
                 lg:w-[350px] lg:h-[284px]
                 group"
    >
      {/* 2. Product Image (positioned absolutely) */}
      <Image
        src={imageSrc}
        width={123} // Desktop width
        height={160} // Desktop height
        alt={`${label} category`}
        className="
          absolute z-10 left-1/2 -translate-x-1/2 
          group-hover:scale-110 transition-transform duration-300
          
          /* --- THIS IS THE FIX --- */
          /* Mobile & Tablet: 80x104 image, hanging 52px */
          w-[80px] h-[104px] -top-[0px]
          
          /* Desktop: 123x160 image, hanging 80px */
          lg:w-[123px] lg:h-[160px] lg:-top-[0px]
        "
      />
      
      {/* 3. The Clickable Gray Box */}
      <Link
        href={href}
        className="
          absolute bottom-0 w-full 
          bg-gray-light rounded-lg 
          flex flex-col items-center justify-end
          
          h-[165px]  /* Mobile & Tablet box height: 165px */
          lg:h-[204px] /* Desktop box height: 204px */
        "
      >
        {/* 4. Category Name */}
        <span className="text-black-dark font-bold uppercase tracking-wider mb-4
                       text-[15px] lg:text-[18px]">
          {label}
        </span>

        {/* 5. Shop Link */}
        <div className="flex items-center gap-2 pb-6 text-xs font-bold uppercase text-black-dark text-opacity-50
                        transition-colors group-hover:text-orange-primary
                        lg:pb-[30px]">
          SHOP
          <Image
            src="/assets/shared/icon-arrow-right.png"
            width={5}
            height={10}
            alt=""
            aria-hidden="true"
          />
        </div>
      </Link>
    </div>
  );
}