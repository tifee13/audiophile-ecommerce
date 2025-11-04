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
    <div
      className="relative w-full h-[217px] 
                 md:w-[223px]
                 lg:w-[350px] lg:h-[284px]
                 group"
    >
      <Image
        src={imageSrc}
        width={123}
        height={160} 
        alt={`${label} category`}
        className="
          absolute z-10 left-1/2 -translate-x-1/2 
          group-hover:scale-110 transition-transform duration-300
          w-[80px] h-[104px] -top-[0px]
          lg:w-[123px] lg:h-[160px] lg:-top-[0px]
        "
      />
      
      <Link
        href={href}
        className="
          absolute bottom-0 w-full 
          bg-gray-light rounded-lg 
          flex flex-col items-center justify-end
          h-[165px]
          lg:h-[204px] 
        "
      >
        <span className="text-black-dark font-bold uppercase tracking-wider mb-4
                       text-[15px] lg:text-[18px]">
          {label}
        </span>

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